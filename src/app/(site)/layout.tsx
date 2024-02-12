// COMPONENTS
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { Toaster } from 'react-hot-toast';

// CONSTANTS
import { MAIN_LAYOUT_ID } from '../_config/constanst';

export default function RootSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      id={MAIN_LAYOUT_ID}
      className="relative flex flex-col pt-24 lg:pt-[7.5rem]"
    >
      <Header />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
}
