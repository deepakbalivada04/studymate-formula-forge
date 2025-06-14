
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Image, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const MaterialsPage = () => {
  // Sample materials data
  const materials = [
    {
      id: 1,
      name: "Calculus Notes - Chapter 1",
      type: "PDF",
      size: "2.5 MB",
      subject: "Mathematics",
      uploadedBy: "Student A",
      downloads: 45
    },
    {
      id: 2,
      name: "Physics Formula Sheet",
      type: "PDF", 
      size: "1.8 MB",
      subject: "Physics",
      uploadedBy: "Student B",
      downloads: 72
    },
    {
      id: 3,
      name: "Chemistry Lab Manual",
      type: "PDF",
      size: "5.2 MB", 
      subject: "Chemistry",
      uploadedBy: "Student C",
      downloads: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Study Materials</h1>
              <p className="text-lg text-gray-600">
                Upload and access study materials shared by students
              </p>
            </div>
            <Link to="/upload">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90">
                <Upload className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <FileText className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{material.name}</CardTitle>
                      <p className="text-sm text-gray-500">{material.subject}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Size: {material.size}</span>
                  <span>Downloads: {material.downloads}</span>
                </div>
                <p className="text-sm text-gray-600">Uploaded by {material.uploadedBy}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MaterialsPage;
