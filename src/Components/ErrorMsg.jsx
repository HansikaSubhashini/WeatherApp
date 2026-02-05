import { Box, Typography } from "@mui/material";


function ErrorMsg({ message })
{
     
    return(
        <Box mt={2}>
           <Typography color="error" align="center" mt={2}>
           {message}
         </Typography>
     </Box>
    );
}

export default ErrorMsg;