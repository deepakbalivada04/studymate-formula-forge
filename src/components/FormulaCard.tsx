import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Formula } from '../types/formula';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import { formulaService } from '../lib/services/formulaService';
import { toast } from 'sonner';

interface FormulaCardProps {
  formula: Formula;
  onDelete?: () => void;
}

export function FormulaCard({ formula, onDelete }: FormulaCardProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/formulas/${formula.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await formulaService.deleteFormula(formula.id);
      toast.success('Formula deleted successfully');
      onDelete?.();
    } catch (error) {
      toast.error('Failed to delete formula');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{formula.name}</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEdit}
            title="Edit formula"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            title="Delete formula"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-md">
            <MathJaxContext>
              <MathJax>{`$${formula.expression}$`}</MathJax>
            </MathJaxContext>
          </div>
          {formula.description && (
            <p className="text-sm text-muted-foreground">{formula.description}</p>
          )}
          {formula.category && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Category:</span>
              <span className="text-sm text-muted-foreground">{formula.category}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
