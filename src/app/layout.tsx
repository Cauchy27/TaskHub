import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image";
import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskHub',
  description: 'タスク管理をトータル管理',
}

export default function Layout(props: {
    children: React.ReactNode
    main:React.ReactNode
  }
) {
  return (
    <html lang="ja" style={{height:"100vh"}}>
      <body style={{backgroundSize:"cover"}}>
        {/* <CssBaseline /> */}
        <Box sx={{ 
            height:'68.5px',
            width:'100%',
            left:"0%",
            top:"0%",
            p:"0%",
          }} 
        >
          {props.children}
        </Box>
        <Box sx={{ 
            height: '90%',
            width:'100%',
            left:"0%",
            p:"0%",
            top:"68.5px",
            position:"absolute"
            // bgcolor: '#f0e68c', 
          }} 
        >
          {props.main}
        </Box>
      </body>
    </html>

  )
}
