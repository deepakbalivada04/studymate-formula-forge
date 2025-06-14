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
      formulas: {
        Row: {
          id: string
          name: string
          expression: string
          description: string | null
          subject: 'physics' | 'chemistry' | 'mathematics'
          category: string | null
          created_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          id?: string
          name: string
          expression: string
          description?: string | null
          subject: 'physics' | 'chemistry' | 'mathematics'
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          id?: string
          name?: string
          expression?: string
          description?: string | null
          subject?: 'physics' | 'chemistry' | 'mathematics'
          category?: string | null
          created_at?: string
          updated_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      public_formulas: {
        Row: {
          id: string
          name: string
          expression: string
          description: string | null
          subject: 'physics' | 'chemistry' | 'mathematics'
          category: string | null
          created_at: string
          updated_at: string
          user_id: string
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 