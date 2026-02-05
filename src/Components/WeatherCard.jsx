import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

function WeatherCard({ data }) {
  if (!data || !data.main || !data.weather) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 120, rotate: -8, scale: 0.85,

      }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1,

      }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.8,

      }}

      style={{ marginTop: 50 }}
    >
      <Card
        component={motion.div}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        sx={{
          position: "center",
          maxWidth: 420,
          margin: "50px auto 0 auto",
          borderRadius: 4,
          boxShadow: 6,
          background: "linear-gradient(135deg, #861271, #6dd5ed)",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            {data.name}, {data.sys.country}
          </Typography>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ my: 1, fontWeight: 300 }}
            >
              Temperature: {data.main.temp}
            </Typography>
          </motion.div>

          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ opacity: 0.9 }}
          >
            Condition: {data.weather[0].main}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Typography variant="body2">💧Humidity</Typography>
              <Typography fontWeight="bold">
                {data.main.humidity}
              </Typography>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Typography variant="body2">🌬 Wind</Typography>
              <Typography fontWeight="bold">
                {data.wind.speed} km/h
              </Typography>
            </motion.div>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default WeatherCard;
