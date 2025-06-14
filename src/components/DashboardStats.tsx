
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileText, Star, TrendingUp } from 'lucide-react';

export const DashboardStats = () => {
  const stats = [
    {
      title: 'Formulas Learned',
      value: '156',
      total: '750+',
      icon: BookOpen,
      color: 'bg-blue-500',
      progress: 21
    },
    {
      title: 'Materials Uploaded',
      value: '24',
      icon: FileText,
      color: 'bg-green-500',
      change: '+3 this week'
    },
    {
      title: 'Study Streak',
      value: '12',
      unit: 'days',
      icon: Star,
      color: 'bg-orange-500',
      streak: true
    },
    {
      title: 'JEE Progress',
      value: '68%',
      icon: TrendingUp,
      color: 'bg-purple-500',
      progress: 68
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-2 rounded-lg`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">{stat.title}</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                {stat.unit && <span className="text-sm text-gray-500">{stat.unit}</span>}
                {stat.total && <span className="text-sm text-gray-400">/ {stat.total}</span>}
              </div>
              {stat.progress && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${stat.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              )}
              {stat.change && (
                <p className="text-xs text-green-600 font-medium">{stat.change}</p>
              )}
              {stat.streak && (
                <p className="text-xs text-orange-600 font-medium">🔥 Keep it up!</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
