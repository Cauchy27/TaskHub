"use client"
import * as React from 'react';
import { useState,useEffect } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TaskCardProps, TaskTagProps } from './config/propsType';
import CircularProgressWithLabel from './circleProggressWithLabel';

import CreateIcon from '@mui/icons-material/Create';
import AddTaskIcon from '@mui/icons-material/AddTask';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
type topicProps  ={
  topic:TaskCardProps,
  subtopic:TaskTagProps|any,
  updateCard:any,
  deleteTask:any,
  reloadTasks:any,
  deleteNG:boolean
}
const priorities:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const TaskCard = (props:topicProps) => {
  const [taskName,setTaskName]=useState<string>(props.topic.task_name);
  const [taskDetail,setTaskDetail]=useState<string>(props.topic.task_detail);
  const [taskPoint,setTaskPoint]=useState<number>(props.topic.task_point);
  const [taskFrom,setTaskFrom]=useState<string|Date|any>(props.topic.task_from);
  const [taskDue,setTaskDue]=useState<string|Date|any>(props.topic.task_due);
  const [taskPriority,setTaskPriority]=useState<number>(props.topic.task_priority);
  const [taskTagId,setTaskTagId]=useState<string>(props.topic.task_tag_id);
  const [taskEnd,setTaskEnd]=useState<Date|string>(props.topic.task_end);
  const [taskId, setTaskId]=useState<number>(props.topic.task_id);
  const [taskUserId, setTaskUserId]=useState<string>(props.topic.task_user_id);

  const [taskTags, setTaskTags]=useState<TaskTagProps[]>([props.subtopic])
  const [cardEdit,setCardEdit]=useState<boolean>(false);

  const today:Date = new Date();

  useEffect(()=>{
    setTaskName(props.topic.task_name);
    setTaskDetail(props.topic.task_detail);
    setTaskPoint(props.topic.task_point);
    setTaskFrom(props.topic.task_from);
    setTaskDue(props.topic.task_due);
    setTaskPriority(props.topic.task_priority);
    setTaskTagId(props.topic.task_tag_id);
    setTaskEnd(props.topic.task_end);
    setTaskId(props.topic.task_id);
    setTaskUserId(props.topic.task_user_id);
    console.log("update_card");
  },[props.topic]);

  const changeEdit = () => {
    if(cardEdit){
      setCardEdit(false);
      console.log("ここで保存を投げる");
      const from:Date = new Date(taskFrom);
      const due:Date = new Date(taskDue);
      const updateTaskData:TaskCardProps = {
        task_id:taskId,
        task_name:taskName,
        task_detail:taskDetail,
        task_point:taskPoint,
        task_from:from,
        task_due:due,
        task_priority:taskPriority,
        task_tag_id:taskTagId,
        task_end:taskEnd,
        task_user_id:taskUserId,
      }
      console.log(updateTaskData);
      console.log(props.updateCard(updateTaskData));
    }
    else{
      setCardEdit(true);
    }
  }

  return(
    <React.Fragment>
      <CardContent>
        {
          !cardEdit &&
          <>
            <Grid container spacing={2} 
                sx={{
                  height:"100%",
                  maxWidth:"98%",
                  top:0,
                  position:"relative",
                  m:"0%",
                  p:"0%"
                }}
            >
              <Grid xs={5}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                  {taskTagId?taskTagId:"[タグ登録なし]"} {bull} 優先度：{taskPriority}
                </Typography>
                <Typography variant="h5" component="div">
                  {taskName}
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography color="text.secondary">
                  From：{taskFrom}<br/>
                  Due：{taskDue}
                </Typography>
              </Grid>
              <Grid xs={2.5} sx={{m:"2%"}}>
                <CardActions>
                  <Button variant="outlined" disabled={props.deleteNG} size="small" endIcon={<AddTaskIcon />} onClick={()=>{
                    props.deleteTask(props.topic.task_id).then(()=>{
                      props.reloadTasks();
                    });

                  }}>削除</Button>
                </CardActions>
              </Grid>
            </Grid>
            <Grid container spacing={2} 
                sx={{
                  height:"100%",
                  ml:"1%",
                  mr:"1%",
                  maxWidth:"98%",
                  top:0,
                  position:"relative",
                  m:"0%"
                }}
            >
              <Grid xs={7}>
                <Typography align='left' variant="body2">
                  {taskDetail}
                </Typography>
              </Grid>
              <Grid xs={2}>
                <CircularProgressWithLabel value={taskPoint}/>
              </Grid>
              <Grid xs={2.5} sx={{m:"2%"}}>
              <CardActions>
                  <Button variant="outlined" size="small" onClick={()=>{changeEdit()}} endIcon={<CreateIcon />}>{cardEdit?"保存":"編集"}</Button>
                </CardActions>
                <CardActions>
                  <Button variant="outlined" size="small" endIcon={<AddTaskIcon />}>完了</Button>
                </CardActions>
              </Grid>
            </Grid>
          </>
        }
        {
          cardEdit &&
          <>
            <TextField
                fullWidth
                type="text"
                variant="standard"
                defaultValue={taskName}
                placeholder="タスク名"
                margin="dense"
                size="small"
                onBlur = {
                  (event) => {
                    setTaskName(event.target.value)
                  }
                }
                sx={{ m: 1, width: '25ch' }}
            />
            <TextField
              type="number"
              defaultValue = {taskPoint}
              margin="dense"
              size="small"
              label="進捗 [％]"
              onChange = {
                (event) => {
                  setTaskPoint(Number(event.target.value));
                  setTaskEnd(today);
                }
              }
              sx={{ m: 1, width: '10ch' }}
            />
            <Button variant="outlined" sx={{ m: 1, width: '15ch' }} size="small" onClick={()=>{changeEdit()}} endIcon={<CreateIcon />}>{cardEdit?"保存":"編集"}</Button>
            <TextField
                fullWidth
                margin="dense"
                size="small"
                minRows={5}
                multiline
                variant="outlined"
                defaultValue={taskDetail}
                placeholder="タスクの詳細を記載してください。"
                onBlur = {
                  (event) => {
                    setTaskDetail(event.target.value)
                  }
                }
            />
            <TextField
              type="date"
              defaultValue = {taskFrom}
              margin="dense"
              size="small"
              label="from"
              onChange = {
                (event) => {
                  setTaskFrom(event.target.value);
                }
              }
              sx={{ m: 1, width: '25ch' }}
            />
            <TextField
              type="date"
              defaultValue = {taskDue}
              margin="dense"
              size="small"
              label="due"
              onChange = {
                (event) => {
                  setTaskDue(event.target.value);
                }
              }
              sx={{ m: 1, width: '25ch' }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="タグ"
              size="small"
              defaultValue={taskTagId}
              sx={{ m: 1, width: '25ch' }}
            >
              {taskTags.map((value,key) => (
                <MenuItem key={key} value={value.task_tag_id}>
                  {value.task_tag_name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="優先度"
              size="small"
              defaultValue={taskPriority}
              sx={{ m: 1, width: '25ch' }}
              onChange={(event)=>{setTaskPriority(Number(event.target.value))}}
            >
              {priorities.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              type="date"
              defaultValue = {taskEnd}
              margin="dense"
              size="small"
              label="end"
              InputProps={{
                readOnly: true,
              }}
              onChange = {
                (event) => {
                  setTaskEnd(event.target.value);
                }
              }
              sx={{ m: 1, width: '25ch' }}
            />
            <Button variant="outlined" sx={{ m: 1, width: '25ch' }} size="small" onClick={()=>{changeEdit()}} endIcon={<CreateIcon />}>{cardEdit?"保存":"編集"}</Button>
          </>
        }
      </CardContent>
    </React.Fragment>
  )
}

export default TaskCard;