import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 請在此處貼上您的 Supabase URL (Supabase URL)
const SUPABASE_URL = "https://iwiceompztrcggnceoon.supabase.co";

// 請在此處貼上您的 Supabase API Key (anon public key)
const SUPABASE_PUBLIC_KEY = "sb_publishable_DWCH7VfKxYOyixzZXnjnVQ_0wnjrRBR";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
