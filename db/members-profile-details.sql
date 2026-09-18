-- For databases already initialized with members-bootstrap.sql.
-- Adds profile fields and updates only the dates and quotes of the 20 documented IDs.
BEGIN;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS birth_date DATE;
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS quote TEXT;
UPDATE public.members AS member
SET birth_date = details.birth_date, quote = details.quote, updated_at = NOW()
FROM (VALUES
  ('GMP-026-001', DATE '2001-04-02', 'Organisasi tumbuh ketika tanggung jawab dijalankan bersama.'),
  ('GMP-026-002', DATE '2006-12-26', 'Karya yang baik lahir dari kemauan untuk terus belajar.'),
  ('GMP-026-003', DATE '2011-11-26', 'Langkah kecil menjadi berarti ketika dilakukan dengan tulus.'),
  ('GMP-026-004', DATE '2010-04-30', 'Kebersamaan dimulai dari kesediaan untuk saling mendengarkan.'),
  ('GMP-026-005', DATE '2011-02-20', 'Berani mencoba adalah langkah pertama menuju karya yang baik.'),
  ('GMP-026-006', DATE '2004-12-03', 'Kebaikan sederhana dapat membawa perubahan bagi sekitar.'),
  ('GMP-026-007', DATE '2004-08-10', 'Menolong orang lain juga mengajarkan kita untuk tumbuh.'),
  ('GMP-026-008', DATE '2005-12-17', 'Setiap gagasan layak diberi kesempatan untuk berkembang.'),
  ('GMP-026-009', DATE '2005-06-09', 'Persahabatan terjaga melalui perhatian dan kejujuran.'),
  ('GMP-026-010', DATE '2011-05-02', 'Kesabaran membuat langkah kita lebih kuat dan terarah.'),
  ('GMP-026-011', DATE '2012-01-23', 'Mimpi menjadi nyata ketika kita mulai bertindak.'),
  ('GMP-026-012', DATE '2012-04-17', 'Keberanian tumbuh saat kita tetap melangkah meski ragu.'),
  ('GMP-026-013', DATE '2005-03-21', 'Kepercayaan dibangun dari janji yang ditepati.'),
  ('GMP-026-014', DATE '2013-02-22', 'Peduli berarti hadir ketika orang lain membutuhkan.'),
  ('GMP-026-015', DATE '2005-10-25', 'Perbedaan menjadi kekuatan saat kita saling menghargai.'),
  ('GMP-026-016', DATE '2010-09-23', 'Usaha hari ini adalah bekal untuk kesempatan esok.'),
  ('GMP-026-017', DATE '2010-03-07', 'Kreativitas tumbuh ketika rasa ingin tahu tetap dijaga.'),
  ('GMP-026-018', DATE '2007-07-05', 'Tidak perlu sempurna untuk mulai memberi manfaat.'),
  ('GMP-026-019', DATE '2004-04-01', 'Waktu menjadi berharga ketika diisi dengan tindakan yang baik.'),
  ('GMP-026-020', DATE '2005-10-09', 'Keberhasilan bersama dimulai dari kemauan untuk bekerja sama.')
) AS details(member_code, birth_date, quote)
WHERE member.member_code = details.member_code;
COMMIT;
