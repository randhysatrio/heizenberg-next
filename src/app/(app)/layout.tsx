// CORE
import type { Metadata } from "next";

// COMPONENTS
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { Toaster } from "react-hot-toast";

// FONTS
import { rubikThin, rubik, rubikBold, rubikExtraBold } from "@/app/_fonts";

// STYLES
import "@/app/globals.css";

// CONSTANTS
import { MAIN_LAYOUT_ID } from "../_config/constanst";

export const metadata: Metadata = {
  title: "Heizenberg | All your Electronic needs",
  description:
    "Welcome to Heizenberg, the most complete electronic e-commerce in all multiverses",
  keywords: "Heizenberg, PC, Personal Computer, Best Deals",
};

export default function RootAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikThin.variable} ${rubik.variable} ${rubikBold.variable} ${rubikExtraBold.variable} font-rubik`}
      >
        <main
          id={MAIN_LAYOUT_ID}
          className="relative flex flex-col pt-24 lg:pt-[7.5rem]"
        >
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
