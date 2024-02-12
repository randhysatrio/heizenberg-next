'use client';

// CORE
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// COMPONENTS
import { motion } from 'framer-motion';
import ButtonPrimary from '../Button/ButtonPrimary';
import Sidebar from '../Sidebar';

// LIBS
import { deleteCookie } from 'cookies-next';

// STORE
import { useAuthStore } from '@/app/_store/AuthStore';

// CONSTANTS
import { COOKIE_NAME } from '@/app/_config/constanst';

// INTERFACE
import type { AuthData } from '@/app/_types/Auth';

export default function Authentication({ userData }: { userData: AuthData }) {
  // ROUTER
  const router = useRouter();

  // COMPONENT STATES
  const [openSidebar, setOpenSidebar] = useState(false);
  function toggleSidebar() {
    return setOpenSidebar((c) => !c);
  }
  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 1024) {
        return setOpenSidebar(false);
      }
    }
    window.addEventListener('resize', closeOnResize);
    return () => {
      window.removeEventListener('resize', closeOnResize);
    };
  }, []);

  // AUTH STORE
  const { login, logout } = useAuthStore();
  useEffect(() => {
    if (userData) {
      login(userData);
    }
  }, [!!userData]);

  return (
    <>
      {userData ? (
        <>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleSidebar}
            className="flex cursor-pointer items-center gap-[6px] rounded-full sm:bg-zinc-100 sm:p-1 sm:pl-5 lg:gap-2 lg:p-[6px] lg:pl-5 lg:hover:bg-zinc-200/75"
          >
            <div className="hidden flex-col items-start sm:flex">
              <h3 className="text-xs leading-none">Logged in as,</h3>
              <h2 className="max-w-28 truncate font-rubik-bold text-sm lg:max-w-32 lg:text-base">
                {userData?.fullName}
              </h2>
            </div>
            <div className="relative">
              <div className="relative aspect-square h-9 overflow-hidden rounded-full sm:h-8 sm:border-none lg:h-10">
                <Image
                  src={userData.picture || '/images/default-profile.jpeg'}
                  alt={userData.fullName}
                  fill
                  className="object-cover"
                  sizes="34px"
                />
              </div>
              <span className="absolute right-[2px] top-[2px] h-2 w-2 rounded-full bg-sky-400 sm:hidden"></span>
            </div>
          </motion.button>

          <Sidebar open={openSidebar} close={toggleSidebar} side="right">
            <nav className="flex h-screen w-60 flex-col gap-5 bg-white px-4 py-10 sm:w-64 lg:w-72 lg:px-6">
              <section className="w-full font-rubik-bold">
                <h4 className="text-lg lg:text-xl">Welcome,</h4>
                <h3 className="truncate text-xl leading-none lg:text-3xl">
                  {userData?.fullName}
                </h3>
              </section>

              <ButtonPrimary
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  deleteCookie(COOKIE_NAME, { path: '/' });
                  logout();
                  toggleSidebar();

                  setTimeout(() => {
                    window.location.replace('/');
                  }, 800);
                }}
                className="w-full !bg-red-500"
              >
                Logout
              </ButtonPrimary>
            </nav>
          </Sidebar>
        </>
      ) : (
        <ButtonPrimary onClick={() => router.push('/login')}>
          Login
        </ButtonPrimary>
      )}
    </>
  );
}
