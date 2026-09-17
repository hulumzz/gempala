export const MEMBER_CODE_PATTERN = /^GMP-\d{3}-\d{3}$/;

export function normalizeMemberCode(code: string) {
  return String(code || '').trim().toUpperCase();
}

export function isValidMemberCode(code: string) {
  return MEMBER_CODE_PATTERN.test(normalizeMemberCode(code));
}

export function buildMemberPhotoPath(photo?: string) {
  return photo ? `/members/${photo}` : '/placeholder-member.svg';
}
