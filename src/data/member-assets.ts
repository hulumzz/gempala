import type { Member } from './members';

// Source-of-truth member files currently available in /public/members.
// Keep the original member.photo value untouched when a matching file has not
// been supplied yet, so existing IDs and future uploads remain compatible.
const uploadedMemberPhotos = new Set([
  'ulum.webp',
  'vina.webp',
  'izur.webp',
  'huda.webp',
  'sulton.webp',
  'zahra.webp',
  'khafid.webp',
  'amelia.webp',
  'nurul.webp',
  'revans.webp',
  'ulin.webp',
  'ujwala.webp',
  'indri.webp'
]);

export const memberTones = ['purple', 'sky', 'lime', 'orange', 'pink', 'cream'] as const;

// Photo-only records from the supplied archive. Identity data is intentionally
// blank until Gempala assigns official profile data in the main member dataset.
export const photoOnlyMembers: Member[] = [
  {
    code: '',
    name: '',
    nickname: '',
    role: '',
    division: '',
    joined: 0,
    status: 'ACTIVE',
    bio: '',
    photo: 'izur.webp'
  },
  {
    code: '',
    name: '',
    nickname: '',
    role: '',
    division: '',
    joined: 0,
    status: 'ACTIVE',
    bio: '',
    photo: 'huda.webp'
  }
];

export const hasUploadedMemberPhoto = (member: Member | null | undefined) =>
  Boolean(member?.photo && uploadedMemberPhotos.has(member.photo));

export const getUploadedMemberPhotoUrl = (member: Member | null | undefined) => {
  if (!hasUploadedMemberPhoto(member)) return '/placeholder-member.svg';
  return `/members/${member!.photo}`;
};

export const getMemberTone = (index: number) => memberTones[index % memberTones.length];
