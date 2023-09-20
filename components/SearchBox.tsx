"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5 py-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
        placeholder="Search keywords..."
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
