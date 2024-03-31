import type { APIRoute } from 'astro';
import { db, User } from 'astro:db';
import { encryptPassword } from '../../utils/functions';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { username, email, password } = await request.json();
    await db.insert(User).values({
      id: new Crypto().randomUUID(),
      username: username,
      email: email,
      password: await encryptPassword(password),
    });
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (e) {
    console.error(e);
    return new Response(null, { status: 500 });
  }
};
