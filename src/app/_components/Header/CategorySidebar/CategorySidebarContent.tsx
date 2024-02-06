// CORE
import { useState } from "react";

// COMPONENTS
import { motion } from "framer-motion";

// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

// INTERFACES
import type { Category } from "@/app/_types/Category";

// CATEGORIES
const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Electronic",
    childCategory: [
      { id: 2, parentId: 1, name: "Camera" },
      { id: 3, parentId: 1, name: "Headphone" },
      { id: 4, parentId: 1, name: "Television" },
      { id: 5, parentId: 1, name: "Speaker" },
      { id: 6, parentId: 1, name: "Wearable Technology" },
    ],
  },
  {
    id: 7,
    name: "Computer",
    childCategory: [
      { id: 8, parentId: 2, name: "Processor" },
      { id: 9, parentId: 2, name: "Motherboard" },
      { id: 10, parentId: 2, name: "Graphic Card" },
      { id: 11, parentId: 2, name: "Memory" },
      { id: 12, parentId: 2, name: "Storage" },
    ],
  },
  {
    id: 13,
    name: "Gaming",
    childCategory: [
      { id: 14, parentId: 3, name: "Playstation" },
      { id: 15, parentId: 3, name: "Xbox" },
      { id: 16, parentId: 3, name: "Gaming Accessories" },
    ],
  },
];

type CategorySidebarContentProps = {
  closeSidebar: () => void;
};
export default function CategorySidebarContent({
  closeSidebar,
}: CategorySidebarContentProps) {
  // OPEN CLOSE STATES
  const [isShowing, setIsShowing] = useState(false);
  function toggleShowing() {
    return setIsShowing((c) => !c);
  }

  // SELECTED CATEGORY STATES
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);

  return (
    <div className="flex h-screen w-64 overflow-x-hidden bg-white shadow-md sm:w-72 lg:w-80">
      <motion.div
        animate={{ x: isShowing ? "-50%" : "0%" }}
        transition={{ bounce: 0 }}
        className="flex h-full w-fit min-w-[200%]"
      >
        <div className="relative flex h-full w-1/2 flex-col px-4 pt-20 sm:px-5 lg:px-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={closeSidebar}
            className="absolute right-3 top-4"
          >
            <IoCloseSharp className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          </motion.button>

          <section className="mb-10">
            <h5 className="font-rubik-bold text-2xl leading-none sm:text-3xl">
              Choose from
            </h5>
            <h2 className="font-rubik-extrabold text-3xl sm:text-4xl">
              Categories
            </h2>
          </section>

          <ul className="flex w-full flex-col gap-2 overflow-y-auto overscroll-contain">
            {CATEGORIES.map((c) => (
              <li
                key={c.id}
                onClick={() => {
                  setSelectedCategory(c);
                  toggleShowing();
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-1 rounded-md p-2 text-lg hover:bg-zinc-200 lg:px-3"
              >
                <h2 className="max-w-full truncate">{c.name}</h2>
                <MdOutlineChevronRight className="h-3 w-3" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full w-1/2 flex-col px-4 pt-6 sm:px-5 lg:px-6">
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowing}
            className="mb-6 flex cursor-pointer items-center gap-2 rounded-tl-md rounded-tr-md border-b border-zinc-500 p-2 hover:bg-zinc-200"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Return</span>
          </motion.div>
          <h2 className="font-rubik-extrabold mb-3 text-3xl lg:mb-4">
            {selectedCategory?.name}
          </h2>

          <ul className="flex w-full flex-col">
            {selectedCategory?.childCategory.map((c) => (
              <li
                key={c.id}
                onClick={closeSidebar}
                className="w-full cursor-pointer rounded-md p-2 hover:bg-zinc-200 sm:text-lg lg:px-3"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
