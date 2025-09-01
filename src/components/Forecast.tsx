import { mono } from "@/app/fonts";
import { mapWeatherCodeToDescription, mapWeatherCodeToIcon } from "@/hook/mapWeatherCodeToIcon";

interface ForecastProps {
  forecastData: {
    daily: {
      time: string[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      weathercode: number[];
    };
  };
  isDarkMode: boolean;
}

export default function Forecast({ forecastData, isDarkMode }: ForecastProps) {
  if (!forecastData || !forecastData.daily) return null;

  const days = forecastData.daily.time.slice(0, 5).map((date, idx) => ({
    date,
    max: forecastData.daily.temperature_2m_max[idx],
    min: forecastData.daily.temperature_2m_min[idx],
    code: forecastData.daily.weathercode[idx],
  }));

  return (
    <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {days.map((day) => {
          const weekday = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" });
          return (
            <div key={day.date} className={`p-4 rounded-lg text-center ${isDarkMode ? "bg-gray-700" : "bg-slate-200"} transition-transform duration-300 hover:scale-105`}>
              <p className={`font-medium ${mono.className}`}>{weekday}</p>
              <span className="text-3xl">{mapWeatherCodeToIcon(day.code)}</span>
              <p className="text-xl font-bold">{Math.round(day.max)}°C</p>
              <p className={`text-sm ${mono.className} ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {mapWeatherCodeToDescription(day.code)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
