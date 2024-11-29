import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://knerwceeqyfmfbczjzec.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuZXJ3Y2VlcXlmbWZiY3pqemVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMTYxODcsImV4cCI6MjA0Njg5MjE4N30.ygBYFe8P-89yIW4uVwOOUQD91HOhK_MXynxZj9WaINY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
