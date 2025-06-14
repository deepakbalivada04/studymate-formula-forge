
import React from 'react';
import { Header } from '@/components/Header';
import { DashboardStats } from '@/components/DashboardStats';
import { SubjectCards } from '@/components/SubjectCards';
import { RecentActivity } from '@/components/RecentActivity';
import { QuickActions } from '@/components/QuickActions';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Student
          </h1>
          <p className="text-lg text-gray-600">
            Continue your journey in Math, Physics & Chemistry
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <SubjectCards />
            <QuickActions />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
