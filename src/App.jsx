import { useState } from "react";
import { Container } from "@mui/material";

import Loader from "./Components/Loader";
import ErrorMsg from "./Components/ErrorMsg";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";

function App() {
  // State 
  const [city, setCity] = useState(""); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");   
  
  
  console.log(`My city is ${city}`)

  // API info from .env
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // From your .env
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"; //  do the import from .env

  // Fetch weather data
  const handleSearch = async () => {
    if (!city) {
      setError("Please enter a city name");
      
      return(<ErrorMsg></ErrorMsg>);
    }

    // Reset before fetching
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data); // Save data to state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <Loader />}

      {error && <ErrorMsg message={error} />}

   
      {weather && <WeatherCard data={weather} />}

    </Container>
  );
}

export default App;
