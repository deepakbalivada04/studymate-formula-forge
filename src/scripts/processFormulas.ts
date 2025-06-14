import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';
import { supabase } from '../lib/supabase';

interface Formula {
  name: string;
  expression: string;
  description: string;
  subject: 'physics' | 'chemistry' | 'mathematics';
  category: string;
  file_source: string;
  page_number: number;
}

async function processPDF(filePath: string): Promise<Formula[]> {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const formulas: Formula[] = [];
    
    // Split the PDF content into pages
    const pages = data.text.split('\f');
    
    // Process each page
    pages.forEach((pageContent, pageIndex) => {
      // Look for LaTeX-style formulas (between $ or $$)
      const formulaMatches = pageContent.match(/\$\$(.*?)\$\$|\$(.*?)\$/g) || [];
      
      formulaMatches.forEach((match) => {
        // Extract the formula expression
        const expression = match.replace(/^\$\$|\$\$$/g, '').replace(/^\$|\$$/g, '');
        
        // Try to find a name or description near the formula
        const context = pageContent.slice(
          Math.max(0, pageContent.indexOf(match) - 100),
          Math.min(pageContent.length, pageContent.indexOf(match) + 100)
        );
        
        // Determine subject based on context or file name
        const fileName = path.basename(filePath).toLowerCase();
        let subject: 'physics' | 'chemistry' | 'mathematics' = 'mathematics';
        if (fileName.includes('physics')) subject = 'physics';
        else if (fileName.includes('chemistry')) subject = 'chemistry';
        
        // Create formula object
        const formula: Formula = {
          name: `Formula from ${path.basename(filePath)}`,
          expression,
          description: context.trim(),
          subject,
          category: 'General',
          file_source: filePath,
          page_number: pageIndex + 1
        };
        
        formulas.push(formula);
      });
    });
    
    return formulas;
  } catch (error) {
    console.error('Error processing PDF:', error);
    return [];
  }
}

async function saveFormulasToDatabase(formulas: Formula[]) {
  try {
    const { data, error } = await supabase
      .from('formulas')
      .insert(formulas)
      .select();
      
    if (error) throw error;
    console.log(`Successfully saved ${formulas.length} formulas to database`);
    return data;
  } catch (error) {
    console.error('Error saving formulas to database:', error);
    return null;
  }
}

async function main() {
  const pdfDir = path.join(process.cwd(), 'app');
  const files = fs.readdirSync(pdfDir).filter(file => file.endsWith('.pdf'));
  
  for (const file of files) {
    const filePath = path.join(pdfDir, file);
    console.log(`Processing ${file}...`);
    
    const formulas = await processPDF(filePath);
    if (formulas.length > 0) {
      await saveFormulasToDatabase(formulas);
    }
  }
}

main().catch(console.error); 