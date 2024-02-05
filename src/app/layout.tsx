// CORE
import type { Metadata } from "next";

// COMPONENTS
import { Toaster } from "react-hot-toast";

// FONTS
import { rubikThin, rubik, rubikBold, rubikExtraBold } from "./_fonts";

// STYLES
import "./globals.css";

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
      <body
        className={`${rubikThin.variable} ${rubik.variable} ${rubikBold.variable} ${rubikExtraBold.variable} font-rubik`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
