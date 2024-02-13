'use client';

// CORE
import { useCallback, useEffect, useRef, useState } from 'react';

// COMPONENTS
import { AnimatePresence, motion } from 'framer-motion';

// ICONS
import { FaRegClock, FaSearch } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

// LIBS
import useMeasure from 'react-use-measure';

// STORE
import { useAuthStore } from '@/app/_store/AuthStore';

// UTILITES
import { dateFormatFromUnix } from '@/app/_utils/dateFormat';

// CONSTANTS
import { MAIN_LAYOUT_ID } from '@/app/_config/constanst';

// INTERFACES
import type { SearchResult } from '@/app/_types/SearchResult';

export default function Searchbar({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  // AUTH STORE
  const { isLoggedIn } = useAuthStore();

  // KEYWORD STATES
  const [keyword, setKeyword] = useState('');

  // SUGGESTION STATES
  const shouldShowSuggestions = isLoggedIn && searchResults.length > 0;
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);

  // ELEMENT REF
  const elementRef = useRef<HTMLElement>(null);

  // ELEMENT MEASURE
  const [ulRef, { height }] = useMeasure();

  const handleOverlay = useCallback(function (type: 'add' | 'remove') {
    const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
    if (type === 'add') {
      layout?.classList.add('body__overlay');
    } else {
      layout?.classList.remove('body__overlay');
    }
  }, []);

  const clearSuggestion = useCallback(function () {
    setActiveIdx(-1);
    setSuggestions([]);
  }, []);

  function selectSuggestion() {
    if (activeIdx > -1) {
      setKeyword(suggestions[activeIdx].value);
      clearSuggestion();
    }
  }

  function pageUp() {
    setActiveIdx(0);
  }

  function pageDown() {
    setActiveIdx(suggestions.length - 1);
  }

  function scrollDown() {
    if (activeIdx < suggestions.length - 1) {
      const currIdx = activeIdx + 1;
      setActiveIdx(currIdx);
      setKeyword(suggestions[currIdx].value);
    } else {
      setActiveIdx(0);
      setKeyword(suggestions[0].value);
    }
  }

  function scrollUp() {
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

  useEffect(() => {
    function outsideClicked(e: MouseEvent) {
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target as Node)
      ) {
        // Removing overlay and clearing suggestions on click outside;
        handleOverlay('remove');
        clearSuggestion();
      }
    }
    if (elementRef.current) {
      window.addEventListener('mousedown', outsideClicked);
    }
    return () => {
      if (elementRef.current) {
        window.removeEventListener('mousedown', outsideClicked);
      }
    };
  }, [elementRef.current]);

  return (
    <search
      ref={elementRef}
      className="relative flex h-10 w-full items-center rounded-lg p-1 ring-1 ring-inset ring-zinc-200 has-[div:focus-within]:ring-sky-300 sm:mr-auto sm:w-96 lg:h-12 lg:w-[600px] lg:p-[6px]"
    >
      <div className="relative w-full">
        <input
          type="search"
          value={keyword}
          onFocus={() => {
            handleOverlay('add');

            if (shouldShowSuggestions) {
              // Adding suggestions;
              setSuggestions(
                keyword
                  ? searchResults.filter((r) =>
                      r.value
                        .trim()
                        .toLowerCase()
                        .includes(keyword.trim().toLowerCase())
                    )
                  : searchResults
              );
              setActiveIdx(-1);
            }
          }}
          onChange={(e) => {
            setKeyword(e.target.value);

            if (shouldShowSuggestions) {
              if (e.target.value) {
                setSuggestions(
                  searchResults.filter((s) =>
                    s.value
                      .toLowerCase()
                      .trim()
                      .includes(e.target.value.toLowerCase().trim())
                  )
                );
              } else {
                // On user clear keyword;
                setActiveIdx(-1);
                setSuggestions(searchResults);
              }
            }
          }}
          onKeyDown={(e) => {
            if (shouldShowSuggestions) {
              if (e.code === 'Escape') {
                handleOverlay('remove');
                return clearSuggestion();
              }
              if (e.code === 'ArrowDown') {
                return scrollDown();
              }
              if (e.code === 'ArrowUp') {
                return scrollUp();
              }
              if (e.code === 'PageDown') {
                return pageDown();
              }
              if (e.code === 'PageUp') {
                return pageUp();
              }
              if (e.code === 'Enter') {
                return selectSuggestion();
              }
            }
          }}
          placeholder="Search item..."
          className="h-full w-full px-1 placeholder:text-gray-200 focus:outline-none sm:px-2"
        />

        <AnimatePresence mode="wait">
          <motion.article
            animate={{ height }}
            transition={{ bounce: 0 }}
            className="absolute left-0 top-[135%] z-10 w-full overflow-hidden rounded-md bg-white ring-1 ring-inset ring-gray-300 sm:rounded-lg lg:top-[155%]"
          >
            <ul ref={ulRef} className="max-h-40 w-full">
              {suggestions.map((r, idx) => (
                <motion.li
                  key={r.id}
                  layout
                  layoutScroll
                  transition={{ layout: { bounce: 0 } }}
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                  }}
                  onMouseLeave={() => {
                    setActiveIdx(-1);
                  }}
                  onClick={(e) => {
                    if (e.defaultPrevented) {
                      return;
                    }
                    selectSuggestion();
                  }}
                  className={`flex w-full cursor-default items-center justify-between gap-1 px-2 py-2 text-sm lg:p-3 lg:text-base ${idx === activeIdx ? 'bg-zinc-200' : idx === -1 ? 'hover:bg-zinc-200' : ''}`}
                >
                  <p className="min-w-0 max-w-full cursor-pointer truncate text-xs sm:text-sm lg:text-base">
                    {r.value}
                  </p>

                  <div className="flex items-center gap-1">
                    <FaRegClock className="hidden h-3 w-3 text-black/50 lg:inline" />
                    <span className="hidden whitespace-nowrap text-xs text-black/50 sm:inline">
                      {dateFormatFromUnix(r.createdAt)}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        // Mock delete function;
                        e.preventDefault();
                        setSuggestions((c) => c.filter((s) => s.id !== r.id));
                      }}
                    >
                      <FaRegTrashCan className="h-2 w-2 cursor-pointer text-black/75 hover:text-black lg:ml-1 lg:h-3 lg:w-3" />
                    </motion.button>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => selectSuggestion()}
        className="flex h-full cursor-pointer items-center gap-2 rounded-md bg-zinc-300 px-4 text-white hover:bg-sky-300 hover:text-yellow-100 disabled:pointer-events-none disabled:bg-zinc-200 sm:px-6"
        disabled={!keyword}
      >
        <FaSearch className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
      </motion.button>
    </search>
  );
}
