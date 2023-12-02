"use client"
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState,useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TaskCardProps, TaskTagProps } from './config/propsType';
import TaskCard from './taskCard';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:"#f5fff9",
  height: 250,
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));
const ItemTop = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:"#e2feed",
  height: "20%",
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const ContentTitle = (props:{
  Account:string|null,
  contentTitleName:string,
  topics:TaskCardProps[],
  subtopic:TaskTagProps[],
  checkLogin:any,
  logout:any,
  image_url:string,
  createCard:any,
  reloadCard1:any,
  reloadCard2:any,
  getAllTasks:any,
  getEndTasks:any,
  updateCard:any,
  deleteCard:any,
  createCardName:string|null,
  reloadCardName1:string|null,
  reloadCardName2:string|null,
  reloadCardName3:string|null,
  reloadCardName4:string|null,
  priorityDue:boolean,
  selectPriorityDue:any,
}) =>{
  const [deleteCheck, setDeleteCheck] = useState<boolean>(true);
  const [tasks,setTasks]=useState<TaskCardProps[]>(props.topics);
  const [priorityDue,setPriorityDue]=useState<boolean>(props.priorityDue);
  useEffect(()=>{
    setTasks(props.topics)
  },[props.topics]);
  useEffect(()=>{
    setPriorityDue(props.priorityDue)
  },[props.priorityDue]);
  const switchDelete = () => {
    if(deleteCheck){
      setDeleteCheck(false);
    }
    else{
      setDeleteCheck(true);
    }
  }
  return(
    <div style={{height:"100%",overflow:"scroll"}}>
      {
        !props.Account &&
        <Typography align="justify" variant="h2">権限がありません。ログインをしてください</Typography>
      }
      {
        props.Account &&
        <>
          <ThemeProvider theme={lightTheme}>
            <ItemTop elevation={12}>
              <Grid container spacing={2} 
                sx={{
                  height:"80%",
                  maxWidth:"98%",
                  top:0,
                  position:"relative",
                  p:"2%",
                  m:"1%"
                }}
              >
                <Grid xs={9} sx={{maxHeight:"100%"}}>
                  <Typography align="justify" variant="h5" >{props.contentTitleName}</Typography>
                  <Button sx={{ m: 1,}} variant="outlined" onClick={()=>{props.createCard().then(()=>{props.reloadCard1()})}}>{props.createCardName}</Button>
                  <Button sx={{ m: 1, }} variant="outlined" onClick={()=>{props.reloadCard1()}}>{props.reloadCardName1}</Button>
                  <Button sx={{ m: 1,}} variant="outlined" onClick={()=>{props.reloadCard2()}}>{props.reloadCardName4}</Button>
                  <Button sx={{ m: 1,}} variant="outlined" onClick={()=>{props.getEndTasks()}}>{props.reloadCardName2}</Button>
                  <Button sx={{ m: 1,}} variant="outlined" onClick={()=>{props.getAllTasks()}}>{props.reloadCardName3}</Button>
                  <Button sx={{ m: 1,}} variant="outlined" onClick={()=>{switchDelete()}}>{deleteCheck?"削除ロック解除":"削除ロック"}</Button>
                </Grid>
                <Grid xs={3} sx={{height:"100%"}}>
                  <Grid container spacing={2} 
                    sx={{
                      height:"100%",
                      maxWidth:"98%",
                      top:0,
                      position:"relative",
                      m:"0%"
                    }}
                  >
                    <Grid xs={3} sx={{height:"100%",width:"100%"}}>
                      <Avatar sx={{height:100,width:100,ml:"20%"}} alt="Cindy Baker" src={props.image_url} />
                      <Button sx={{width:100,ml:"20%"}} onClick={()=>{props.logout()}}>ログアウト</Button>
                    </Grid>
                    {/* <Grid xs={3} sx={{maxHeight:"100%",pl:"3%"}}>
                      <Typography>{props.Account}</Typography>
                      
                    </Grid> */}
                  </Grid>
                  
                  {/* <Button onClick={()=>{props.checkLogin()}}>ログインチェック</Button> */}
                </Grid>
              </Grid>
            </ItemTop>
            <div className="contents_box" style={{height:"80%",overflow:"scroll"}}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 5,
                  // bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 2,
                  width:"100%",
                  overflow:"auto",
                  height:"100%"
                }}
              >
                {
                  props.topics.map((topic:TaskCardProps,key)=>(
                    <Item elevation={12} key={key}>
                      {/* <Typography align="justify" variant="h4" >
                        {topic.task_name}
                      </Typography> */}
                      <TaskCard
                        topic={topic}
                        subtopic={props.subtopic}
                        updateCard={props.updateCard}
                        deleteNG={deleteCheck}
                        deleteTask={props.deleteCard}
                        reloadTasks={props.reloadCard1}
                      />
                    </Item>
                  ))
                }
              </Box>
            </div>
          </ThemeProvider>
        </>
      }
    </div>
  )
}

export default ContentTitle;