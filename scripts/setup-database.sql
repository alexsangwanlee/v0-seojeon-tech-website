-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL, -- 'curtains', 'awnings', 'stage', 'folding-doors'
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  features JSONB, -- Array of feature objects
  specifications JSONB, -- Technical specs
  price_range TEXT,
  image_url TEXT,
  gallery_images JSONB, -- Array of image URLs
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery/Projects table
CREATE TABLE IF NOT EXISTS gallery_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- 'curtains', 'awnings', 'stage', 'folding-doors'
  location TEXT,
  client_type TEXT, -- 'hospital', 'theater', 'commercial', 'residential'
  description TEXT,
  completion_date DATE,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  tags JSONB, -- Array of tags
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  product_category TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- 'new', 'in_progress', 'completed'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin users table (for dashboard access)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin', -- 'admin', 'editor'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read access for products and gallery
CREATE POLICY "Public can view products" ON products FOR SELECT USING (true);
CREATE POLICY "Public can view gallery" ON gallery_projects FOR SELECT USING (true);

-- Authenticated users can manage content
CREATE POLICY "Authenticated users can insert products" ON products FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update products" ON products FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete products" ON products FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert gallery" ON gallery_projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update gallery" ON gallery_projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete gallery" ON gallery_projects FOR DELETE USING (auth.role() = 'authenticated');

-- Anyone can submit inquiries
CREATE POLICY "Anyone can insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can view inquiries" ON inquiries FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update inquiries" ON inquiries FOR UPDATE USING (auth.role() = 'authenticated');

-- Only authenticated users can view admin users
CREATE POLICY "Authenticated users can view admin users" ON admin_users FOR SELECT USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO products (category, title, subtitle, description, features, specifications, price_range, is_featured) VALUES
('curtains', '병원용 항균 커튼', 'Medical Grade Antibacterial Curtains', '의료 환경을 위한 프리미엄 항균 솔루션. 99.9% 항균 효과로 안전한 의료 공간을 만듭니다.', 
 '[{"title":"99.9% 항균 효과","description":"의료용 인증 항균 원단"},{"title":"난연 1급","description":"안전 인증 완료"},{"title":"세탁 가능","description":"200회 이상 세탁 후에도 항균 효과 유지"}]'::jsonb,
 '{"material":"항균 폴리에스터 100%","width":"최대 3m","certification":"KC 인증, 의료기기 인증"}'::jsonb,
 '상담 후 견적', true),

('awnings', '프리미엄 접이식 어닝', 'Premium Retractable Awning', '건축미를 살리는 고급 어닝 시스템. 내구성과 디자인을 동시에 만족시킵니다.',
 '[{"title":"Somfy 모터 시스템","description":"프랑스 최고급 전동 시스템"},{"title":"맞춤 제작","description":"공간에 맞는 완벽한 사이즈"},{"title":"10년 보증","description":"구조물 및 모터 시스템 보증"}]'::jsonb,
 '{"frame":"알루미늄 합금","fabric":"아크릴 100% (Sunbrella)","motor":"Somfy RTS/io","warranty":"10년"}'::jsonb,
 '300만원부터', true),

('stage', 'Somfy 전동 무대막', 'Somfy Motorized Stage Curtains', '극장과 공연장을 위한 프로페셔널 무대막 시스템. 정밀한 제어와 완벽한 동기화.',
 '[{"title":"Somfy 프로페셔널 시스템","description":"극장 전용 모터 및 제어 시스템"},{"title":"무소음 작동","description":"공연 중에도 조용한 작동"},{"title":"동기화 제어","description":"여러 막 동시 제어 가능"}]'::jsonb,
 '{"motor":"Somfy LT50/60","control":"RTS/io-homecontrol","fabric":"난연 1급 무대막 전용 원단","customization":"색상, 사이즈 맞춤 제작"}'::jsonb,
 '상담 후 견적', true),

('folding-doors', '접이식 폴딩도어', 'Folding Partition Doors', '공간 활용을 극대화하는 스마트 폴딩도어 시스템. 상업 공간과 다목적홀에 최적화.',
 '[{"title":"공간 효율","description":"완전 개방 시 90% 이상 공간 확보"},{"title":"방음 효과","description":"STC 등급 인증 방음 성능"},{"title":"내구성","description":"상업용 고강도 트랙 시스템"}]'::jsonb,
 '{"material":"PVC/원목/알루미늄","track":"독일산 하드웨어","sound_insulation":"STC 30-40","panel_thickness":"40-100mm"}'::jsonb,
 '200만원부터', false);

INSERT INTO gallery_projects (title, category, location, client_type, description, completion_date, image_url, is_featured) VALUES
('서울대학교병원 항균 커튼 시공', 'curtains', '서울 종로구', 'hospital', '500병상 규모의 종합병원 전체 병실 항균 커튼 시공. 의료 환경에 최적화된 항균 솔루션 제공.', '2024-03-15', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800', true),
('롯데백화점 본점 어닝 시공', 'awnings', '서울 중구', 'commercial', '백화점 외부 테라스 및 야외 공간 프리미엄 어닝 설치. Somfy 모터 시스템 적용.', '2024-02-20', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', true),
('세종문화회관 무대막 시스템', 'stage', '서울 종로구', 'theater', '대극장 무대막 전면 교체 및 Somfy 전동 시스템 설치. 6개 막 동기화 제어 시스템 구축.', '2023-12-10', 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800', true),
('코엑스 컨벤션홀 폴딩도어', 'folding-doors', '서울 강남구', 'commercial', '대형 컨벤션홀 공간 분할용 폴딩도어 시스템. 전동 개폐 및 방음 기능 적용.', '2024-01-25', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', false);
