"use client"
import * as React from 'react';
import { useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Props } from 'next/script';

import { Supabase } from './config/supabase';

const pages:string[] = ['カスタムメニュー１[準備中]'];
const settings:string[] = ['ユーザー情報[準備中]', '今季の目標[準備中]'];

const reAccessToken = new RegExp(/access_token=(.*?)(&|$)/, "i");
const reRefreshToken = new RegExp(/refresh_token=(.*?)(&|$)/, "i");

type AppBarProps = {
  title: string,
  bgcolor: string,
  height: string,
  width: string,
}
const ResponsiveAppBar =(AppBarProps:AppBarProps) => {
  const [accessToken,setAccessToken] = useState<string|null>("");
  const [refreshToken,setRefreshToken] = useState<string|null>("");

  // const [userPicture, setUserPicture] = useState<string>("");

  // const getCurrentUser = async () => {
  //   // ログインのセッションを取得する処理
  //   const { data } = await Supabase.auth.getSession()
  //   // セッションがあるときだけ現在ログインしているユーザーを取得する
  //   if (data.session !== null) {
  //     // supabaseに用意されている現在ログインしているユーザーを取得する関数
  //     const { data: { user } } = await Supabase.auth.getUser()
  //     // currentUserにユーザーのメールアドレスを格納
  //     if(user){
  //       if(data.session?.user.identities && data.session?.user.identities[0].identity_data){
  //         // console.log(data.session?.user.identities[0].identity_data.picture);
  //         setUserPicture(data.session?.user.identities[0].identity_data.picture)
  //       }
  //     }
  //   }
  //   console.log(data)
  // }
  // useEffect(()=>{
  //   getCurrentUser();
  // },[userPicture]);

  useEffect(()=>{
    let UrlAccessTokenArray:RegExpMatchArray|null  = location.href.match(reAccessToken);
    let UrlRefreshTokenArray:RegExpMatchArray|null  = location.href.match(reRefreshToken);
    if(UrlAccessTokenArray && UrlRefreshTokenArray){
      setAccessToken(UrlAccessTokenArray[1]);
      setRefreshToken(UrlRefreshTokenArray[1]);

      console.log(location.href.split("#access_token="));
      const newUrl = location.href.split("#access_token=");
      history.pushState({}, newUrl[1], '');
    }
  },[]);

  // const [Account, setAccount] = useState<string>('');
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="static"
      sx={{
        height:"100%"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {AppBarProps.title}
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TaskHub
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;