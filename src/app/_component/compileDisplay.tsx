"use client"
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState,useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TaskCardProps, TaskTagProps, CompileTaskProps } from './config/propsType';
import TaskCard from './taskCard';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

type CompileDisplayProps ={
  compileTasks:CompileTaskProps[],
}
type TasksByDay = {
  date:string,
  tasks:CompileTaskProps[]
}
const initialTasksByDay:TasksByDay[]=[
  {
    date:"0001-01-01",
    tasks:[
      {
        task_name: "",
        task_point: -1,
        task_from: "",
        task_due: "",
        task_end: "",
        task_priority: 0,
        task_tag_id: "",
        task_user_id: "",
      }
    ]
  }
]

const CompileDisplay = (props:CompileDisplayProps)=>{
  // const [compileTasks,setCompileTasks]=useState<CompileTaskProps[]>(props.compileTasks);
  const [tasksByDay, setTasksByDay]=useState<TasksByDay[]>(initialTasksByDay);

  const sortTasks = async(data:CompileTaskProps[]) => {
    let tasksByDayArray:any=[];
    let lastDate:string|Date = "";
    let key=0;
    let subKey=0;
    data.map((task:CompileTaskProps)=>{
      // 日付が変わったら、配列に追加して、次のタスクをまとめ始める
      if(lastDate != task.task_due){
        tasksByDayArray[key]={
          date:task.task_due,
          tasks:[task]
        }
        setTasksByDay(tasksByDayArray);
        key++;
        subKey=1;
      }
      else{
        tasksByDayArray[key-1].tasks[subKey]=task;
        setTasksByDay(tasksByDayArray);
        subKey++;
      }
      lastDate = task.task_due;
      console.log(tasksByDay);
    });
  }

  useEffect(()=>{
    // setCompileTasks(props.compileTasks);
    sortTasks(props.compileTasks);
  },[props.compileTasks]);

  return(
    <div style={{height:"100%",overflow:"scroll",width:"100%"}}>
      {
        tasksByDay.map((tasks,Key1)=>(
          <>
            {
              tasks.date!= "0001-01-01" &&
              <Typography key={Key1}>{tasks.date}</Typography>
            }
                  <Grid container spacing={1} 
                    sx={{
                      // height:"80%",
                      width:"98%",
                      top:0,
                      position:"relative",
                      p:"2%",
                      m:"1%"
                    }}
                    >
                    {
                      tasks.tasks.map((task,Key2)=>(
                        <>
                          {
                            tasks.date!= "0001-01-01" &&
                            <Grid xs={3} sx={{height:"100%",width:"100%",p:0,m:1}}>
                                <Typography key={Key2}>{task.task_name?task.task_name:"[タスク名未設定]"} - {task.task_point}/100</Typography>
                            </Grid>
                          }
                        </>
                        ))
                    }
                  </Grid>
          </>
        ))
      }
    </div>
  );
}

export default CompileDisplay;