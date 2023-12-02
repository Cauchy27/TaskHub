"use client"
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState,useEffect } from "react";

const today:Date = new Date();
let LastMonth:Date = new Date();
LastMonth.setMonth(LastMonth.getMonth()-1);

type SearchBoxProps={
  getAllCompileTasks:any,
}
const SearchBox = (props:SearchBoxProps) =>{
  const [searchFrom, setSearchFrom]=useState<any>(LastMonth.toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
  day: "2-digit"}).replaceAll('/', '-'));
  const [searchTo, setSearchTo]=useState<any>(today.toLocaleDateString("ja-JP", {year: "numeric",month: "2-digit",
  day: "2-digit"}).replaceAll('/', '-'));
  

  return(
    <div className="contents_box" style={{height:"100%",overflow:"scroll",width:"100%"}}>
      <Typography>条件</Typography>
      <Grid container spacing={1} 
        sx={{
          height:"80%",
          maxWidth:"98%",
          top:0,
          position:"relative",
          p:"2%",
          m:"1%"
        }}
      >
        <Grid xs={12} sx={{maxHeight:"100%"}}>
          <TextField
              type="date"
              defaultValue = {searchFrom}
              margin="dense"
              size="small"
              label="From"
              onChange = {
                (event) => {
                  setSearchFrom(event.target.value);
                }
              }
              sx={{ m: 1, width: '20ch' }}
          />
          <TextField
              type="date"
              defaultValue ={searchTo}
              margin="dense"
              size="small"
              label="To"
              onChange = {
                (event) => {
                  setSearchTo(event.target.value);
                  console.log(searchFrom,searchTo)
                }
              }
              sx={{ m: 1, width: '20ch' }}
          />
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ m: 1, width: '25ch' }}
            // endIcon={<DeleteSweepIcon />} 
            onClick={()=>{
              props.getAllCompileTasks(searchFrom,searchTo);
            }}
          >
            タスクをカレンダー表示（仮）
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ m: 1, width: '20ch' }}
            // endIcon={<DeleteSweepIcon />} 
            onClick={()=>{
              props.getAllCompileTasks(searchFrom,searchTo);
            }}
            disabled
          >
            タスクの集計を表示（準備中）
          </Button>
        </Grid>
        {/* <Grid xs={2} sx={{maxHeight:"100%"}}>
          
        </Grid> */}
      </Grid>
    </div>
  );
}

export default SearchBox;