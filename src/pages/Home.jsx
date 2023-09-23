import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from "react";
import HomeCard from "../components/HomeCard";

function BlueBox() {
  return (
    <Grid item xs={6} sm={4} >
      <Box
        sx={{
          width: "235px",
          height: "76px",
          backgroundColor: "blue",
        }}
      >aa</Box>
    </Grid>

  );
}

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" paddingTop="38px" gap="38px">
      <Typography variant="h2">Popular SubReddits</Typography>
      <Grid container rowSpacing="25px" columnSpacing="46px" sx={{width:"calc(235px*3 + 25px*2)"}}>
        {Array.from(Array(12).keys()).map((i) => (
          <BlueBox />
        ))
      }
        
      </Grid>
    </Box>
  );
};

export default Home;
