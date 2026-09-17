import { neon } from '@neondatabase/serverless';

interface Env { DATABASE_URL?: string }

export const onRequestGet = async (context: { params: { code?: string }; env: Env }) => {
  const code = String(context.params.code || '').toUpperCase().trim();

  if (!/^GMP-\d{3}-\d{3}$/.test(code)) {
    return Response.json({ error: 'Invalid member code' }, { status: 400 });
  }

  if (!context.env.DATABASE_URL) {
    return Response.json({ error: 'Database is not configured' }, { status: 503 });
  }

  try {
    const sql = neon(context.env.DATABASE_URL);
    const rows = await sql`
      SELECT
        member_code AS code,
        full_name AS name,
        nickname,
        role,
        division,
        joined_year AS joined,
        status,
        bio,
        instagram,
        photo_url AS photo
      FROM members
      WHERE member_code = ${code}
        AND is_public = TRUE
      LIMIT 1
    `;

    if (!rows.length) return Response.json({ error: 'Member not found' }, { status: 404 });

    return Response.json({ member: rows[0] }, {
      headers: { 'Cache-Control': 'public, max-age=60, s-maxage=300' }
    });
  } catch (error) {
    console.error('member lookup failed', error);
    return Response.json({ error: 'Unable to load member' }, { status: 500 });
  }
};
