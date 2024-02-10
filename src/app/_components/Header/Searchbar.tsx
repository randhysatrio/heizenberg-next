"use client";

// CORE
import { useState } from "react";

// COMPONENTS
import { AnimatePresence, motion } from "framer-motion";

// ICONS
import { FaSearch } from "react-icons/fa";

// LIBS
import useMeasure from "react-use-measure";

// CONSTANTS
import { MAIN_LAYOUT_ID } from "@/app/_config/constanst";

// INTERFACES
import type { SearchResult } from "@/app/_types/SearchResult";

export default function Searchbar({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  // KEYWORD STATES
  const [keyword, setKeyword] = useState("");

  // SUGGESTION STATES
  const hadSuggestions = searchResults.length > 0;
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);

  // ELEMENT MEASURE
  const [ref, { height }] = useMeasure();

  function clearSuggestion() {
    setActiveIdx(-1);
    setSuggestions([]);
  }

  function selectSuggestion() {
    if (activeIdx > -1) {
      setKeyword(suggestions[activeIdx].value);
      clearSuggestion();
    }
  }

  function pageDown() {
    if (activeIdx < suggestions.length - 1) {
      const currIdx = activeIdx + 1;
      setActiveIdx(currIdx);
      setKeyword(suggestions[currIdx].value);
    } else {
      setActiveIdx(0);
      setKeyword(suggestions[0].value);
    }
  }

  function pageUp() {
    if (activeIdx > 0) {
      const currIdx = activeIdx - 1;
      setActiveIdx(currIdx);
      setKeyword(suggestions[currIdx].value);
    } else {
      const lastIdx = suggestions.length - 1;
      setActiveIdx(lastIdx);
      setKeyword(suggestions[lastIdx].value);
    }
  }

  return (
    <search className="relative flex h-10 w-full w-full items-center sm:mr-auto sm:w-96 lg:w-[600px]">
      <input
        type="search"
        value={keyword}
        onFocus={() => {
          // Adding overlay to body;
          const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
          layout?.classList.add("body__overlay");

          if (hadSuggestions) {
            // Adding suggestions;
            setSuggestions(
              keyword
                ? searchResults.filter((r) =>
                    r.value
                      .trim()
                      .toLowerCase()
                      .includes(keyword.trim().toLowerCase()),
                  )
                : searchResults,
            );
            setActiveIdx(-1);
          }
        }}
        onBlur={() => {
          // Removing overlay to body;
          const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
          layout?.classList.remove("body__overlay");

          if (hadSuggestions) {
            clearSuggestion();
          }
        }}
        onChange={(e) => {
          setKeyword(e.target.value);

          if (hadSuggestions) {
            if (e.target.value) {
              setSuggestions(
                searchResults.filter((s) =>
                  s.value
                    .toLowerCase()
                    .trim()
                    .includes(e.target.value.toLowerCase().trim()),
                ),
              );
            } else {
              // On user clear keyword;
              setActiveIdx(-1);
              setSuggestions(searchResults);
            }
          }
        }}
        onKeyDown={(e) => {
          if (hadSuggestions) {
            if (e.code === "Escape") {
              const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
              layout?.classList.remove("body__overlay");

              return clearSuggestion();
            }
            if (e.code === "ArrowDown") {
              return pageDown();
            }
            if (e.code === "ArrowUp") {
              return pageUp();
            }
            if (e.code === "Enter") {
              return selectSuggestion();
            }
          }
        }}
        placeholder="Search item..."
        className="w-full rounded-bl-md rounded-tl-md p-2 ring-2 ring-inset ring-zinc-200 hover:ring-sky-300 focus:outline-none focus:ring-sky-300 lg:px-3"
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => selectSuggestion()}
        className="flex h-full cursor-pointer items-center gap-2 rounded-br-md rounded-tr-md bg-zinc-300 px-4 text-white hover:bg-amber-300 hover:text-yellow-100 disabled:pointer-events-none"
        disabled={!keyword}
      >
        <FaSearch className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
      </motion.button>

      <AnimatePresence mode="wait">
        <motion.article
          animate={{ height }}
          transition={{ bounce: 0 }}
          className="absolute top-[110%] z-10 w-full overflow-hidden"
        >
          <ul
            ref={ref}
            className="flex max-h-40 w-full flex-col overflow-hidden rounded-lg bg-white ring-1 ring-inset ring-gray-300"
          >
            {suggestions.map((r, idx) => (
              <li
                key={r.id}
                onMouseEnter={() => {
                  setActiveIdx(idx);
                  setKeyword(r.value);
                }}
                onMouseLeave={() => {
                  if (activeIdx > -1) {
                    setActiveIdx(-1);
                  }
                }}
                className={`flex w-full items-center justify-between px-2 py-2 text-sm lg:p-3 lg:text-base ${idx === activeIdx ? "bg-zinc-200" : idx !== activeIdx ? "" : "hover:bg-zinc-200"}`}
              >
                <p className="hover:cursor-pointer">{r.value}</p>
              </li>
            ))}
          </ul>
        </motion.article>
      </AnimatePresence>
    </search>
  );
}
