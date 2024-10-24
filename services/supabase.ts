import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tcmsqwwodpmkqqzocaoc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjbXNxd3dvZHBta3Fxem9jYW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NTQyNDIsImV4cCI6MjA0NDIzMDI0Mn0.kr5F_6xnTA3CPpkq03XJKDoRDZbo5q096sVj80YWSVQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
