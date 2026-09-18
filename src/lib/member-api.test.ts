import { beforeEach, describe, expect, it, vi } from 'vitest';
import { neon } from '@neondatabase/serverless';
import { onRequestGet } from '../../functions/api/members/[code]';

vi.mock('@neondatabase/serverless', () => ({ neon: vi.fn() }));

describe('public member API status', () => {
  const lookup = vi.fn();
  const context = { params: { code: 'GMP-026-001' }, env: { DATABASE_URL: 'test-only' } };

  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(neon).mockReturnValue(lookup as ReturnType<typeof neon>);
  });

  it('rejects invalid IDs without querying the database', async () => {
    const response = await onRequestGet({ ...context, params: { code: 'invalid' } });
    expect(response.status).toBe(400);
    expect(neon).not.toHaveBeenCalled();
  });

  it('reports missing configuration as unavailable', async () => {
    const response = await onRequestGet({ ...context, env: {} });
    expect(response.status).toBe(503);
    expect(neon).not.toHaveBeenCalled();
  });

  it('distinguishes an uninitialized database from an unknown member', async () => {
    lookup.mockRejectedValue({ code: '42P01' });
    const response = await onRequestGet(context);
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ code: 'MEMBER_SCHEMA_MISSING' });
  });

  it('returns 404 only when a completed lookup has no member', async () => {
    lookup.mockResolvedValue([]);
    expect((await onRequestGet(context)).status).toBe(404);
  });

  it('reports missing profile columns as an incomplete schema', async () => {
    lookup.mockRejectedValue({ code: '42703' });
    const response = await onRequestGet(context);
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ code: 'MEMBER_SCHEMA_MISSING' });
  });

  it('returns a public member and cache policy after a successful lookup', async () => {
    const member = { code: 'GMP-026-001', name: 'Member' };
    lookup.mockResolvedValue([member]);
    const response = await onRequestGet(context);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ member });
    expect(response.headers.get('Cache-Control')).toContain('s-maxage=300');
  });

  it('keeps other database failures separate from member-not-found', async () => {
    lookup.mockRejectedValue({ code: '08006' });
    expect((await onRequestGet(context)).status).toBe(500);
  });
});
