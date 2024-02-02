"use client";

// CORE
import { useRouter } from "next/navigation";

// COMPONENTS
import { motion } from "framer-motion";

// STORE
import { useAuthStore } from "@/app/_store/AuthStore";

export default function Authentication() {
  // ROUTER
  const router = useRouter();

  // AUTH
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <motion.button onClick={() => router.push("/login")}>Login</motion.button>
    </>
  );
}
