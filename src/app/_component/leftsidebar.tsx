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
import { Android } from "@mui/icons-material";
import { Assessment } from "@mui/icons-material";
import { AppSettingsAlt } from "@mui/icons-material";
import { Accessibility } from "@mui/icons-material";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BuildIcon from '@mui/icons-material/Build';
import ChatIcon from '@mui/icons-material/Chat';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

type MenuList = {
  title:string,
  list:SubMenu[],
  icon:React.ReactNode
}
type SubMenu = {
  subtitle:string,
  subicon:React.ReactNode
}

const MenuList:MenuList[] =[
  {
    title:"設定",
    list:[
      {
        subtitle:"基本設定",
        subicon:<Accessibility/>
      }
    ],
    icon:<BuildIcon  />
  },
  {
    title:"タスク",
    list:[
      {
        subtitle:"タスク管理",
        subicon:<AssignmentTurnedInIcon/>
      },
      {
        subtitle:"タスク集計",
        subicon:<Assessment/>
      },
    ],
    icon:<SendIcon />
  },
  {
    title:"日誌",
    list:[
      {
        subtitle:"業務日誌",
        subicon:<ChatIcon/>
      },
    ],
    icon:<ChromeReaderModeIcon />
  },
  {
    title:"外部連携",
    list:[
      {
        subtitle:"Trello連携",
        subicon:<AppShortcutIcon/>
      },
      {
        subtitle:"AIマネージャー",
        subicon:<AddReactionIcon/>
      },
    ],
    icon:<Android />
  },
]
const LeftSideBar:any = (props:{
  changeShowScreen:any,
  showScreen:string,
  showTitle:string,
}) => {
  const [open, setOpen] = useState<string>(props.showTitle);

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
        sx={{ 
            width: '100%', 
            maxWidth: 360, 
            bgcolor: 'background.paper',

           }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            メニュー
          </ListSubheader>
        }
        >
        <Divider/>
        {
          MenuList.map((menu:MenuList)=>(
            <React.Fragment key={null}>
              <ListItemButton onClick={()=>{changeOpen(menu.title)}}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.title} />
                {open == menu.title ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider/>
              <Collapse in={open == menu.title} timeout="auto" unmountOnExit>
                {
                  menu.list.map((subMenu)=>(
                    <>
                      <List component="div" disablePadding key={null}>
                        <ListItemButton 
                          sx={{ pl: 4 }}
                          onClick={()=>{
                            callPage(subMenu.subtitle);
                          }}
                          selected={subMenu.subtitle == props.showScreen}
                        >
                          <ListItemIcon>
                            {subMenu.subicon}
                          </ListItemIcon>
                          <ListItemText primary={subMenu.subtitle} />
                        </ListItemButton>
                      </List>
                      <Divider/>
                    </>
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