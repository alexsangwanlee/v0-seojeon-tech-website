-- Drop table if exists to recreate with correct schema
DROP TABLE IF EXISTS stage_projects CASCADE;

-- Create stage_projects table for managing installation records
CREATE TABLE stage_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  facility_name TEXT NOT NULL,
  location TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE stage_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active stage projects"
  ON stage_projects FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage stage projects"
  ON stage_projects FOR ALL
  USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO stage_projects (facility_name, location, display_order) VALUES
  ('세종문화회관', '서울', 1),
  ('부산시민회관', '부산', 2),
  ('인천아트플랫폼', '인천', 3),
  ('대전예술의전당', '대전', 4),
  ('서울대학교 대강당', '서울', 5),
  ('연세대학교 백주년기념관', '서울', 6),
  ('대구오페라하우스', '대구', 7),
  ('광주문화예술회관', '광주', 8),
  ('천안예술의전당', '충남', 9),
  ('청주예술의전당', '충북', 10);
