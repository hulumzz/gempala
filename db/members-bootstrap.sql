-- Run in the Neon SQL Editor for the database used by DATABASE_URL.
-- Creates only the public member table and seeds the 20 published project IDs.
-- Existing member records are preserved (ON CONFLICT DO NOTHING).
-- No credentials, private contact details, or unrelated tables are included.

BEGIN;

CREATE TABLE IF NOT EXISTS public.members (
  id BIGSERIAL PRIMARY KEY,
  member_code VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(160) NOT NULL,
  nickname VARCHAR(80) NOT NULL,
  role VARCHAR(120) NOT NULL DEFAULT 'Anggota',
  division VARCHAR(120) NOT NULL DEFAULT 'Member',
  joined_year SMALLINT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE','ALUMNI','INACTIVE')),
  bio TEXT,
  birth_date DATE,
  quote TEXT,
  instagram VARCHAR(100),
  photo_url TEXT,
  is_public BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.members ADD COLUMN IF NOT EXISTS birth_date DATE;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS quote TEXT;

CREATE INDEX IF NOT EXISTS members_public_code_idx ON public.members(member_code) WHERE is_public = TRUE;

INSERT INTO public.members
  (member_code, full_name, nickname, role, division, joined_year, status, bio, instagram, photo_url, birth_date, quote)
VALUES
('GMP-026-001', 'Muhamad Khoirul Ulum', 'Ulum', 'Ketua', 'Core Team', 2021, 'ACTIVE', 'Bergerak bersama Gempala untuk membangun ruang tumbuh, karya, dan kegiatan positif bagi pemuda Bojongireng.', '@gempala__', '/members/ulum.webp', '2001-04-02', 'Organisasi tumbuh ketika tanggung jawab dijalankan bersama.'),
('GMP-026-002', 'Vina Ida Matusilmi', 'Vina', 'Anggota', 'Creative & Media', 2022, 'ACTIVE', 'Membawa semangat kreatif dan kolaboratif dalam setiap kegiatan Gempala.', NULL, '/members/vina.webp', '2006-12-26', 'Karya yang baik lahir dari kemauan untuk terus belajar.'),
('GMP-026-003', 'M. Aji Irwan Sah', 'Aji', 'Anggota', 'Community', 2022, 'ACTIVE', 'Ikut aktif dalam menjaga hubungan dan semangat kebersamaan di lingkungan Gempala.', NULL, '/placeholder-member.svg', '2011-11-26', 'Langkah kecil menjadi berarti ketika dilakukan dengan tulus.'),
('GMP-026-004', 'M. Ulin Nuha', 'Ulin', 'Anggota', 'Community', 2022, 'ACTIVE', 'Berpartisipasi dalam kegiatan sosial dan penguatan semangat pemuda di Bojongireng.', NULL, '/members/ulin.webp', '2010-04-30', 'Kebersamaan dimulai dari kesediaan untuk saling mendengarkan.'),
('GMP-026-005', 'Muhammad Khafid Mubarok', 'Khafid', 'Anggota', 'Creative & Media', 2022, 'ACTIVE', 'Menjaga visual dan ekspresi Gempala agar tetap hidup, dekat, dan menggugah semangat.', NULL, '/members/khafid.webp', '2011-02-20', 'Berani mencoba adalah langkah pertama menuju karya yang baik.'),
('GMP-026-006', 'Muhamad Fahrizal Abib', 'Fahrizal', 'Anggota', 'Community', 2022, 'ACTIVE', 'Menghidupkan kolaborasi komunitas lewat kegiatan yang bermanfaat bagi lingkungan sekitar.', NULL, '/placeholder-member.svg', '2004-12-03', 'Kebaikan sederhana dapat membawa perubahan bagi sekitar.'),
('GMP-026-007', 'Uswatun', 'Uswatun', 'Anggota', 'Community', 2022, 'ACTIVE', 'Menjadi bagian dari ruang tumbuh bersama yang mendorong semangat kebersamaan.', NULL, '/placeholder-member.svg', '2004-08-10', 'Menolong orang lain juga mengajarkan kita untuk tumbuh.'),
('GMP-026-008', 'Zahra Alivia', 'Zahra', 'Anggota', 'Creative & Media', 2022, 'ACTIVE', 'Berkomitmen menjaga ekspresi dan narasi visual yang mewakili semangat Gempala.', NULL, '/members/zahra.webp', '2005-12-17', 'Setiap gagasan layak diberi kesempatan untuk berkembang.'),
('GMP-026-009', 'Nurul Nisa', 'Nisa', 'Anggota', 'Community', 2022, 'ACTIVE', 'Turut hadir dalam kegiatan yang membangun solidaritas dan ruang sosial yang sehat.', NULL, '/placeholder-member.svg', '2005-06-09', 'Persahabatan terjaga melalui perhatian dan kejujuran.'),
('GMP-026-010', 'Sifatul Khasanah', 'Sifatul', 'Anggota', 'Community', 2022, 'ACTIVE', 'Mendukung semangat kebersamaan dan kreativitas dalam berbagai agenda Gempala.', NULL, '/placeholder-member.svg', '2011-05-02', 'Kesabaran membuat langkah kita lebih kuat dan terarah.'),
('GMP-026-011', 'Revans Permana', 'Revans', 'Anggota', 'Community', 2022, 'ACTIVE', 'Aktif dalam menjaga dinamika organisasi agar tetap hidup, ramah, dan terarah.', NULL, '/members/revans.webp', '2012-01-23', 'Mimpi menjadi nyata ketika kita mulai bertindak.'),
('GMP-026-012', 'Agung Fahreza', 'Agung', 'Anggota', 'Community', 2022, 'ACTIVE', 'Mewakili semangat pemuda yang siap bergerak dan berkontribusi di lingkungan sekitar.', NULL, '/placeholder-member.svg', '2012-04-17', 'Keberanian tumbuh saat kita tetap melangkah meski ragu.'),
('GMP-026-013', 'M Adi Setiawan', 'Adi', 'Anggota', 'Community', 2022, 'ACTIVE', 'Berperan aktif dalam menjaga ekosistem kebersamaan dan kreativitas Gempala.', NULL, '/placeholder-member.svg', '2005-03-21', 'Kepercayaan dibangun dari janji yang ditepati.'),
('GMP-026-014', 'Kukuh Bayu Pamungkas', 'Kukuh', 'Anggota', 'Community', 2022, 'ACTIVE', 'Terlibat dalam kegiatan yang menumbuhkan rasa peduli dan semangat bersama.', NULL, '/placeholder-member.svg', '2013-02-22', 'Peduli berarti hadir ketika orang lain membutuhkan.'),
('GMP-026-015', 'Sutanto', 'Sutanto', 'Anggota', 'Community', 2022, 'ACTIVE', 'Bersama Gempala, terus membangun hubungan yang solid dan penuh makna.', NULL, '/placeholder-member.svg', '2005-10-25', 'Perbedaan menjadi kekuatan saat kita saling menghargai.'),
('GMP-026-016', 'M Alif Fadilah', 'Alif', 'Anggota', 'Community', 2022, 'ACTIVE', 'Berpartisipasi dalam semangat kolaborasi dan kegiatan yang memberi dampak positif.', NULL, '/placeholder-member.svg', '2010-09-23', 'Usaha hari ini adalah bekal untuk kesempatan esok.'),
('GMP-026-017', 'Ujwala Nimpuna', 'Ujwala', 'Anggota', 'Creative & Media', 2022, 'ACTIVE', 'Membawa nilai kreatif dan kerapian dalam setiap bentuk dokumentasi dan ekspresi Gempala.', NULL, '/members/ujwala.webp', '2010-03-07', 'Kreativitas tumbuh ketika rasa ingin tahu tetap dijaga.'),
('GMP-026-018', 'Amelia Zukhrofah', 'Amelia', 'Anggota', 'Community', 2022, 'ACTIVE', 'Bergabung dalam ruang yang mendorong kemajuan bersama dan kebersamaan yang sehat.', NULL, '/members/amelia.webp', '2007-07-05', 'Tidak perlu sempurna untuk mulai memberi manfaat.'),
('GMP-026-019', 'Sulton Rozaqi', 'Sulton', 'Anggota', 'Community', 2022, 'ACTIVE', 'Aktif bergerak bersama Gempala dalam aktivitas yang memberi dampak positif.', NULL, '/members/sulton.webp', '2004-04-01', 'Waktu menjadi berharga ketika diisi dengan tindakan yang baik.'),
('GMP-026-020', 'Indri Sagita', 'Indri', 'Anggota', 'Community', 2022, 'ACTIVE', 'Menjadi bagian dari ekosistem Gempala yang mendorong semangat kerja sama dan pembangunan.', NULL, '/members/indri.webp', '2005-10-09', 'Keberhasilan bersama dimulai dari kemauan untuk bekerja sama.')
ON CONFLICT (member_code) DO NOTHING;

COMMIT;
