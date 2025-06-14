
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Search, BookMarked, Download, Target, Users } from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    {
      title: 'Browse Formulas',
      description: 'Explore 750+ formulas',
      icon: Search,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Upload Material',
      description: 'Share your notes',
      icon: Upload,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'My Bookmarks',
      description: 'Saved formulas',
      icon: BookMarked,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Download PDF',
      description: 'Export formula sheets',
      icon: Download,
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'Exam Prep',
      description: 'JEE, EAMCET, IPE',
      icon: Target,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      title: 'Study Groups',
      description: 'Join discussions',
      icon: Users,
      color: 'bg-indigo-500 hover:bg-indigo-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-all duration-200 border-2"
            >
              <div className={`${action.color} p-2 rounded-lg`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900 text-sm">{action.title}</p>
                <p className="text-xs text-gray-500">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
