
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Define default values for local development
// These should be placeholder values that prevent the app from crashing
// but will not actually connect to a real Supabase instance
const DEFAULT_URL = 'https://placeholder-supabase-url.com';
const DEFAULT_KEY = 'placeholder-anon-key';

// Use environment variables or fallback to defaults
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_KEY;

// Check if we're using real environment variables
const usingPlaceholders = supabaseUrl === DEFAULT_URL || supabaseAnonKey === DEFAULT_KEY;
if (usingPlaceholders) {
  console.warn(
    'Using placeholder Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables. ' +
    'Database and authentication features will not work until this is resolved.'
  );
}

// Create a Supabase client with type safety
export const supabase = createClient<Database>(
  supabaseUrl, 
  supabaseAnonKey
);

// Helper function to get the current user
export const getCurrentUser = async () => {
  if (usingPlaceholders) {
    console.warn('Attempted to get current user with placeholder credentials');
    return null;
  }
  
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};
