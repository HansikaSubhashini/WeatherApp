import { TextField , Button } from "@mui/material";


function SearchBar({ city, setCity, onSearch }){
 
    return(
        <>
        <TextField
            label="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}

            />

            <Button variant="contained" onClick={onSearch}>
                Search
            </Button>
        </>
    );


}

export default SearchBar;