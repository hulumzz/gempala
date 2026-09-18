export type Member = {
  code: string;
  name: string;
  nickname: string;
  role: string;
  division: string;
  joined: number;
  status: 'ACTIVE' | 'ALUMNI';
  bio: string;
  birthDate?: string;
  quote?: string;
  instagram?: string;
  photo?: string;
};

export const memberDataset: Member[] = [
  {
    code: 'GMP-026-001',
    birthDate: '2001-04-02',
    quote: 'Organisasi tumbuh ketika tanggung jawab dijalankan bersama.',
    name: 'Muhamad Khoirul Ulum',
    nickname: 'Ulum',
    role: 'Ketua',
    division: 'Core Team',
    joined: 2021,
    status: 'ACTIVE',
    bio: 'Bergerak bersama Gempala untuk membangun ruang tumbuh, karya, dan kegiatan positif bagi pemuda Bojongireng.',
    instagram: '@gempala__',
    photo: 'ulum.webp'
  },
  {
    code: 'GMP-026-002',
    birthDate: '2006-12-26',
    quote: 'Karya yang baik lahir dari kemauan untuk terus belajar.',
    name: 'Vina Ida Matusilmi',
    nickname: 'Vina',
    role: 'Anggota',
    division: 'Creative & Media',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Membawa semangat kreatif dan kolaboratif dalam setiap kegiatan Gempala.',
    photo: 'vina.webp'
  },
  {
    code: 'GMP-026-003',
    birthDate: '2011-11-26',
    quote: 'Langkah kecil menjadi berarti ketika dilakukan dengan tulus.',
    name: 'M. Aji Irwan Sah',
    nickname: 'Aji',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Ikut aktif dalam menjaga hubungan dan semangat kebersamaan di lingkungan Gempala.',
    photo: 'aji.webp'
  },
  {
    code: 'GMP-026-004',
    birthDate: '2010-04-30',
    quote: 'Kebersamaan dimulai dari kesediaan untuk saling mendengarkan.',
    name: 'M. Ulin Nuha',
    nickname: 'Ulin',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Berpartisipasi dalam kegiatan sosial dan penguatan semangat pemuda di Bojongireng.',
    photo: 'ulin.webp'
  },
  {
    code: 'GMP-026-005',
    birthDate: '2011-02-20',
    quote: 'Berani mencoba adalah langkah pertama menuju karya yang baik.',
    name: 'Muhammad Khafid Mubarok',
    nickname: 'Khafid',
    role: 'Anggota',
    division: 'Creative & Media',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Menjaga visual dan ekspresi Gempala agar tetap hidup, dekat, dan menggugah semangat.',
    photo: 'khafid.webp'
  },
  {
    code: 'GMP-026-006',
    birthDate: '2004-12-03',
    quote: 'Kebaikan sederhana dapat membawa perubahan bagi sekitar.',
    name: 'Muhamad Fahrizal Abib',
    nickname: 'Fahrizal',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Menghidupkan kolaborasi komunitas lewat kegiatan yang bermanfaat bagi lingkungan sekitar.',
    photo: 'fahrizal.webp'
  },
  {
    code: 'GMP-026-007',
    birthDate: '2004-08-10',
    quote: 'Menolong orang lain juga mengajarkan kita untuk tumbuh.',
    name: 'Uswatun',
    nickname: 'Uswatun',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Menjadi bagian dari ruang tumbuh bersama yang mendorong semangat kebersamaan.',
    photo: 'uswatun.webp'
  },
  {
    code: 'GMP-026-008',
    birthDate: '2005-12-17',
    quote: 'Setiap gagasan layak diberi kesempatan untuk berkembang.',
    name: 'Zahra Alivia',
    nickname: 'Zahra',
    role: 'Anggota',
    division: 'Creative & Media',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Berkomitmen menjaga ekspresi dan narasi visual yang mewakili semangat Gempala.',
    photo: 'zahra.webp'
  },
  {
    code: 'GMP-026-009',
    birthDate: '2005-06-09',
    quote: 'Persahabatan terjaga melalui perhatian dan kejujuran.',
    name: 'Nurul Nisa',
    nickname: 'Nisa',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Turut hadir dalam kegiatan yang membangun solidaritas dan ruang sosial yang sehat.',
    photo: 'nurul.webp'
  },
  {
    code: 'GMP-026-010',
    birthDate: '2011-05-02',
    quote: 'Kesabaran membuat langkah kita lebih kuat dan terarah.',
    name: 'Sifatul Khasanah',
    nickname: 'Sifatul',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Mendukung semangat kebersamaan dan kreativitas dalam berbagai agenda Gempala.',
    photo: 'sifatul.webp'
  },
  {
    code: 'GMP-026-011',
    birthDate: '2012-01-23',
    quote: 'Mimpi menjadi nyata ketika kita mulai bertindak.',
    name: 'Revans Permana',
    nickname: 'Revans',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Aktif dalam menjaga dinamika organisasi agar tetap hidup, ramah, dan terarah.',
    photo: 'revans.webp'
  },
  {
    code: 'GMP-026-012',
    birthDate: '2012-04-17',
    quote: 'Keberanian tumbuh saat kita tetap melangkah meski ragu.',
    name: 'Agung Fahreza',
    nickname: 'Agung',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Mewakili semangat pemuda yang siap bergerak dan berkontribusi di lingkungan sekitar.',
    photo: 'agung.webp'
  },
  {
    code: 'GMP-026-013',
    birthDate: '2005-03-21',
    quote: 'Kepercayaan dibangun dari janji yang ditepati.',
    name: 'M Adi Setiawan',
    nickname: 'Adi',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Berperan aktif dalam menjaga ekosistem kebersamaan dan kreativitas Gempala.',
    photo: 'adi.webp'
  },
  {
    code: 'GMP-026-014',
    birthDate: '2013-02-22',
    quote: 'Peduli berarti hadir ketika orang lain membutuhkan.',
    name: 'Kukuh Bayu Pamungkas',
    nickname: 'Kukuh',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Terlibat dalam kegiatan yang menumbuhkan rasa peduli dan semangat bersama.',
    photo: 'kukuh.webp'
  },
  {
    code: 'GMP-026-015',
    birthDate: '2005-10-25',
    quote: 'Perbedaan menjadi kekuatan saat kita saling menghargai.',
    name: 'Sutanto',
    nickname: 'Sutanto',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Bersama Gempala, terus membangun hubungan yang solid dan penuh makna.',
    photo: 'sutanto.webp'
  },
  {
    code: 'GMP-026-016',
    birthDate: '2010-09-23',
    quote: 'Usaha hari ini adalah bekal untuk kesempatan esok.',
    name: 'M Alif Fadilah',
    nickname: 'Alif',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Berpartisipasi dalam semangat kolaborasi dan kegiatan yang memberi dampak positif.',
    photo: 'alif.webp'
  },
  {
    code: 'GMP-026-017',
    birthDate: '2010-03-07',
    quote: 'Kreativitas tumbuh ketika rasa ingin tahu tetap dijaga.',
    name: 'Ujwala Nimpuna',
    nickname: 'Ujwala',
    role: 'Anggota',
    division: 'Creative & Media',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Membawa nilai kreatif dan kerapian dalam setiap bentuk dokumentasi dan ekspresi Gempala.',
    photo: 'ujwala.webp'
  },
  {
    code: 'GMP-026-018',
    birthDate: '2007-07-05',
    quote: 'Tidak perlu sempurna untuk mulai memberi manfaat.',
    name: 'Amelia Zukhrofah',
    nickname: 'Amelia',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Bergabung dalam ruang yang mendorong kemajuan bersama dan kebersamaan yang sehat.',
    photo: 'amelia.webp'
  },
  {
    code: 'GMP-026-019',
    birthDate: '2004-04-01',
    quote: 'Waktu menjadi berharga ketika diisi dengan tindakan yang baik.',
    name: 'Sulton Rozaqi',
    nickname: 'Sulton',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Aktif bergerak bersama Gempala dalam aktivitas yang memberi dampak positif.',
    photo: 'sulton.webp'
  },
  {
    code: 'GMP-026-020',
    birthDate: '2005-10-09',
    quote: 'Keberhasilan bersama dimulai dari kemauan untuk bekerja sama.',
    name: 'Indri Sagita',
    nickname: 'Indri',
    role: 'Anggota',
    division: 'Community',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Menjadi bagian dari ekosistem Gempala yang mendorong semangat kerja sama dan pembangunan.',
    photo: 'indri.webp'
  }
];

export const getMemberByCode = (code: string) => {
  const normalized = code.trim().toUpperCase();
  return memberDataset.find((member) => member.code === normalized) ?? null;
};

export const getMemberPhotoUrl = (member: Member | null | undefined) => {
  if (!member) return '/placeholder-member.svg';
  return member.photo ? `/members/${member.photo}` : '/placeholder-member.svg';
};
