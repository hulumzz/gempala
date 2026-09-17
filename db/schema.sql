CREATE TABLE IF NOT EXISTS members (
  id BIGSERIAL PRIMARY KEY,
  member_code VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(160) NOT NULL,
  nickname VARCHAR(80) NOT NULL,
  role VARCHAR(120) NOT NULL DEFAULT 'Anggota',
  division VARCHAR(120) NOT NULL DEFAULT 'Member',
  joined_year SMALLINT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','ALUMNI','INACTIVE')),
  bio TEXT,
  instagram VARCHAR(100),
  photo_url TEXT,
  is_public BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS members_public_code_idx ON members(member_code) WHERE is_public = TRUE;

CREATE TABLE IF NOT EXISTS activities (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(180) UNIQUE NOT NULL,
  title VARCHAR(180) NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_url TEXT,
  event_date DATE NOT NULL,
  location VARCHAR(180),
  category VARCHAR(80),
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS achievements (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  description TEXT,
  achieved_at DATE,
  image_url TEXT,
  level VARCHAR(80),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS news (
  id BIGSERIAL PRIMARY KEY,
  slug VARCHAR(180) UNIQUE NOT NULL,
  title VARCHAR(220) NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_url TEXT,
  author VARCHAR(120),
  status VARCHAR(20) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','PUBLISHED')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Replace these samples with real Gempala data.
INSERT INTO members (member_code, full_name, nickname, role, division, joined_year, status, bio)
VALUES
('GMP-026-001','Khoirul Ulum','Ulum','Ketua','Core Team',2021,'ACTIVE','Bergerak bersama Gempala untuk membangun ruang tumbuh, karya, dan kegiatan positif bagi pemuda Bojongireng.'),
('GMP-026-002','Member Gempala','Member 02','Sekretaris','Core Team',2021,'ACTIVE','Bagian dari perjalanan Gempala sejak awal.'),
('GMP-026-003','Member Gempala','Member 03','Bendahara','Core Team',2021,'ACTIVE','Menjaga organisasi tetap bertumbuh lewat kerja yang rapi dan konsisten.')
ON CONFLICT (member_code) DO NOTHING;
