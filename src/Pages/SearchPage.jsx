import { useState } from "react";
import { Typography, Container } from "@mui/material";

import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import WeatherCard from "../Components/WeatherCard";

function SearchPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"; // constant



  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        setError("City not found");
        return;
      }

      const data = await response.json();
      setWeather(data);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Weather Application
      </Typography>

      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />

      {loading && <Loader />}
      {error && <ErrorMsg message={error} />}
      {weather && <WeatherCard data={weather} />}
    </Container>
  );
}

export default SearchPage;
