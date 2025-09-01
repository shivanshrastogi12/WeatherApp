"use client";

import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

import WeatherCard from "@/components/WeatherCard";
import Forecast from "@/components/Forecast";
import RecentSearches from "@/components/RecentSearch";
import ThemeToggle from "@/components/ThemeToggle";
import LoadingSpinner from "@/components/Loading";
import ErrorComp from "@/components/ErrorComp";

export default function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<{
    name: string;
    main: { temp: number; humidity: number };
    weather: { icon: string; description: string }[];
    wind: { speed: number };
    sys: { country: string };
  } | null>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Fetch weather and forecast data for a given city
  const fetchWeatherData = async (cityName: string) => {
    if (!cityName) return;

    setLoading(true);
    setError(null);

    try {
      // Step 1: Get coordinates from geocoding API
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      if (!geoRes.ok) {
        throw new Error("Failed to fetch location data. Please try again later.");
      }

      const locationData = await geoRes.json();
      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found. Please try another.");
      }

      const latitude = locationData.results[0].latitude.toFixed(2);
      const longitude = locationData.results[0].longitude.toFixed(2);
      const country = locationData.results[0].country;

      // Step 2: Fetch weather + forecast
      const url = new URL("https://api.open-meteo.com/v1/forecast");
      url.searchParams.set("latitude", latitude.toString());
      url.searchParams.set("longitude", longitude.toString());
      url.searchParams.set(
        "current",
        "temperature_2m,wind_speed_10m,relative_humidity_2m"
      );
      url.searchParams.set(
        "daily",
        "temperature_2m_max,temperature_2m_min,weathercode"
      );
      url.searchParams.set("forecast_days", "5");

      url.searchParams.set("temperature_unit", "celsius");
      url.searchParams.set("wind_speed_unit", "kmh");

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();

      // Step 3: Map Open-Meteo current -> weatherData format
      const current = data.current;
      const mappedWeather = {
        name: cityName,
        main: {
          temp: current.temperature_2m,
          humidity: current.relative_humidity_2m,
        },
        weather: [
          {
            icon: "🌤️",
            description: "Current weather",
          },
        ],
        wind: {
          speed: current.wind_speed_10m,
        },
        sys: {
          country: country || "",
        },
      };
      setWeatherData(mappedWeather);

      // Step 4: Set forecastData (hourly data for 5 days)
      setForecastData({
        daily: {
          time: data.daily.time,
          temperature_2m_max: data.daily.temperature_2m_max,
          temperature_2m_min: data.daily.temperature_2m_min,
          weathercode: data.daily.weathercode,
        },
      });


      updateRecentSearches(cityName);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const updateRecentSearches = (cityName: string) => {
    const updatedSearches = [
      cityName,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== cityName.toLowerCase()
      ),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  const handleRecentSearchClick = (cityName: string) => {
    setCity(cityName);
    fetchWeatherData(cityName);
  };

  const handleRefresh = () => {
    if (weatherData) {
      fetchWeatherData(weatherData.name);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
        }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Weather Dashboard</h1>
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div
              className={`p-6 rounded-lg shadow-md mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
            >
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className={`w-full p-3 pr-10 rounded-lg border ${isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
                  >
                    <IoSearchSharp className="h-5 w-5" />
                  </button>
                </div>
              </form>

              <RecentSearches
                searches={recentSearches}
                onSearchClick={handleRecentSearchClick}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorComp message={error} isDarkMode={isDarkMode} />
            ) : weatherData ? (
              <div className="space-y-6">
                <WeatherCard
                  weatherData={weatherData}
                  onRefresh={handleRefresh}
                  isDarkMode={isDarkMode}
                />

                {forecastData && (
                  <Forecast forecastData={forecastData} isDarkMode={isDarkMode} />
                )}
              </div>
            ) : (
              <div
                className={`p-12 rounded-lg shadow-md text-center ${isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
              >
                <h2 className="text-xl font-semibold mb-2">
                  Welcome to Weather Dashboard
                </h2>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  Search for a city to see the current weather and forecast
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
