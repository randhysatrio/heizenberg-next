"use client";

import { AnimatePresence, Variant, motion } from "framer-motion";

// FRAMER MOTION VARIANTS
type SidebarVariants = Record<"open" | "close", Variant>;
const OVERLAY_VARIANTS: SidebarVariants = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
const SIDEBAR_VARIANTS: SidebarVariants = {
  open: {
    x: "0%",
  },
  close: (isLeft) => ({
    x: isLeft ? "-100%" : "100%",
  }),
};

type SidebarProps = {
  children: React.ReactNode;
  side?: "left" | "right";
  open: boolean;
  close: () => void;
};
export default function Sidebar({
  children,
  side = "left",
  open,
  close,
}: SidebarProps) {
  // CONDITIONS
  const isLeft = side === "left";

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial="close"
          animate="open"
          exit="close"
          variants={OVERLAY_VARIANTS}
          onClick={close}
          className={`fixed inset-0 z-[3000] flex bg-black bg-opacity-50 ${isLeft ? "justify-start" : "justify-end"}`}
        >
          <motion.aside
            custom={isLeft}
            variants={SIDEBAR_VARIANTS}
            transition={{ bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="h-fit w-fit"
          >
            {children}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
