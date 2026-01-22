import { Typography } from "@mui/material";

function WeatherCard({ data }) {
    return (
        <Card sx={{ padding: 2}}>
           <Typography variant="h5">
            {data.name}, {data.sys.country}
           </Typography>

           <Typography>
             Temperature: {data.main.temp}
        
           </Typography>

           <Typorgraphy>
             Condition: {data.weather[0].main}
           </Typorgraphy>

           <Typorgraphy>
             Humidity: {data.main.humidity}%
           </Typorgraphy>

           <Typorgraphy>
            Wind: {data.wind.speed} km/h
           </Typorgraphy>

        </Card>
    );
}

export default WeatherCard;


