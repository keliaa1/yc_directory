
'use client';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button className="text-red-600" onClick={() => signIn('github')}>
      Log in
    </button>
  );
}
