import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Calculator, Beaker, Atom, BookOpen, Upload } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">KMR Academy</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/physics">
              <Button
                variant={isActive('/physics') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Atom className="h-4 w-4" />
                <span>Physics</span>
              </Button>
            </Link>
            <Link to="/chemistry">
              <Button
                variant={isActive('/chemistry') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Beaker className="h-4 w-4" />
                <span>Chemistry</span>
              </Button>
            </Link>
            <Link to="/mathematics">
              <Button
                variant={isActive('/mathematics') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Calculator className="h-4 w-4" />
                <span>Mathematics</span>
              </Button>
            </Link>
            <Link to="/upload">
              <Button
                variant={isActive('/upload') ? 'default' : 'ghost'}
                className="flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Upload</span>
              </Button>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
