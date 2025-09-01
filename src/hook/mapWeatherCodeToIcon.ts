export function mapWeatherCodeToIcon(code: number): string {
    // Emoji-based icons instead of URLs
    if (code === 0) return "☀️"; // Clear sky
    if (code === 1) return "🌤️"; // Mainly clear
    if (code === 2) return "⛅";  // Partly cloudy
    if (code === 3) return "☁️";  // Overcast

    if ([45, 48].includes(code)) return "🌫️"; // Fog

    if ([51, 53, 55].includes(code)) return "🌦️"; // Drizzle
    if ([56, 57].includes(code)) return "🌧️❄️"; // Freezing drizzle

    if ([61, 63].includes(code)) return "🌧️";   // Slight/Moderate rain
    if (code === 65) return "🌧️🌧️";            // Heavy rain
    if ([66, 67].includes(code)) return "🌧️❄️"; // Freezing rain

    if ([71, 73].includes(code)) return "🌨️";   // Light/Moderate snow
    if (code === 75) return "❄️❄️";             // Heavy snow
    if (code === 77) return "🌨️";               // Snow grains

    if ([80, 81].includes(code)) return "🌦️";   // Rain showers
    if (code === 82) return "🌧️🌧️";            // Violent rain showers
    if (code === 85) return "🌨️";               // Snow showers
    if (code === 86) return "❄️❄️";             // Heavy snow showers

    if (code === 95) return "⛈️";               // Thunderstorm
    if ([96, 99].includes(code)) return "⛈️🌩️"; // Thunderstorm with hail

    return "❓"; // Unknown
}

export function mapWeatherCodeToDescription(code: number): string {
    const mapping: Record<number, string> = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        77: "Snow grains",
        80: "Rain showers",
        81: "Heavy rain showers",
        82: "Violent rain showers",
        85: "Snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Heavy thunderstorm with hail",
    };
    return mapping[code] ?? "Unknown";
}
