-- Add clients/partners table for logo ticker
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Public read access for clients
CREATE POLICY "Public can view clients" ON clients FOR SELECT USING (is_active = true);

-- Authenticated users can manage clients
CREATE POLICY "Authenticated users can insert clients" ON clients FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update clients" ON clients FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete clients" ON clients FOR DELETE USING (auth.role() = 'authenticated');

-- Insert sample clients
INSERT INTO clients (name, display_order) VALUES
('서울대학교병원', 1),
('세종문화회관', 2),
('롯데백화점', 3),
('신세계백화점', 4),
('코엑스', 5),
('그랜드하얏트호텔', 6),
('파라다이스시티', 7),
('스타벅스 코리아', 8),
('투썸플레이스', 9),
('한국관광공사', 10),
('삼성전자', 11),
('LG전자', 12);
