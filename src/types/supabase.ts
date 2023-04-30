export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      aruarus: {
        Row: {
          author: string | null
          created_at: string
          id: number
          likes: number
          quote: string
          user_id: string
        }
        Insert: {
          author?: string | null
          created_at: string
          id?: number
          likes: number
          quote: string
          user_id: string
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          likes?: number
          quote?: string
          user_id?: string
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
