"use client";

import { motion } from "framer-motion";

export type TabItem = {
  id?: number | undefined;
  name: string;
};

type TabsProps = {
  tabId?: string | undefined;
  tabs: TabItem[];
  activeVal: string;
  onClickTab: (name: string) => void;
};
export default function Tabs({
  tabId,
  tabs,
  activeVal,
  onClickTab,
}: TabsProps) {
  return (
    <nav className="w-full overflow-x-auto">
      <ul className="flex w-fit items-center">
        {tabs.map((t) => {
          const isActive = t.name === activeVal;

          return (
            <li
              key={t.id || t.name}
              onClick={() => onClickTab(t.name)}
              className="group relative cursor-pointer px-3 py-2 hover:bg-zinc-100 lg:px-4"
            >
              <p
                className={`font-rubik-bold lg:text-lg ${isActive ? "text-black" : "text-black/65 group-hover:text-black"}`}
              >
                {t.name}
              </p>
              {isActive && (
                <motion.div
                  layoutId={tabId || "page-tabs"}
                  className="absolute bottom-0 left-0 h-[2px] w-full rounded-tl-md rounded-tr-md bg-sky-400"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
