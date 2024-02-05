// COMPONENTS
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col pt-14 sm:pt-16 lg:pt-20">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
