'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
const { NEXT_PUBLIC_BACKEND_URL } = process.env;

export async function createGame(playerName) {
  const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/game/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ playerName }),
  });

  cookies().set(`blackjack-${playerName}`, response.headers.get('set-cookie'));

  revalidatePath('/');

  return await response.json();
}

export async function hit(playerName) {
  const cookieHeader = cookies().get(`blackjack-${playerName}`).value;
  const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/game/hit`, {
    method: 'POST',
    headers: {
      Cookie: cookieHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ playerName }),
  });

  revalidatePath('/');

  return await response.json();
}

export async function hold(playerName) {
  const cookieHeader = cookies().get(`blackjack-${playerName}`).value;
  const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/game/hold`, {
    method: 'POST',
    headers: {
      Cookie: cookieHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ playerName }),
  });

  revalidatePath('/');

  return await response.json();
}
