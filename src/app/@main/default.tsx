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

const reAccessToken = new RegExp(/access_token=(.*?)(&|$)/, "i");
const reRefreshToken = new RegExp(/refresh_token=(.*?)(&|$)/, "i");

export default function Right(props:any) {
  const [showScreen, setShowScreen] = useState<string>("ダッシュボード");
  const [accessToken,setAccessToken] = useState<string|null>("");
  const [refreshToken,setRefreshToken] = useState<string|null>("");
  const [startTitle, setStartTitle] = useState<string>("ダッシュボード");

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
              minHeight:"100%",
              maxHeight:"100%",
              ml:"0%",
              mr:"1%",
              maxWidth:"98%",
              top:"0%",
              position:"relative",
              m:"0%"
            }}
      >
        <Grid xs={2}>
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
            <Grid xs={10}>
              <CssBaseline />
              <Box sx={{ 
                  bgcolor: '#f0e68c', 
                  height: '100%',
                  width:'100%',
                  m:"1%"
                }} 
              >
                {showScreen}
              </Box>
            </Grid>
          </>
        }
      </Grid>
  </React.Fragment>
  );
}