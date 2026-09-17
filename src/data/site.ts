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

export const members: Member[] = [
  {
    code: 'GMP-026-001',
    name: 'Khoirul Ulum',
    nickname: 'Ulum',
    role: 'Ketua',
    division: 'Core Team',
    joined: 2021,
    status: 'ACTIVE',
    bio: 'Bergerak bersama Gempala untuk membangun ruang tumbuh, karya, dan kegiatan positif bagi pemuda Bojongireng.',
    instagram: '@gempala__'
  },
  {
    code: 'GMP-026-002',
    name: 'Member Gempala',
    nickname: 'Member 02',
    role: 'Sekretaris',
    division: 'Core Team',
    joined: 2021,
    status: 'ACTIVE',
    bio: 'Bagian dari perjalanan Gempala sejak awal.'
  },
  {
    code: 'GMP-026-003',
    name: 'Member Gempala',
    nickname: 'Member 03',
    role: 'Bendahara',
    division: 'Core Team',
    joined: 2021,
    status: 'ACTIVE',
    bio: 'Menjaga organisasi tetap bertumbuh lewat kerja yang rapi dan konsisten.'
  },
  {
    code: 'GMP-026-004',
    name: 'Member Gempala',
    nickname: 'Member 04',
    role: 'Anggota',
    division: 'Creative & Media',
    joined: 2022,
    status: 'ACTIVE',
    bio: 'Mendokumentasikan cerita, energi, dan karya Gempala.'
  }
];

export const activities = [
  { no: '024', title: 'Semarak HUT RI', date: '17.08.2026', location: 'Bojongireng', category: 'Community', accent: 'lime' },
  { no: '023', title: 'Wisata Religi Megengan', date: '16.02.2026', location: 'Jawa Tengah', category: 'Culture', accent: 'blue' },
  { no: '022', title: 'Aksi Sosial Pemuda', date: '11.01.2026', location: 'Bojongireng', category: 'Social', accent: 'orange' }
];

export const achievements = [
  { year: '2026', title: 'Kolaborasi Pemuda & Warga', note: 'Program kegiatan komunitas lintas generasi di lingkungan Bojongireng.' },
  { year: '2025', title: 'Program Sosial Berkelanjutan', note: 'Mengembangkan agenda sosial sebagai salah satu aktivitas rutin organisasi.' },
  { year: '2021', title: 'Gempala Berdiri', note: 'Awal perjalanan komunitas pemuda Gempala.' }
];

export const stories = [
  { date: '02.09.2026', tag: 'ACTIVITY', title: 'Cerita dari kegiatan pemuda: ruang kecil yang bikin kita tetap dekat.' },
  { date: '17.08.2026', tag: 'COMMUNITY', title: 'Agustus, warga, dan energi yang selalu bikin Bojongireng ramai.' },
  { date: '16.02.2026', tag: 'CULTURE', title: 'Megengan: tradisi, perjalanan, dan memori yang dibawa pulang.' }
];
