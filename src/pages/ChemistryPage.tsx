
import React from 'react';
import { Header } from '@/components/Header';
import { FormulaCard } from '@/components/FormulaCard';
import { chemistryFormulas } from '@/data/formulas';
import { Beaker } from 'lucide-react';

const ChemistryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
              <Beaker className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Chemistry</h1>
              <p className="text-lg text-gray-600">
                Essential equations for Physical, Organic, and Inorganic Chemistry
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chemistryFormulas.map((formula) => (
            <FormulaCard 
              key={formula.id} 
              formula={formula} 
              subjectColor="orange"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChemistryPage;
