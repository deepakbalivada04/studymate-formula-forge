import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormulaEditor } from '../components/FormulaEditor';
import { formulaService } from '../lib/services/formulaService';
import { Formula } from '../types/formula';
import { toast } from 'sonner';

export function EditFormulaPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formula, setFormula] = useState<Formula | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadFormula();
    } else {
      setLoading(false);
    }
  }, [id]);

  const loadFormula = async () => {
    try {
      const data = await formulaService.getFormula(id!);
      setFormula(data);
    } catch (error) {
      toast.error('Failed to load formula');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (formulaData: Omit<Formula, 'id' | 'created_at' | 'updated_at' | 'user_id'>) => {
    try {
      if (id) {
        await formulaService.updateFormula({ id, ...formulaData });
        toast.success('Formula updated successfully');
      } else {
        await formulaService.createFormula(formulaData);
        toast.success('Formula created successfully');
      }
      navigate('/');
    } catch (error) {
      toast.error('Failed to save formula');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Edit Formula' : 'Create New Formula'}
      </h1>
      <FormulaEditor
        onSave={handleSave}
        initialData={formula || undefined}
      />
    </div>
  );
} 