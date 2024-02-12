import { Rubik } from 'next/font/google';

export const rubikThin = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
  variable: '--font-rubik-thin',
});

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rubik',
});

export const rubikBold = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-rubik-bold',
});

export const rubikExtraBold = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
  variable: '--font-rubik-extrabold',
});
