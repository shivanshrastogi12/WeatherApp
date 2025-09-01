"use client";

import { mono } from "@/app/fonts";
import { IoMdRefresh } from "react-icons/io";

interface WeatherCardProps {
  weatherData: {
    name: string;
    main: { temp: number; humidity: number };
    weather: { icon: string; description: string }[];
    wind: { speed: number };
    sys: { country: string };
  };
  onRefresh: () => void;
  isDarkMode: boolean;
}

export default function WeatherCard({
  weatherData,
  onRefresh,
  isDarkMode,
}: WeatherCardProps) {
  if (!weatherData) return null;

  const {
    name,
    main: { temp, humidity },
    weather,
    wind,
    sys: { country },
  } = weatherData;

  const weatherIcon = weather[0].icon;
  const weatherDescription = weather[0].description;
  const windSpeed = wind.speed.toFixed(1);

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-300`}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">
              {name}, {country}
            </h2>
            <button
              onClick={onRefresh}
              className="ml-3 p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              aria-label="Refresh weather data"
            >
              <IoMdRefresh className="h-5 w-5 text-blue-500" />
            </button>
          </div>
          <p
            className={`text-lg ${isDarkMode ? "text-fuchsia-400" : "text-fuchsia-600"
              } ${mono.className}`}
          >
            {weatherDescription}
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-20 h-20 flex items-center justify-center text-5xl">
            {weatherIcon}
          </div>
          <span className="text-4xl font-bold ml-2">{Math.round(temp)}°C</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div
          className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-slate-200"
            }`}
        >
          <p
            className={`text-sm ${mono.className} ${isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
          >
            Humidity
          </p>
          <p className="text-xl font-semibold">{humidity}%</p>
        </div>

        <div
          className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-slate-200"
            }`}
        >
          <p
            className={`text-sm ${mono.className} ${isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
          >
            Wind Speed
          </p>
          <p className="text-xl font-semibold">{windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
}
