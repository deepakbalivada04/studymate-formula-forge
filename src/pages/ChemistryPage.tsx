import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FormulaCard } from '../components/FormulaCard';
import { formulaService } from '../lib/services/formulaService';
import { Formula } from '../types/formula';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

export function ChemistryPage() {
  const navigate = useNavigate();
  const [formulas, setFormulas] = useState<Formula[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFormulas();
  }, []);

  const loadFormulas = async () => {
    try {
      const data = await formulaService.getFormulasBySubject('chemistry');
      setFormulas(data);
    } catch (error) {
      toast.error('Failed to load formulas');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    navigate('/formulas/new');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Chemistry Formulas</h1>
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Add Formula
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formulas.map((formula) => (
          <FormulaCard
            key={formula.id}
            formula={formula}
            onDelete={loadFormulas}
          />
        ))}
      </div>

      {formulas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No formulas found. Add your first formula!</p>
        </div>
      )}
    </div>
  );
}
