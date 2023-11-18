import Head from "next/head";
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import { useEffect } from "react";

// リダイレクト先の関係で不完全

export default function GoogleAuth(){
  const supabase = createClient("https://wzcugmanxffwuytwuzjm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y3VnbWFueGZmd3V5dHd1emptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyODA5MzcsImV4cCI6MjAxNTg1NjkzN30.bQ2tOKHRgDMagbZLvjPqBLbksgx9RyDSmXjVU7AIDJQ");

  return (
    <>
      <div>
      <Head>
        <title>Google認証画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
          />
        </div>
      </main>
      <footer>
      </footer>
    </div>
    </>
  )
}