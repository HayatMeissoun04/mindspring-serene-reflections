
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_insights: {
        Row: {
          id: string
          user_id: string
          mood: string
          daily_message: string
          breathing_tip: string
          journaling_prompt: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          mood: string
          daily_message: string
          breathing_tip: string
          journaling_prompt: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          mood?: string
          daily_message?: string
          breathing_tip?: string
          journaling_prompt?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          full_name: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
