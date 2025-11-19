-- Create portfolio_projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  year TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since this is admin-only)
CREATE POLICY "Allow all operations on portfolio_projects" 
ON portfolio_projects 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create index on position for ordering
CREATE INDEX IF NOT EXISTS idx_portfolio_projects_position 
ON portfolio_projects(position);
