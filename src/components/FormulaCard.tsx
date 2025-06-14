
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookMarked, Copy } from 'lucide-react';
import { Formula } from '@/data/formulas';

interface FormulaCardProps {
  formula: Formula;
  subjectColor?: string;
}

export const FormulaCard = ({ formula, subjectColor = "blue" }: FormulaCardProps) => {
  const copyFormula = () => {
    navigator.clipboard.writeText(formula.latex);
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return "bg-green-100 text-green-700";
    if (difficulty <= 3) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg text-gray-900">{formula.title}</CardTitle>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" onClick={copyFormula}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <BookMarked className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Badge variant="secondary" className="w-fit">
          {formula.category}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`bg-${subjectColor}-50 p-4 rounded-lg border border-${subjectColor}-200`}>
          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
            {formula.latex}
          </div>
        </div>
        
        <p className="text-sm text-gray-600">{formula.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {formula.examTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <Badge className={getDifficultyColor(formula.difficulty)}>
            Level {formula.difficulty}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
