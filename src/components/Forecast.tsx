import { mono } from "@/app/fonts";
import Image from "next/image";

interface ForecastProps {
  forecastData: {
    list: {
      dt: number;
      main: { temp: number };
      weather: { icon: string; description: string }[];
    }[];
  };
  isDarkMode: boolean;
}

export default function Forecast({ forecastData, isDarkMode }: ForecastProps) {
  if (!forecastData || !forecastData.list) {
    return null;
  }

  const dailyForecasts = forecastData.list
    .filter((forecast) => {
      const forecastDate = new Date(forecast.dt * 1000);
      const hours = forecastDate.getHours();
      return hours >= 11 && hours <= 13;
    })
    .slice(0, 5);

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {dailyForecasts.map((forecast) => {
          const date = new Date(forecast.dt * 1000);
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const temp = Math.round(forecast.main.temp);
          const icon = forecast.weather[0].icon;
          const description = forecast.weather[0].description;

          return (
            <div
              key={forecast.dt}
              className={`p-4 rounded-lg text-center ${
                isDarkMode ? "bg-gray-700" : "bg-slate-200"
              } transition-transform duration-300 hover:scale-105`}
            >
              <p className={`font-medium ${mono.className}`}>{day}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt={description}
                width={48}
                height={48}
                priority
                className="w-12 h-12 mx-auto"
              />
              <p className="text-xl font-bold">{temp}°C</p>
              <p
                className={`text-sm capitalize ${mono.className} ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
