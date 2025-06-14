import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calculator, Beaker, Atom, BookOpen } from 'lucide-react';

export function Index() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to KMR Academy</h1>
        <p className="text-xl text-muted-foreground">
          Your comprehensive resource for Physics, Chemistry, and Mathematics formulas
        </p>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/physics">
          <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Atom className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Physics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore fundamental laws and equations of Physics, from classical mechanics to quantum theory.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/chemistry">
          <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Beaker className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Chemistry</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover essential equations for Physical, Organic, and Inorganic Chemistry.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/mathematics">
          <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Mathematics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Master formulas for Algebra, Calculus, and Trigonometry.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Interactive Formula Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create and edit formulas with our powerful LaTeX editor. Preview your formulas in real-time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Organized by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Browse formulas by subject and category. Find exactly what you need, when you need it.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground">
          Create an account to save your favorite formulas and contribute to our growing collection.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/upload">
            <Button variant="outline">Upload Formulas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
