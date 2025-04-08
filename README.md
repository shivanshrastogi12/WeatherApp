# Weather App

## Tech Stack Used

- **Frontend**: NextJs
- **API**: OpenWeatherMap API
- **Styling**: Tailwind CSS

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/shivanshrastogi12/WeatherApp
cd WeatherApp
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## API Integration Details

- **API Used**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Rate Limits**:
  - 60 calls per minute
- **API Key**:
  - Obtain API key at [OpenWeatherMap](https://openweathermap.org/).
  - Add the key to the `.env` file as `NEXT_PUBLIC_OPENWEATHER_API_KEY`.
