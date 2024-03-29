import Link from 'next/link';

import Searchbar from './Searchbar';
import Authentication from './Authentication';
import HeaderMenus from './HeaderMenus';
import CategorySidebar from './CategorySidebar';

import { FaComputer } from 'react-icons/fa6';

import { ServerCookieExtractor } from '@/app/_utils/ServerCookieExtractor';

import { MOCK_SRCH_RESULTS as searchResults } from '@/app/_mockData/SearchResults';

export default function Header() {
  const { isLoggedIn, userData } = ServerCookieExtractor();

  return (
    <header className="fixed top-0 z-[2000] flex w-full flex-col bg-slate-50">
      <section className="flex h-16 w-full items-center justify-between gap-4 border-b bg-white px-3 py-2 sm:gap-0 sm:px-5 lg:h-20">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-2 text-zinc-700 hover:text-zinc-500 sm:mr-5"
        >
          <FaComputer className="h-6 w-6 cursor-pointer" />
          <h1 className="hidden font-rubik-bold text-2xl lg:inline">HZN</h1>
        </Link>

        <Searchbar searchResults={searchResults} />

        <HeaderMenus isLoggedIn={isLoggedIn} />

        <Authentication userData={userData} />
      </section>

      <section className="flex h-8 w-full items-center bg-sky-400 px-2 sm:px-3 lg:h-10">
        <CategorySidebar />
      </section>
    </header>
  );
}
