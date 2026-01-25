-- Add featured column to portfolio_projects table
ALTER TABLE portfolio_projects ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Create index for faster featured queries
CREATE INDEX IF NOT EXISTS idx_portfolio_projects_featured ON portfolio_projects(featured);
