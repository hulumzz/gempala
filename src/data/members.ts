export type Member = {
  code: string;
  name: string;
  nickname: string;
  role: string;
  division: string;
  joined: number;
  status: 'ACTIVE' | 'ALUMNI';
  bio: string;
  instagram?: string;
  photo?: string;
};

export const memberDataset: Member[] = [
  {
    code: 'GMP-026-001',
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
