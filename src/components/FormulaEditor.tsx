import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { toast } from 'sonner';

interface FormulaEditorProps {
  onSave: (formula: {
    name: string;
    expression: string;
    description: string;
    subject: string;
    category: string;
  }) => void;
  initialData?: {
    name: string;
    expression: string;
    description: string;
    subject: string;
    category: string;
  };
}

export function FormulaEditor({ onSave, initialData }: FormulaEditorProps) {
  const [formula, setFormula] = useState({
    name: initialData?.name || '',
    expression: initialData?.expression || '',
    description: initialData?.description || '',
    subject: initialData?.subject || '',
    category: initialData?.category || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formula.name || !formula.expression || !formula.subject) {
      toast.error('Please fill in all required fields');
      return;
    }
    onSave(formula);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Formula Editor</CardTitle>
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
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formula.subject}
              onValueChange={(value) => setFormula({ ...formula, subject: value })}
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

          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit" className="space-y-2">
              <Label htmlFor="expression">Formula Expression (LaTeX)</Label>
              <Textarea
                id="expression"
                value={formula.expression}
                onChange={(e) => setFormula({ ...formula, expression: e.target.value })}
                placeholder="Enter LaTeX formula (e.g., E = mc^2)"
                className="min-h-[100px] font-mono"
                required
              />
            </TabsContent>
            <TabsContent value="preview" className="space-y-2">
              <Label>Preview</Label>
              <div className="min-h-[100px] p-4 border rounded-md bg-muted">
                <MathJaxContext>
                  <MathJax>{`$${formula.expression}$`}</MathJax>
                </MathJaxContext>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formula.description}
              onChange={(e) => setFormula({ ...formula, description: e.target.value })}
              placeholder="Enter formula description"
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Save Formula
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 