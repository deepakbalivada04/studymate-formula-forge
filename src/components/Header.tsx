
import React from 'react';
import { Search, Bell, User, Menu, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MPC Academy</h1>
              <p className="text-xs text-gray-500">Math • Physics • Chemistry</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/math" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/math') ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mathematics
            </Link>
            <Link 
              to="/physics" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/physics') ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Physics
            </Link>
            <Link 
              to="/chemistry" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/chemistry') ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Chemistry
            </Link>
            <Link 
              to="/materials" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/materials') ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Materials
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search formulas, materials..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
