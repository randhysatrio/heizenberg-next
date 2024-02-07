"use client";

// CORE
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// COMPONENTS
import ButtonPrimary from "../Button/ButtonPrimary";
import Sidebar from "../Sidebar";

// LIBS
import { deleteCookie } from "cookies-next";

// STORE
import { useAuthStore } from "@/app/_store/AuthStore";

// CONSTANTS
import { COOKIE_NAME } from "@/app/_config/constanst";

// INTERFACE
import type { User } from "@/app/_types/User";

export default function Authentication({
  userData,
}: {
  userData: User | undefined;
}) {
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
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("resize", closeOnResize);
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
          <button onClick={toggleSidebar}>click me</button>

          <Sidebar open={openSidebar} close={toggleSidebar} side="right">
            <div className="flex h-screen w-60 flex-col bg-white p-4">
              <span>jambu</span>
              <button
                onClick={() => {
                  toggleSidebar();

                  // Give time to the sidebar for it to close;
                  setTimeout(() => {
                    deleteCookie(COOKIE_NAME, { path: "/" });
                    logout();
                    window.location.reload();
                  }, 1000);
                }}
              >
                Logout
              </button>
            </div>
          </Sidebar>
        </>
      ) : (
        <ButtonPrimary onClick={() => router.push("/login")}>
          Login
        </ButtonPrimary>
      )}
    </>
  );
}
