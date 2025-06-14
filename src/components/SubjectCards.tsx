import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calculator, Atom, Beaker } from 'lucide-react';

export const SubjectCards = () => {
  const subjects = [
    {
      name: 'Mathematics',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      progress: 65,
      chapters: 12,
      completedChapters: 8,
      formulas: 156,
      description: 'Algebra, Calculus, Coordinate Geometry'
    },
    {
      name: 'Physics',
      icon: Atom,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      progress: 42,
      chapters: 15,
      completedChapters: 6,
      formulas: 89,
      description: 'Mechanics, Thermodynamics, Electromagnetism'
    },
    {
      name: 'Chemistry',
      icon: Beaker,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      progress: 78,
      chapters: 10,
      completedChapters: 8,
      formulas: 124,
      description: 'Organic, Inorganic, Physical Chemistry'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Subjects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.name} className={`${subject.bgColor} ${subject.borderColor} border-2 hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className={`bg-gradient-to-r ${subject.color} p-3 rounded-xl`}>
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{subject.progress}% Complete</p>
                </div>
              </div>
              <CardTitle className="text-xl text-gray-900">{subject.name}</CardTitle>
              <p className="text-sm text-gray-600">{subject.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={subject.progress} className="h-2" />
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Chapters</p>
                  <p className="font-semibold">{subject.completedChapters}/{subject.chapters}</p>
                </div>
                <div>
                  <p className="text-gray-600">Formulas</p>
                  <p className="font-semibold">{subject.formulas}</p>
                </div>
              </div>
              
              <Button className={`w-full bg-gradient-to-r ${subject.color} hover:opacity-90 transition-opacity`}>
                Continue Learning
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
