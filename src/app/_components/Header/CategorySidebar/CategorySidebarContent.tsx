// CORE
import { useState } from 'react';

// COMPONENTS
import { motion } from 'framer-motion';

// ICONS
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineChevronRight } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';

// INTERFACES
import type { Category } from '@/app/_types/Category';

// MOCK DATA
import { MOCK_CATEGORIES } from '@/app/_mockData/Categories';

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
        animate={{ x: isShowing ? '-50%' : '0%' }}
        transition={{ bounce: 0 }}
        className="flex h-full w-fit min-w-[200%]"
      >
        <nav className="relative flex h-full w-1/2 flex-col px-4 pt-20 sm:px-5 lg:px-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={closeSidebar}
            className="absolute right-3 top-4 lg:rounded-md lg:p-1 lg:hover:bg-zinc-100"
          >
            <IoCloseSharp className="h-6 w-6 cursor-pointer sm:h-8 sm:w-8" />
          </motion.button>

          <section className="mb-10">
            <h5 className="font-rubik-bold text-2xl leading-none sm:text-3xl">
              Browse from
            </h5>
            <h2 className="font-rubik-extrabold text-3xl sm:text-4xl">
              Categories
            </h2>
          </section>

          <ul className="flex w-full flex-col gap-2 overflow-y-auto overscroll-contain">
            {MOCK_CATEGORIES.map((c) => (
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
        </nav>
        <nav className="flex h-full w-1/2 flex-col px-4 pt-6 sm:px-5 lg:px-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowing}
            className="mb-6 flex cursor-pointer items-center gap-2 rounded-tl-md rounded-tr-md border-b border-zinc-500 p-2 hover:bg-zinc-200"
          >
            <FaArrowLeft className="h-3 w-3" />
            <span>Return</span>
          </motion.button>
          <h2 className="mb-3 font-rubik-extrabold text-3xl lg:mb-4">
            {selectedCategory?.name}
          </h2>

          <ul className="flex w-full flex-col">
            {selectedCategory?.subcategory?.map((c) => (
              <li
                key={c.id}
                onClick={closeSidebar}
                className="w-full cursor-pointer rounded-md p-2 hover:bg-zinc-200 sm:text-lg lg:px-3"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
