import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Index } from './pages/Index';
import { LoginPage } from './pages/LoginPage';
import { PhysicsPage } from './pages/PhysicsPage';
import { ChemistryPage } from './pages/ChemistryPage';
import { MathPage } from './pages/MathPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { UploadPage } from './pages/UploadPage';
import { EditFormulaPage } from './pages/EditFormulaPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/physics" element={<PhysicsPage />} />
            <Route path="/chemistry" element={<ChemistryPage />} />
            <Route path="/mathematics" element={<MathPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/formulas/new" element={<EditFormulaPage />} />
            <Route path="/formulas/:id/edit" element={<EditFormulaPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
