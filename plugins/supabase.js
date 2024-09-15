import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xakdwlhykesfqoynkyly.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhha2R3bGh5a2VzZnFveW5reWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwODc2MTIsImV4cCI6MjA0MDY2MzYxMn0.Nj3uWfa_nZwFQuRHCkIS_EnvuvjtoPeukEKPt4RW1Vo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('supabase', supabase);
});
