
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Define Supabase URL and key with fallback values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if the environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL and Anon Key are not defined. Please check your environment variables.');
}

// Create a Supabase client with type safety
export const supabase = createClient<Database>(
  supabaseUrl, 
  supabaseAnonKey
);

export const getCurrentUser = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user;
};
