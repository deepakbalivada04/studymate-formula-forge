
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Upload, Star, TrendingUp } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      type: 'formula',
      title: 'Quadratic Formula',
      subject: 'Mathematics',
      time: '2 hours ago',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-700',
      badgeColor: 'bg-blue-500'
    },
    {
      type: 'upload',
      title: 'Physics Notes - Chapter 5',
      subject: 'Physics',
      time: '1 day ago',
      icon: Upload,
      color: 'bg-green-100 text-green-700',
      badgeColor: 'bg-green-500'
    },
    {
      type: 'bookmark',
      title: 'Organic Reactions',
      subject: 'Chemistry',
      time: '2 days ago',
      icon: Star,
      color: 'bg-orange-100 text-orange-700',
      badgeColor: 'bg-orange-500'
    },
    {
      type: 'progress',
      title: 'Completed Thermodynamics',
      subject: 'Physics',
      time: '3 days ago',
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-700',
      badgeColor: 'bg-purple-500'
    },
    {
      type: 'formula',
      title: 'Integration by Parts',
      subject: 'Mathematics',
      time: '4 days ago',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-700',
      badgeColor: 'bg-blue-500'
    }
  ];

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className={`${activity.color} p-2 rounded-lg flex-shrink-0`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm truncate">
                  {activity.title}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge 
                    variant="secondary" 
                    className={`${activity.badgeColor} text-white text-xs px-2 py-0.5`}
                  >
                    {activity.subject}
                  </Badge>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
