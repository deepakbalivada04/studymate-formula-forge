
import React from 'react';
import { Header } from '@/components/Header';
import { FormulaCard } from '@/components/FormulaCard';
import { physicsFormulas } from '@/data/formulas';
import { Atom } from 'lucide-react';

const PhysicsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
              <Atom className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Physics</h1>
              <p className="text-lg text-gray-600">
                Fundamental laws and equations of Physics
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicsFormulas.map((formula) => (
            <FormulaCard 
              key={formula.id} 
              formula={formula} 
              subjectColor="green"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhysicsPage;
