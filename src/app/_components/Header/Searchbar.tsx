"use client";

// CORE
import { useState } from "react";

// ICONS
import { FaSearch } from "react-icons/fa";

// CONSTANTS
import { MAIN_LAYOUT_ID } from "@/app/_config/constanst";

export default function Searchbar() {
  // KEYWORD STATES
  const [keyword, setKeyword] = useState("");

  return (
    <search
      onFocus={() => {
        // Adding overlay to body;
        const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
        layout?.classList.add("body__overlay");
      }}
      onBlur={() => {
        // Removing overlay to body;
        const layout = document.querySelector(`#${MAIN_LAYOUT_ID}`);
        layout?.classList.remove("body__overlay");
      }}
      className="w-full sm:mr-auto sm:w-96 lg:w-[600px]"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (keyword) {
            alert(keyword);
          }
        }}
        className="flex h-10 w-full items-center"
      >
        <input
          type="search"
          placeholder="Search item..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full rounded-bl-md rounded-tl-md p-2 ring-2 ring-inset ring-zinc-200 hover:ring-sky-300 focus:outline-none focus:ring-sky-300 lg:px-3"
        />
        <button
          type="submit"
          className="flex h-full cursor-pointer items-center gap-2 rounded-br-md rounded-tr-md bg-zinc-300 px-4 text-white hover:bg-yellow-300 hover:text-yellow-800"
        >
          <FaSearch className="h-4 w-4" />
          <span className="hidden lg:inline">Search</span>
        </button>
      </form>
    </search>
  );
}
