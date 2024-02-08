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
import type { AuthData } from "@/app/_types/Auth";

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
              <div>
                <h6>Welcome,</h6>
                <h3>{userData?.fullName}</h3>
              </div>
              <button
                onClick={() => {
                  deleteCookie(COOKIE_NAME, { path: "/" });
                  logout();
                  // Give time to the sidebar for it to close;
                  setTimeout(() => {
                    window.location.replace("/");
                  }, 800);
                  toggleSidebar();
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
