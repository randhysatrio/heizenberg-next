"use client";

// CORE
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// COMPONENTS
import { motion } from "framer-motion";
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
          <motion.button onClick={toggleSidebar}>click me</motion.button>

          <Sidebar open={openSidebar} close={toggleSidebar}>
            <div className="flex h-screen w-60 flex-col bg-white p-4">
              <span>jambu</span>
            </div>
          </Sidebar>
        </>
      ) : (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ filter: `brightness(1.05)` }}
          onClick={() => router.push("/login")}
          className="font-rubik-bold shdaow-sm rounded-md bg-sky-400 px-4 py-2 text-white sm:px-6 lg:px-10 lg:text-lg"
        >
          Login
        </motion.button>
      )}
    </>
  );
}
