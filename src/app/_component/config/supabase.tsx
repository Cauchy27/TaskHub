import { createClient } from '@supabase/supabase-js'

// supabaseの初期化を行う
export const Supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL?? "test",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY?? "test",
)