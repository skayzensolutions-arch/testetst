-- Create portfolio_images table for multiple images per project
CREATE TABLE IF NOT EXISTS portfolio_images (
  id BIGSERIAL PRIMARY KEY,
  project_id BIGINT NOT NULL REFERENCES portfolio_projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations on portfolio_images" 
ON portfolio_images 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create index on project_id for faster queries
CREATE INDEX IF NOT EXISTS idx_portfolio_images_project_id 
ON portfolio_images(project_id);

-- Create index on position for ordering
CREATE INDEX IF NOT EXISTS idx_portfolio_images_position 
ON portfolio_images(position);
