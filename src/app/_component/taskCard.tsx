import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TaskCardProps } from './config/propsType';

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
}

const TaskCard = (props:topicProps) => {
  return(
    <React.Fragment>
      <CardContent>
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
          <Grid xs={8}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.topic.task_tag_name} {bull} 優先度：{props.topic.task_priority}
            </Typography>
            <Typography variant="h5" component="div">
              {props.topic.task_name}
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography sx={{ mb:1,mt:1 }} color="text.secondary">
              From：{props.topic.task_from}<br/>
              Due：{props.topic.task_to}
            </Typography>
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
          <Grid xs={10}>
            <Typography align='left' variant="body2">
              {props.topic.task_detail}
            </Typography>
          </Grid>
          <Grid xs={2}>
            <CardActions>
              <Button size="small">完了</Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  )
}

export default TaskCard;