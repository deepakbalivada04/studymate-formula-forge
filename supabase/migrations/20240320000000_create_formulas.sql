-- Create formulas table
CREATE TABLE IF NOT EXISTS formulas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    expression TEXT NOT NULL,
    description TEXT,
    subject TEXT NOT NULL,
    category TEXT,
    file_source TEXT,
    page_number INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    CONSTRAINT valid_subject CHECK (subject IN ('physics', 'chemistry', 'mathematics'))
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS formulas_subject_idx ON formulas(subject);
CREATE INDEX IF NOT EXISTS formulas_user_id_idx ON formulas(user_id);
CREATE INDEX IF NOT EXISTS formulas_category_idx ON formulas(category);
CREATE INDEX IF NOT EXISTS formulas_file_source_idx ON formulas(file_source);

-- Enable Row Level Security
ALTER TABLE formulas ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own formulas"
    ON formulas FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own formulas"
    ON formulas FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own formulas"
    ON formulas FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own formulas"
    ON formulas FOR DELETE
    USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_formulas_updated_at
    BEFORE UPDATE ON formulas
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('formulas', 'formulas', false)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies
CREATE POLICY "Users can upload their own PDFs"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'formulas' AND
        auth.uid() = owner
    );

CREATE POLICY "Users can view their own PDFs"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'formulas' AND
        auth.uid() = owner
    );

CREATE POLICY "Users can delete their own PDFs"
    ON storage.objects FOR DELETE
    USING (
        bucket_id = 'formulas' AND
        auth.uid() = owner
    );

-- Create view for public formulas (optional, if you want to allow viewing other users' formulas)
CREATE OR REPLACE VIEW public_formulas AS
SELECT 
    id,
    name,
    expression,
    description,
    subject,
    category,
    created_at,
    updated_at,
    user_id
FROM formulas
WHERE auth.uid() = user_id;

-- Add sample formulas
INSERT INTO formulas (name, expression, description, subject, category, user_id)
VALUES 
    -- Physics Formulas
    ('Newton''s Second Law', 'F = ma', 'Force equals mass times acceleration', 'physics', 'Mechanics', auth.uid()),
    ('Gravitational Force', 'F = G\frac{m_1m_2}{r^2}', 'Universal law of gravitation', 'physics', 'Gravitation', auth.uid()),
    ('Einstein''s Mass-Energy Equivalence', 'E = mc^2', 'Energy equals mass times the speed of light squared', 'physics', 'Relativity', auth.uid()),
    ('Schrödinger Equation', 'i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi', 'Fundamental equation of quantum mechanics', 'physics', 'Quantum Mechanics', auth.uid()),
    ('Maxwell''s Equations', '\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}', 'Gauss''s law for electricity', 'physics', 'Electromagnetism', auth.uid()),

    -- Chemistry Formulas
    ('Ideal Gas Law', 'PV = nRT', 'Relationship between pressure, volume, and temperature of a gas', 'chemistry', 'Thermodynamics', auth.uid()),
    ('Nernst Equation', 'E = E^0 - \frac{RT}{nF}\ln Q', 'Cell potential at non-standard conditions', 'chemistry', 'Electrochemistry', auth.uid()),
    ('Arrhenius Equation', 'k = Ae^{-\frac{E_a}{RT}}', 'Temperature dependence of reaction rates', 'chemistry', 'Kinetics', auth.uid()),
    ('Henderson-Hasselbalch Equation', 'pH = pK_a + \log\frac{[A^-]}{[HA]}', 'pH of buffer solutions', 'chemistry', 'Acid-Base', auth.uid()),
    ('Van der Waals Equation', '(P + \frac{an^2}{V^2})(V - nb) = nRT', 'Modified ideal gas law for real gases', 'chemistry', 'Thermodynamics', auth.uid()),

    -- Mathematics Formulas
    ('Quadratic Formula', 'x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}', 'Formula for solving quadratic equations', 'mathematics', 'Algebra', auth.uid()),
    ('Euler''s Identity', 'e^{i\pi} + 1 = 0', 'Most beautiful equation in mathematics', 'mathematics', 'Complex Analysis', auth.uid()),
    ('Taylor Series', 'f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n', 'Infinite series representation of a function', 'mathematics', 'Calculus', auth.uid()),
    ('Fourier Transform', 'F(\omega) = \int_{-\infty}^{\infty} f(t)e^{-i\omega t}dt', 'Transformation between time and frequency domains', 'mathematics', 'Analysis', auth.uid()),
    ('Gaussian Integral', '\int_{-\infty}^{\infty} e^{-x^2}dx = \sqrt{\pi}', 'Important integral in probability and statistics', 'mathematics', 'Calculus', auth.uid()); 