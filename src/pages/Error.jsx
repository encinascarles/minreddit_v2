import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="100px"
      paddingTop="200px"
    >
      <Typography sx={{ typography: { md: "h4", xs: "h5" } }}>
        <b>{"This subreddit doesn't exist"}</b>
      </Typography>
      <Button variant="contained" size="large" onClick={()=>navigate("/")}>
        GO HOME
      </Button>
    </Box>
  );
};

export default Error;
