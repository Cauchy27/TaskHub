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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));
const ItemTop = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
  reloadCard:any,
  updateCard:any,
  deleteCard:any,
  createCardName:string|null,
  reloadCardName:string|null,
}) =>{
  const [deleteCheck, setDeleteCheck] = useState<boolean>(true);
  const [tasks,setTasks]=useState<TaskCardProps[]>(props.topics);
  useEffect(()=>{
    setTasks(props.topics)
  },[props.topics])
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
                <Grid xs={8} sx={{maxHeight:"100%"}}>
                  <Typography align="justify" variant="h4" >{props.contentTitleName}</Typography>
                  <Button onClick={()=>{props.createCard().then(()=>{props.reloadCard()})}}>{props.createCardName}</Button>
                  <Button onClick={()=>{props.reloadCard()}}>{props.reloadCardName}</Button>
                  <Button onClick={()=>{switchDelete()}}>{deleteCheck?"削除ロック解除":"削除ロック"}</Button>
                </Grid>
                <Grid xs={4} sx={{height:"100%"}}>
                  <Grid container spacing={2} 
                    sx={{
                      height:"100%",
                      maxWidth:"98%",
                      top:0,
                      position:"relative",
                      m:"0%"
                    }}
                  >
                    <Grid xs={3} sx={{height:"100%",width:"50%"}}>
                      <Avatar sx={{height:80,width:80}} alt="Cindy Baker" src={props.image_url} />
                    </Grid>
                    <Grid xs={8} sx={{maxHeight:"100%",pl:"3%"}}>
                      <Typography>{props.Account}</Typography>
                      <Button onClick={()=>{props.logout()}}>ログアウト</Button>
                    </Grid>
                  </Grid>
                  
                  {/* <Button onClick={()=>{props.checkLogin()}}>ログインチェック</Button> */}
                </Grid>
              </Grid>
            </ItemTop>
            <div style={{height:"80%",overflow:"scroll"}}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
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
                        reloadTasks={props.reloadCard}
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