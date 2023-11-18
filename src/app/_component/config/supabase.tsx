import { createClient } from '@supabase/supabase-js'

// supabaseの初期化を行う
export const Supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL?? "https://wzcugmanxffwuytwuzjm.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y3VnbWFueGZmd3V5dHd1emptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyODA5MzcsImV4cCI6MjAxNTg1NjkzN30.bQ2tOKHRgDMagbZLvjPqBLbksgx9RyDSmXjVU7AIDJQ",
)