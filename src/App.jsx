import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";


import Loader from "./Components/Loader";
import ErrorMsg from "./Components/ErrorMsg";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import axios from "axios";
import bgImage from "./assets/bg.jpg";


function App() 

{
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
  const handleSearch = async () => { //handleSearch created in a App and sent it for the SearchBar as a props. 

    if (!city)
       {

      setError("Please enter a city name");

       return;
       }
       if (loading) return;

  // Reset before fetching
    setLoading(true);
    setError("");
    setWeather(null);
   
    try {
      const response = await axios.get (
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
    
      const data =  response.data;

      setWeather(data); // Save data to state
    } 
    catch (err) 
    {
      setError(err.message);
    } 
    finally
    {
      setLoading(false);
    }
  };
return (
  <Box
    sx={{
      position: "fixed",
      inset: 0,
      minHeight: "100vh",
      width: "100%",
      overFlow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <Container maxWidth="sm" disableGutters>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        color="white"
      >
      Weather Application
      </Typography>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <Loader />}
      {error && <ErrorMsg message={error} />}
      {weather && <WeatherCard data={weather} />}

      {!weather && !loading && !error && (
        <Typography align="center" color="white">
          Search for a city to view weather details
        </Typography>
      )}
    </Container>
  </Box>
);
}
export default App;
