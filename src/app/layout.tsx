// CORE
import { Metadata } from 'next';

// FONTS
import { rubikThin, rubik, rubikBold, rubikExtraBold } from './_fonts';

// STYLES
import './globals.css';

export const metadata: Metadata = {
  title: 'Heizenberg | All Your Electronic Needs',
  description:
    'Welcome to Heizenberg, the most complete electronic e-commerce in all multiverses',
  keywords: 'Heizenberg, PC, Personal Computer, Best Deals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikThin.variable} ${rubik.variable} ${rubikBold.variable} ${rubikExtraBold.variable} font-rubik`}
      >
        {children}
      </body>
    </html>
  );
}
