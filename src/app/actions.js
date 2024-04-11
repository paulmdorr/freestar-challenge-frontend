'use server';

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

  revalidatePath('/');

  return await response.json();
}
