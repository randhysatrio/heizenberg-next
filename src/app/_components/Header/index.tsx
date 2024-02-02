import Authentication from "./Authentication";

export default function Header() {
  return (
    <header className="fixed top-0 z-[2000] flex h-14 w-full items-center justify-between border-b bg-white p-2 sm:h-16 lg:h-20 lg:px-4">
      <h1>i am a header</h1>

      <Authentication />
    </header>
  );
}
