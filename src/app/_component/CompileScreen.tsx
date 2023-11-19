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

import SearchBox from './searchBox';
import CompileDisplay from './compileDisplay';

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
  height: 250,
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));
const ItemTop = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:"#fae9bd",
  height: "20%",
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));
const ItemSearch = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:"#fdf9ec",
  height: "100%",
  lineHeight: '60px',
  minWidth:"100%",
  overflow: 'auto'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

type CompileProps ={
  Account:string|null,
  contentTitleName:string,
  logout:any,
  image_url:string,
  getAllCompileTasks:any,
  compileTasks:CompileTaskProps[],
}

const CompileScreen = (props:CompileProps) => {

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
                  <Typography>現在準備中です。<br/>期日と終了日からタスクの達成ポイントなどを集計する予定です。</Typography>
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
            <div style={{height:"20%",overflow:"scroll"}}>
              <ItemSearch elevation={24} sx={{mt:1}}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 10,
                    // bgcolor: 'background.default',
                    // display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                    width:"100%",
                    overflow:"auto",
                    height:"100%"
                  }}
                >
                  <SearchBox
                    getAllCompileTasks={props.getAllCompileTasks}
                  />
                </Box>
              </ItemSearch>
            </div>
            <div style={{height:"60%",overflow:"scroll"}}>
              <ItemSearch elevation={24} sx={{mt:1}}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 10,
                    // bgcolor:"yellow",
                    // display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 2,
                    width:"100%",
                    overflow:"auto",
                    height:"100%"
                  }}
                >
                  <CompileDisplay
                    compileTasks={props.compileTasks}
                  />
                </Box>
              </ItemSearch>
            </div>
          </ThemeProvider>
        </>
      }
    </div>
  );
}

export default CompileScreen;
