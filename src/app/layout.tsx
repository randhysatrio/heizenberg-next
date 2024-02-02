// CORE
import type { Metadata } from "next";

// COMPONENTS
import { Toaster } from "react-hot-toast";

// FONTS
import { Inter } from "next/font/google";

// STYLES
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heizenberg | All your shopping needs",
  description:
    "This is website for Heizenberg, the most complete ecommerce on all universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
