import React from 'react';
import { PDFUploader } from '../components/PDFUploader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Upload } from 'lucide-react';

export function UploadPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Upload Formulas</h1>
          <p className="text-muted-foreground">
            Upload your formula PDFs and we'll extract the formulas for you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Upload PDF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PDFUploader />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Supported Formats</h3>
                <p className="text-sm text-muted-foreground">
                  Currently, we support PDF files containing LaTeX formulas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Best Practices</h3>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Ensure formulas are clearly visible and well-formatted</li>
                  <li>Include formula names and descriptions when possible</li>
                  <li>Organize formulas by subject and category</li>
                  <li>Use standard LaTeX notation for mathematical expressions</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">What Happens Next?</h3>
                <p className="text-sm text-muted-foreground">
                  After uploading, our system will:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Extract formulas from your PDF</li>
                  <li>Convert them to LaTeX format</li>
                  <li>Save them to your account</li>
                  <li>Make them available in the formula editor</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
