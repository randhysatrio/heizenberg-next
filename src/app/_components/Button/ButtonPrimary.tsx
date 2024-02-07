"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function ButtonPrimary({
  children,
  className,
  ...props
}: HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ filter: `brightness(1.1)` }}
      {...props}
      className={`font-rubik-bold rounded-md bg-sky-400 px-4 py-2 text-white shadow-sm sm:px-6 lg:px-10 lg:text-lg ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );
}
