# Weather Dashboard ⛅

A modern, responsive weather application built with Next.js 15 that provides real-time weather information and 5-day forecasts for cities worldwide. Features a sleek UI with dark/light theme support and smart city search with recent searches functionality.

## ✨ Features

- **🌍 Global Weather Data**: Search weather for any city worldwide
- **📊 5-Day Forecast**: Detailed weather predictions with min/max temperatures
- **🌓 Dark/Light Theme**: Toggle between themes with system preference detection
- **🔍 Smart Search**: Recent searches with localStorage persistence (up to 5 cities)
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Real-time Updates**: Refresh weather data with one click
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **🌦️ Weather Icons**: Emoji-based weather representations for better UX
- **❌ Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **API**: [Open-Meteo](https://open-meteo.com/) (Free weather API)
- **Geocoding**: Open-Meteo Geocoding API
- **Build Tool**: Turbopack (Next.js 15)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivanshrastogi12/WeatherApp
   cd weather
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
weather/
├── src/
│   ├── app/
│   │   ├── (landingPage)/
│   │   │   └── page.tsx          # Main weather dashboard
│   │   ├── fonts.ts              # Geist font configurations
│   │   ├── globals.css           # Global styles and CSS variables
│   │   └── layout.tsx            # Root layout component
│   ├── components/
│   │   ├── ErrorComp.tsx         # Error display component
│   │   ├── Forecast.tsx          # 5-day weather forecast
│   │   ├── Loading.tsx           # Loading spinner component
│   │   ├── RecentSearch.tsx      # Recent searches functionality
│   │   ├── ThemeToggle.tsx       # Dark/light theme switcher
│   │   └── WeatherCard.tsx       # Current weather display
│   └── hook/
│       └── mapWeatherCodeToIcon.ts # Weather code to emoji mapping
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
├── postcss.config.mjs           # PostCSS configuration
└── README.md                    # Project documentation
```

## 🌐 API Integration

This project uses **Open-Meteo API** - a free, open-source weather API that requires no API key:

- **Weather Data**: [Open-Meteo Forecast API](https://open-meteo.com/en/docs)
- **Geocoding**: [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- **Rate Limits**: No authentication required, generous rate limits
- **Data**: Current weather, 5-day forecasts, humidity, wind speed

### API Endpoints Used:
- `https://geocoding-api.open-meteo.com/v1/search` - City coordinates lookup
- `https://api.open-meteo.com/v1/forecast` - Weather data and forecasts

## 🎯 Key Components

### WeatherCard
- Displays current weather conditions
- Shows temperature, humidity, wind speed
- Includes refresh functionality
- Responsive design with theme support

### Forecast
- 5-day weather forecast
- Min/max temperatures
- Weather condition icons and descriptions
- Grid layout for optimal viewing

### RecentSearches
- Stores last 5 searched cities
- Persistent storage using localStorage
- Quick access to previous searches

### ThemeToggle
- Dark/light mode switcher
- System preference detection
- Smooth transitions between themes

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints**:
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
- **Grid layouts** adapt to screen size
- **Touch-friendly** interface elements

## 🎨 Theme System

- **Light Theme**: Blue and white color scheme
- **Dark Theme**: Gray and dark background
- **System Detection**: Automatically detects user's system preference
- **Persistent**: Theme choice saved across sessions
- **Smooth Transitions**: CSS transitions for theme switching

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🌟 Features Breakdown

### Search Functionality
- Real-time city search with autocomplete suggestions
- Global city database through Open-Meteo geocoding
- Error handling for invalid city names

### Weather Display
- Current temperature with "feels like" information
- Humidity percentage
- Wind speed in km/h
- Weather condition descriptions
- Emoji-based weather icons

### Forecast System
- 5-day weather predictions
- Daily min/max temperatures
- Weather condition for each day
- Hover effects for better interaction

### Data Persistence
- Recent searches stored in localStorage
- Theme preference persistence
- Automatic data recovery on page reload

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Open-Meteo](https://open-meteo.com/) for providing free weather API
- [Vercel](https://vercel.com/) for the Geist font family
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

