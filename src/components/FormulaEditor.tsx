import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Loader2, Save, AlertCircle } from 'lucide-react';
import Latex from 'react-latex';
import { formulaService } from '../lib/services/formulaService';
import type { CreateFormulaInput } from '../types/formula';

export function FormulaEditor() {
  const [formula, setFormula] = useState<CreateFormulaInput>({
    name: '',
    expression: '',
    description: '',
    subject: 'mathematics',
    category: 'General'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    try {
      await formulaService.createFormula(formula);
      setSuccess('Formula saved successfully!');
      setFormula({
        name: '',
        expression: '',
        description: '',
        subject: 'mathematics',
        category: 'General'
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save formula');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Formula</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Formula Name</Label>
            <Input
              id="name"
              value={formula.name}
              onChange={(e) => setFormula({ ...formula, name: e.target.value })}
              placeholder="Enter formula name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expression">LaTeX Expression</Label>
            <Textarea
              id="expression"
              value={formula.expression}
              onChange={(e) => setFormula({ ...formula, expression: e.target.value })}
              placeholder="Enter LaTeX formula (e.g., E = mc^2)"
              required
              className="font-mono"
            />
            {formula.expression && (
              <div className="p-4 bg-muted rounded-lg">
                <Latex>{formula.expression}</Latex>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formula.description}
              onChange={(e) => setFormula({ ...formula, description: e.target.value })}
              placeholder="Enter formula description"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select
                value={formula.subject}
                onValueChange={(value) => setFormula({ ...formula, subject: value as any })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formula.category}
                onChange={(e) => setFormula({ ...formula, category: e.target.value })}
                placeholder="Enter category"
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={isSaving} className="w-full">
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Formula
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 