'use client';

import { motion } from 'framer-motion';

import { FcGoogle } from 'react-icons/fc';

type GoogleLoginButtonProps = {
  as?: 'login' | 'signup';
};
export default function GoogleLoginButton({
  as = 'login',
}: GoogleLoginButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white font-rubik-bold text-sm hover:bg-yellow-300/25 lg:h-11"
    >
      <FcGoogle className="h-4 w-4 lg:h-5 lg:w-5" />
      <span>{as === 'login' ? 'Login' : 'Sign-up'} with Google</span>
    </motion.button>
  );
}
