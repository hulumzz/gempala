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

import { memberDataset, getMemberByCode } from './members';
import { photoOnlyMembers, getUploadedMemberPhotoUrl } from './member-assets';

export const members = [...memberDataset, ...photoOnlyMembers];
export { getMemberByCode };
export const getMemberPhotoUrl = getUploadedMemberPhotoUrl;

export const memberPlaceholders = {
  fallbackMemberImage: '/placeholder-member.svg'
};

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
