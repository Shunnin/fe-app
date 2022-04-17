export type WeatherData = {
  id: number;
  forecast: string;
  description: string;
  icon: string;
  name: string;
  tempDetails: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};

export type DailyForecastData = {
  day: string;
  id: number;
  forecast: string;
  tempDetails: {
    tempMax: number;
    tempMin: number;
  };
};
