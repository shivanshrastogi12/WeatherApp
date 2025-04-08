"use client";

import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export default function ThemeToggle({
  isDarkMode,
  setIsDarkMode,
}: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`p-2 rounded-full ${
        isDarkMode
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-slate-200 hover:bg-blue-200"
      } transition-colors duration-200`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <FaSun className="h-5 w-5" />
      ) : (
        <FaMoon className="h-5 w-5" />
      )}
    </button>
  );
}
