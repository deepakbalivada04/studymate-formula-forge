
import React from 'react';
import { Header } from '@/components/Header';
import { FormulaCard } from '@/components/FormulaCard';
import { mathFormulas } from '@/data/formulas';
import { Calculator } from 'lucide-react';

const MathPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Mathematics</h1>
              <p className="text-lg text-gray-600">
                Essential formulas for Algebra, Calculus, and Trigonometry
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathFormulas.map((formula) => (
            <FormulaCard 
              key={formula.id} 
              formula={formula} 
              subjectColor="blue"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MathPage;
