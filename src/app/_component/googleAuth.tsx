"use client"
import Head from "next/head";
import { Auth } from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js'
import { WidthFull } from "@mui/icons-material";

// リダイレクト先の関係で不完全

const GoogleAuth = (props:{
  Visibility:any,
}) => {

// supabaseの初期化を行う
const Supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL?? "test",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY?? "test",
)
  return (
      <div 
        style={{
          visibility:props.Visibility,
          position:"fixed",
          left:"20%",
          top:"10%",
          width:"50%",
          display:"flex",
          justifyContent:"center",
        }}
      >
        <div style={{width:"100%"}}>
          <Head>
            <title>Google認証画面</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
            <Auth
              supabaseClient={Supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google']}
              onlyThirdPartyProviders
            />
          </div>
        </div>
      </div>
  )
}
export default GoogleAuth;