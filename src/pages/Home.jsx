import { Box, Grid } from "@mui/material";
import React from "react";
import HomeCard from "../components/HomeCard";


const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} >
        <HomeCard/>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
        <Grid item xs={6} sm={4} >
        <p>1</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
