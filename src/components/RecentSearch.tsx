"use client";

import { mono } from "@/app/fonts";

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (city: string) => void;
  isDarkMode: boolean;
}

export default function RecentSearches({
  searches,
  onSearchClick,
  isDarkMode,
}: RecentSearchesProps) {
  if (!searches || searches.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSearchClick(city)}
            className={`px-3 py-1 rounded-full ${mono.className} text-sm ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-slate-200 hover:bg-blue-200"
            } transition-colors duration-200`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
