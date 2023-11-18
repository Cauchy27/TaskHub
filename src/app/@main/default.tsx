"use client"
import Image from "next/image";

import * as React from 'react';
import { useState,useEffect } from "react";

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
import ContentTitle from "../_component/contentTitle";

import { TaskCardProps } from "../_component/config/propsType";

const reAccessToken = new RegExp(/access_token=(.*?)(&|$)/, "i");
const reRefreshToken = new RegExp(/refresh_token=(.*?)(&|$)/, "i");

export default function Right(props:any) {
  const [showScreen, setShowScreen] = useState<string>("ダッシュボード");
  const [accessToken,setAccessToken] = useState<string|null>("");
  const [refreshToken,setRefreshToken] = useState<string|null>("");
  const [startTitle, setStartTitle] = useState<string>("ダッシュボード");

  const taskTest:TaskCardProps[]=[
    {
      task_id:1,
      task_name:"タスクテスト１",
      task_detail:"これはタスクの表示テスト1です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:3,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト２",
      task_detail:"これはタスクの表示テスト２です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:1,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト３",
      task_detail:"これはタスクの表示テスト３です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:10,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト４",
      task_detail:"これはタスクの表示テスト４です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:7,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト５",
      task_detail:"これはタスクの表示テスト５です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:3,
      task_tag_name:"その他"
    },
    {
      task_id:1,
      task_name:"タスクテスト６",
      task_detail:"これはタスクの表示テスト６です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:11,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト７",
      task_detail:"これはタスクの表示テスト７です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:4,
      task_tag_name:"採用"
    },
    {
      task_id:1,
      task_name:"タスクテスト８",
      task_detail:"これはタスクの表示テスト８です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:2,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト９",
      task_detail:"これはタスクの表示テスト９です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:3,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト１０",
      task_detail:"これはタスクの表示テスト１０です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:3,
      task_tag_name:"開発"
    },
    {
      task_id:1,
      task_name:"タスクテスト１１",
      task_detail:"これはタスクの表示テスト１１です",
      task_point:25,
      task_from:"2023/11/15",
      task_to:"2023/11/18",
      task_priority:3,
      task_tag_name:"開発"
    }
  ]


  useEffect(()=>{
    let UrlAccessTokenArray:RegExpMatchArray|null  = location.href.match(reAccessToken);
    let UrlRefreshTokenArray:RegExpMatchArray|null  = location.href.match(reRefreshToken);
    if(UrlAccessTokenArray && UrlRefreshTokenArray){
      setAccessToken(UrlAccessTokenArray[1]);
      setRefreshToken(UrlRefreshTokenArray[1]);
      // setStartTitle("ダッシュボード");
    }
  },[accessToken,refreshToken]);

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
          />
        </Grid>
        {
          accessToken == "" &&
          <>
            <GoogleAuth/>
          </>
        }
        {
          accessToken != "" &&
          <>
            <Grid xs={10} sx={{maxHeight:"100%"}}>
              <CssBaseline />
              <Box sx={{ 
                  bgcolor: '#f0e68c', 
                  height: '100%',
                  width:'100%',
                  m:"1%"
                }} 
              >
                <ContentTitle
                  contentTitleName={showScreen}
                  accessToken={accessToken}
                  topics={taskTest}
                />
              </Box>
            </Grid>
          </>
        }
      </Grid>
  </React.Fragment>
  );
}