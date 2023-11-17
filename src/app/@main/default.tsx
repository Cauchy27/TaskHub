"use client"
import Image from "next/image";

import * as React from 'react';
import { useState } from "react";
import Router from 'next/router'

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

export default function Right() {
  const [showScreen, setShowScreen] = useState<string>("タスク管理");
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
            showTitle = {"タスク"}
          />
        </Grid>
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
      </Grid>
  </React.Fragment>
  );
}