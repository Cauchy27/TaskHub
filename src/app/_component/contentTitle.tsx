import Typography from '@mui/material/Typography';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TaskCardProps } from './config/propsType';
import TaskCard from './taskCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 150,
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
  accessToken:string|null,
  contentTitleName:string,
  topics:TaskCardProps[],
}) =>{
  return(
    <div style={{height:"100%",overflow:"scroll"}}>
      {
        !props.accessToken &&
        <Typography align="justify" variant="h2">権限がありません。ログインをしてください</Typography>
      }
      {
        props.accessToken &&
        <>
          <ThemeProvider theme={lightTheme}>
            <ItemTop elevation={12}>
              <Typography align="justify" variant="h4" >{props.contentTitleName}</Typography>
              <Typography align="justify" variant="h6" >現在準備中です。</Typography>
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