"use client"
import Image from "next/image";

import * as React from 'react';
import { useState,useEffect } from "react";
// import { useRouter } from 'next/router';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LeftSideBar from "../_component/leftsidebar";
import GoogleAuth from "../_component/googleAuth";
import ContentTitle from "../_component/taskView";
import CompileScreen from "../_component/compileView";
import { Supabase } from "../_component/config/supabase";

import { TaskCardProps, TaskTagProps, CompileTaskProps } from "../_component/config/propsType";

export default function Right(props:any) {
  const [showScreen, setShowScreen] = useState<string>("タスク管理");
  const [startTitle, setStartTitle] = useState<string>("タスク");
  const [Account, setAccount] = useState<string>('');
  const [userData,setUserData] = useState<any>([]);
  const [userPicture, setUserPicture] = useState<string>("");

  const [taskData, setTaskData] = useState<TaskCardProps[]|any>([]);
  const [taskTags, setTaskTags] = useState<TaskTagProps[]|any>([]);
  const [priorityDue, setPriorityDue] = useState<boolean>(true);

  const [compileTasks, setCompileTasks] = useState<CompileTaskProps[]>([]);
  const [sessionOk, setSessionOk] = useState<boolean>(false);

  const getCurrentUser = async () => {
    // ログインのセッションを取得する処理
    const { data } = await Supabase.auth.getSession()
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (data.session !== null && !sessionOk) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const { data: { user } } = await Supabase.auth.getUser()
      // currentUserにユーザーのメールアドレスを格納
      if(user){
        setUserData(user);
        setAccount(user.email??"")
        console.log(user.email??"");
        if(data.session?.user.identities && data.session?.user.identities[0].identity_data){
          // console.log(data.session?.user.identities[0].identity_data.picture);
          setUserPicture(data.session?.user.identities[0].identity_data.picture)
        }
        setSessionOk(true);
      }
    }
    else{
      if(!sessionOk){
        setSessionOk(false);
      }
    }
    return;
  }
  // ユーザーID
  const getAllTasks = async()=>{
    let { data, error, status } = await Supabase
      .from('task')
      .select(`task_id, task_name, task_detail, task_point, task_from, task_due, task_end, task_priority, task_tag_id, task_user_id, task_due_edit, task_estimate_time, task_time, task_timer_start`)
      .eq('task_user_id', userData.id)
      .order('task_due', { ascending: true })
      .order('task_priority', { ascending: true });
    console.log(data);
    console.log(error);
    if(data){
      setTaskData(data);
    }
  }
  // ユーザーID & 完了
  const getEndTasks = async()=>{
    let { data, error, status } = await Supabase
      .from('task')
      .select(`task_id, task_name, task_detail, task_point, task_from, task_due, task_end, task_priority, task_tag_id, task_user_id, task_due_edit, task_estimate_time, task_time, task_timer_start`)
      .eq('task_user_id', userData.id)
      .gt("task_point",99)
      .order('task_due', { ascending: true })
      .order('task_priority', { ascending: true });
    console.log(data);
    console.log(error);
    if(data){
      setTaskData(data);
    }
  }
  // ユーザーID ＆ 未完了（期日）
  const getTasks1 = async()=>{
    let { data, error, status } = await Supabase
      .from('task')
      .select(`task_id, task_name, task_detail, task_point, task_from, task_due, task_end, task_priority, task_tag_id, task_user_id, task_due_edit, task_estimate_time, task_time, task_timer_start`)
      .eq('task_user_id', userData.id)
      .lt("task_point",100)
      .order('task_due', { ascending: true })
      .order('task_priority', { ascending: true });
    console.log(data);
    console.log(error);
    if(data){
      setTaskData(data);
    }
  }
  // ユーザーID ＆ 未完了（優先度）
  const getTasks2 = async()=>{
    let { data, error, status } = await Supabase
      .from('task')
      .select(`task_id, task_name, task_detail, task_point, task_from, task_due, task_end, task_priority, task_tag_id, task_user_id, task_due_edit, task_estimate_time, task_time, task_timer_start`)
      .eq('task_user_id', userData.id)
      .lt("task_point",100)
      .order('task_priority', { ascending: true })
      .order('task_due', { ascending: true });
    console.log(data);
    console.log(error);
    if(data){
      setTaskData(data);
    }
  }
  const getTaskTags = async()=>{
    let { data, error, status } = await Supabase
      .from('task_tag')
      .select(`task_tag_id, task_tag_name , create_user_id`)
      .eq('create_user_id', userData.id);
    console.log(data);
    console.log(error);
    if(data){
      setTaskTags(data);
    }
  }
  const today:Date = new Date();
  const insertTask = async() => {
    const { error } = await Supabase
      .from('task')
      .insert({ 
        task_name: "",
        task_detail: '',
        task_point:0,
        task_from:today,
        task_due:today,
        task_end:null,
        task_priority:0,
        task_tag_id:null,
        task_user_id:userData.id,
        task_due_edit:null, 
        task_estimate_time:10, 
        task_time:0,
        task_timer_start:null,
      });
  }
  const updateTask = async(input:TaskCardProps) => {
    const { error } = await Supabase
      .from('task')
      .update({ 
        task_id:input.task_id,
        task_name:input.task_name,
        task_detail: input.task_detail,
        task_point:input.task_point,
        task_from:input.task_from,
        task_due:input.task_due,
        task_end:input.task_end,
        task_priority:input.task_priority,
        task_tag_id:input.task_tag_id,
        task_user_id:input.task_user_id,
        task_due_edit:input.task_due_edit, 
        task_estimate_time:input.task_estimate_time, 
        task_time:input.task_time,
        task_timer_start:input.task_timer_start,
      })
      .eq('task_id', input.task_id);
    console.log(error);
  }
  const deleteTask = async(task_id:string) => {
    const { error } = await Supabase
      .from('task')
      .delete()
      .eq('task_id', task_id);
    console.log(error);
  }
  useEffect(()=>{
    getCurrentUser();
  },[sessionOk]);
  useEffect(()=>{
    getTasks1();
    getTaskTags();
  },[userData]);

  // 集計用
  const getAllCompileTasks = async(from:string,to:string)=>{
    let { data, error, status } = await Supabase
      .from('task')
      .select(`task_name,task_point, task_from, task_due, task_end, task_priority, task_tag_id, task_user_id, task_due_edit, task_estimate_time, task_time, task_timer_start, task_timer_end`)
      .eq('task_user_id', userData.id)
      .gte("task_from",from)
      .lte("task_due",to)
      .order('task_due', { ascending: true })
      .order('task_priority', { ascending: true });
    console.log(data);
    console.log(error);
    if(data){
      setCompileTasks(data);
    }
    return;
  }

  // const router = useRouter();
  const Logout = async() => {
    try{
      const { error:logoutError } = await Supabase.auth.signOut()
      if (logoutError) {
        throw logoutError;
      }
      // await router.push("/");
      setAccount("");

    }catch{
      alert('エラーが発生しました');
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} 
            sx={{
              height:"100%",
              ml:"0%",
              mr:"1%",
              maxWidth:"98%",
              top:0,
              position:"relative",
              m:"0%"
            }}
      >
        <Grid xs={2} sx={{maxHeight:"100%"}}>
          <LeftSideBar
            changeShowScreen = {setShowScreen}
            showScreen = {showScreen}
            showTitle = {startTitle}
            // Login={<GoogleAuth
            //   Visibility={Account==""?"visible":"hidden"}
            // />}
          />
        </Grid>
        <GoogleAuth
          Visibility={Account==""?"visible":"hidden"}
        />
        {
          Account != "" &&
          <>
            <Grid xs={10} sx={{maxHeight:"98%"}}>
              <CssBaseline />
              <Box sx={{ 
                  // bgcolor: '#f0e68c', 
                  height: '100%',
                  width:'100%',
                  m:"1%"
                }} 
              >
                {
                  showScreen =="タスク管理" &&
                  <ContentTitle
                    contentTitleName={showScreen}
                    Account={Account}
                    topics={taskData}
                    subtopic={taskTags}
                    checkLogin={getCurrentUser}
                    logout={Logout}
                    image_url={userPicture}
                    createCard={insertTask}
                    reloadCard1={getTasks1}
                    reloadCard2={getTasks2}
                    updateCard={updateTask}
                    deleteCard={deleteTask}
                    createCardName={"タスク作成"}
                    reloadCardName1={"未完了[期日]"}
                    reloadCardName4={"未完了[優先度]"}
                    reloadCardName2={"完了"}
                    reloadCardName3={"全て"}
                    getAllTasks={getAllTasks}
                    getEndTasks={getEndTasks}
                    priorityDue={priorityDue}
                    selectPriorityDue={setPriorityDue}
                  />
                }
                {
                  showScreen =="タスク集計" &&
                  <CompileScreen
                    contentTitleName={showScreen}
                    Account={Account}
                    logout={Logout}
                    image_url={userPicture}
                    getAllCompileTasks={getAllCompileTasks}
                    compileTasks={compileTasks}
                  />
                }
              </Box>
            </Grid>
          </>
        }
      </Grid>
  </React.Fragment>
  );
}