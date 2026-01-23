import { Card, CardContent, Typography } from "@mui/material";

function WeatherCard({ data }==) {
  
   if (!data || !data.main || !data.weather){

    return null;
   }
    return (
        <Card sx={{ padding: 2}}>
           <Typography variant="h5">
            {data.name}, {data.sys.country}
           </Typography>

           <Typography>
             Temperature: {data.main.temp}
        
           </Typography>

           <Typography>
             Condition: {data.weather[0].main}
           </Typography>

           <Typography>
             Humidity: {data.main.humidity}%
           </Typography>

           <Typography>
            Wind: {data.wind.speed} km/h
           </Typography>

           <Typography>
            Sea_Level: {data.main.sea_level}
           </Typography>

           <Typography>
            Country: {data.sys.country}
           </Typography>

        </Card>
    );
}

export default WeatherCard;


