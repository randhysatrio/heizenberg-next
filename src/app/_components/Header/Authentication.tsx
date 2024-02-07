"use client";

// CORE
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// COMPONENTS
import ButtonPrimary from "../Button/ButtonPrimary";
import Sidebar from "../Sidebar";

// STORE
import { useAuthStore } from "@/app/_store/AuthStore";

export default function Authentication() {
  // ROUTER
  const router = useRouter();

  // AUTH
  const { isLoggedIn } = useAuthStore();

  // COMPONENT STATES
  const [openSidebar, setOpenSidebar] = useState(false);
  function toggleSidebar() {
    return setOpenSidebar((c) => !c);
  }
  useEffect(() => {
    function closeSidebar() {
      if (window.innerWidth >= 1024) {
        return setOpenSidebar(false);
      }
    }
    window.addEventListener("resize", closeSidebar);
    return () => {
      window.removeEventListener("resize", closeSidebar);
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <button onClick={toggleSidebar}>click me</button>

          <Sidebar open={openSidebar} close={toggleSidebar}>
            <div className="flex h-screen w-60 flex-col bg-white p-4">
              <span>jambu</span>
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
