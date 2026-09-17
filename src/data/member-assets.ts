import type { Member } from './members';

// Files currently available in /public/members. Keep the original member.photo
// value untouched even when its matching file has not been uploaded yet.
const uploadedMemberPhotos = new Set([
  'ulum.webp',
  'vina.webp',
  'izur.webp',
  'huda.webp',
  'sulton.webp',
  'zahra.webp',
  'khafid.webp',
  'amelia.webp',
  'revans.webp',
  'ulin.webp',
  'ujwala.webp',
  'indri.webp'
]);

// Photo-only records from the supplied archive. Identity data is intentionally
// blank until Gempala assigns an official name/member ID in the main dataset.
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

export const getUploadedMemberPhotoUrl = (member: Member | null | undefined) => {
  if (!member?.photo || !uploadedMemberPhotos.has(member.photo)) return '/placeholder-member.svg';
  return `/members/${member.photo}`;
};
