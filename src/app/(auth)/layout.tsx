// FONTS
import { rubikThin, rubik, rubikBold, rubikExtraBold } from "../_fonts";

// STYLES
import "@/app/globals.css";

export default function RootAuthLayout({
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
