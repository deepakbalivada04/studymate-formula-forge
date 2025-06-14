export type Subject = 'physics' | 'chemistry' | 'mathematics';

export interface Formula {
  id: string;
  name: string;
  expression: string;
  description?: string;
  subject: Subject;
  category?: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface CreateFormulaInput {
  name: string;
  expression: string;
  description?: string;
  subject: Subject;
  category?: string;
}

export interface UpdateFormulaInput extends Partial<CreateFormulaInput> {
  id: string;
} 