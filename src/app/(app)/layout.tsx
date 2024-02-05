// COMPONENTS
import Header from "../_components/Header";
import Footer from "../_components/Footer";

// CONSTANTS
import { MAIN_LAYOUT_ID } from "../_config/constanst";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      id={MAIN_LAYOUT_ID}
      className="relative flex flex-col pt-24 lg:pt-[7.5rem]"
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
}
