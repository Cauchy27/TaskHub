import Image from "next/image";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const MenuList:string[]=["基本設定","タスク管理","タスク集計","業務日誌","Trello連携"];

const Left:any = () => {

  return (
    <React.Fragment>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <Divider />
        {
          MenuList.map((menu:string,key:Number)=>(
            <React.Fragment key={null}>
              <ListItem button>
                <ListItemText primary={menu} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        }
      </List>
    </React.Fragment>
  );
}

export default Left;