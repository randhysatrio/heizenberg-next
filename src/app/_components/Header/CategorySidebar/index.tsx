"use client";

// CORE
import { useState } from "react";

// COMPONENTS
import { motion } from "framer-motion";
import Sidebar from "../../Sidebar";
import CategorySidebarContent from "./CategorySidebarContent";

// ICONS
import { MdOutlineMenuOpen } from "react-icons/md";

export default function CategorySidebar() {
  // OPEN CLOSE SIDEBAR STATES
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    return setOpen((c) => !c);
  }

  return (
    <>
      <div className="h-full w-fit hover:bg-sky-300">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleOpen}
          className="lg:text-md flex h-full cursor-pointer items-center gap-1 px-2 text-sm text-white lg:px-3"
        >
          <MdOutlineMenuOpen className="h-5 w-5 lg:h-6 lg:w-6" />
          <span>Categories</span>
        </motion.button>
      </div>

      <Sidebar open={open} close={toggleOpen}>
        <CategorySidebarContent closeSidebar={toggleOpen} />
      </Sidebar>
    </>
  );
}
