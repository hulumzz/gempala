export type { Member } from './members';

export type Activity = {
  no: string;
  title: string;
  date: string;
  location: string;
  category: string;
  accent: 'lime' | 'blue' | 'orange';
  image: string;
  imageAlt: string;
  orientation: 'portrait' | 'landscape';
};

import { memberDataset, getMemberByCode } from './members';
import {
  photoOnlyMembers,
  getUploadedMemberPhotoUrl,
  hasUploadedMemberPhoto,
  getMemberTone,
  memberTones
} from './member-assets';

export const members = [...memberDataset, ...photoOnlyMembers];
export { getMemberByCode, hasUploadedMemberPhoto, getMemberTone, memberTones };
export const getMemberPhotoUrl = getUploadedMemberPhotoUrl;

export const memberPlaceholders = {
  fallbackMemberImage: '/placeholder-member.svg'
};

export const activities: Activity[] = [
  {
    no: '024',
    title: 'Semarak HUT RI',
    date: '17.08.2026',
    location: 'Bojongireng',
    category: 'Community',
    accent: 'lime',
    image: '/activities/hut-ri.jpg',
    imageAlt: 'Dokumentasi Semarak HUT RI bersama Gempala',
    orientation: 'portrait'
  },
  {
    no: '023',
    title: 'Wisata Religi Megengan',
    date: '16.02.2026',
    location: 'Jawa Tengah',
    category: 'Culture',
    accent: 'blue',
    image: '/activities/megengan.jpg',
    imageAlt: 'Dokumentasi wisata religi Megengan bersama Gempala',
    orientation: 'landscape'
  },
  {
    no: '022',
    title: 'Bagi Takjil Gempala',
    date: '11.01.2026',
    location: 'Bojongireng',
    category: 'Social',
    accent: 'orange',
    image: '/activities/sosial.jpg',
    imageAlt: 'Dokumentasi kegiatan sosial dan bagi takjil Gempala',
    orientation: 'landscape'
  }
];

export const achievementPhoto = {
  src: '/activities/achievement.jpg',
  alt: 'Dokumentasi achievement Gempala bersama piala dan sertifikat',
  orientation: 'landscape' as const
};

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
