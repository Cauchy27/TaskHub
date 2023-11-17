"use client"

import Image from "next/image";

import * as React from 'react';
import { useState } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

type MenuList = {
  title:string,
  list:string[]
}

const MenuList:MenuList[] =[
  {
    title:"設定",
    list:["基本設定"]
  },
  {
    title:"タスク",
    list:["タスク管理","タスク集計"]
  },
  {
    title:"日誌",
    list:["業務日誌"]
  },
  {
    title:"外部連携",
    list:["Trello連携","AIマネージャー"]
  },
]
const LeftSideBar:any = (props:{
  changeShowScreen:any,
  showScreen:string,
}) => {
  const [open, setOpen] = useState<string>(props.showScreen);

  const changeOpen = (title:string) => {
    if(title == open && open != ""){
      setOpen("");
    }
    else{
      setOpen(title);
    }
  };

  const callPage = (pageId:String) => {
    props.changeShowScreen(pageId);
  }
  return (
    <React.Fragment>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            メニュー
          </ListSubheader>
        }
      >
        {
          MenuList.map((menu:MenuList)=>(
            <React.Fragment key={null}>
              <ListItemButton onClick={()=>{changeOpen(menu.title)}}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menu.title} />
                {open == menu.title ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open == menu.title} timeout="auto" unmountOnExit>
                {
                  menu.list.map((subMenu)=>(
                  <List component="div" disablePadding key={null}>
                    <ListItemButton 
                      sx={{ pl: 4 }}
                      onClick={()=>{
                        callPage(subMenu);
                      }}
                    >
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subMenu} />
                    </ListItemButton>
                  </List>

                  ))
                }
              </Collapse>
            </React.Fragment>
          ))
        }
      </List>
    </React.Fragment>
  );
}

export default LeftSideBar;