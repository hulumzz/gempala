import { describe, expect, it } from 'vitest';
import { buildMemberPhotoPath, isValidMemberCode } from '../lib/member-utils';

describe('member validation', () => {
  it('accepts valid member code format', () => {
    expect(isValidMemberCode('GMP-026-001')).toBe(true);
    expect(isValidMemberCode('gmp-026-020')).toBe(true);
  });

  it('rejects invalid member code format', () => {
    expect(isValidMemberCode('GMP-26-001')).toBe(false);
    expect(isValidMemberCode('ABC-123')).toBe(false);
    expect(isValidMemberCode('')).toBe(false);
  });

  it('falls back to placeholder path when photo is missing', () => {
    expect(buildMemberPhotoPath()).toBe('/placeholder-member.svg');
    expect(buildMemberPhotoPath('ulum.webp')).toBe('/members/ulum.webp');
  });
});
