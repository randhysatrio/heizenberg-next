import { Rubik } from 'next/font/google';

export const rubikThin = Rubik({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-rubik-thin',
});

export const rubik = Rubik({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik',
});

export const rubikBold = Rubik({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-rubik-bold',
});

export const rubikExtraBold = Rubik({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rubik-extrabold',
});
