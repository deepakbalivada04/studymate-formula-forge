import { supabase } from '../supabase';
import { Formula, CreateFormulaInput, UpdateFormulaInput } from '../../types/formula';

export const formulaService = {
  async createFormula(input: CreateFormulaInput): Promise<Formula> {
    const { data, error } = await supabase
      .from('formulas')
      .insert([input])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getFormula(id: string): Promise<Formula> {
    const { data, error } = await supabase
      .from('formulas')
      .select()
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async getFormulasBySubject(subject: string): Promise<Formula[]> {
    const { data, error } = await supabase
      .from('formulas')
      .select()
      .eq('subject', subject)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async updateFormula(input: UpdateFormulaInput): Promise<Formula> {
    const { id, ...updateData } = input;
    const { data, error } = await supabase
      .from('formulas')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteFormula(id: string): Promise<void> {
    const { error } = await supabase
      .from('formulas')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async searchFormulas(query: string): Promise<Formula[]> {
    const { data, error } = await supabase
      .from('formulas')
      .select()
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
}; 