import { TextField , Button, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function SearchBar({ city, setCity, onSearch }){
 
    return(
        <>
        
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: 600,
            mx: "auto",

       }}

       >

        <TextField
            fullWidth
            variaent="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="action" />
                    </InputAdornment>
                ),
        
                
                sx: {
                  borderRadius: "50px",
                  backgroundColor: "#f5f5f5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1976d2",
                  },
                },
              }}
            />

            <Button 
             variant="contained" 
             onClick={onSearch}
             sx={{
                
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                textTransform: "none",
                "&:hover" : {
                    background: "linear-gradient(45deg, #1565c0, #64b5f6)",
                     },
                  }} 
             >
                  Search
            </Button>
            </Box>
        </>
    );
}

export default SearchBar;