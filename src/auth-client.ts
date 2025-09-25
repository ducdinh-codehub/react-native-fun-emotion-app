import { createAuthClient } from 'better-auth/client';

export const { useSession, signIn, signOut, signUp, getSession } =
  createAuthClient({ baseURL: process.env.BETTER_AUTH_URL, redirectTo: '/' });
