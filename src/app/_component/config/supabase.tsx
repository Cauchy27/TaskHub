import { createClient } from '@supabase/supabase-js';
import { getServerSideProps } from './importEnv';

// supabaseの初期化を行う
export const Supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL??"",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY??""
)