import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from "react";
import HomeCard from "../components/HomeCard";

const popularSubreddits = [
  {
    name: "AskReddit",
    members: "43.345.234",
    icon: "https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png",
    link: "AskReddit"
  },
  {
    name: "NoStupidQuestions",
    members: "3.914.346",
    icon: "https://styles.redditmedia.com/t5_2w844/styles/communityIcon_krq4riav5m191.png",
    link: "NoStupidQuestions"
  },
  {
    name: "Minecraft",
    members: "7.393.836",
    icon: "https://b.thumbs.redditmedia.com/rwN0al9P6nYhGSQO-yIJb-FyF5xg-c2v61zjMom4c4E.png",
    link: "Minecraft"
  },
  {
    name: "DnD",
    members: "3.362.736",
    icon: "https://styles.redditmedia.com/t5_2r9ei/styles/communityIcon_zv45roy38jlb1.png",
    link: "Dnd"
  },
  {
    name: "videos",
    members: "26.831.394",
    icon: "https://styles.redditmedia.com/t5_2qh1e/styles/communityIcon_ostbin5fscdb1.png",
    link: "videos"
  },
  {
    name: "Amd",
    members: "1.613.090",
    icon: "https://styles.redditmedia.com/t5_2rw0n/styles/communityIcon_098dz881tgk81.png",
    link: "Amd"
  },
  {
    name: "DunderMifflin",
    members: "2.264.836",
    icon: "https://styles.redditmedia.com/t5_2s9h3/styles/communityIcon_ujdrcdijabb61.png",
    link: "DunderMifflin"
  },
  {
    name: "Android",
    members: "2.562.645",
    icon: "https://b.thumbs.redditmedia.com/fI7UdJ-vgpnLdxy28QdKIYBGg-fEo7KxQ_PS7pn4QzM.png",
    link: "Android"
  },
  {
    name: "Steam",
    members: "2.075.113",
    icon: "https://b.thumbs.redditmedia.com/xvwxkNXOkvdu9d6S67odp1gCPfhB1A3qKDs7kdwO5ts.png",
    link: "Steam"
  },
  {
    name: "memes",
    members: "28.749.927",
    icon: "https://styles.redditmedia.com/t5_2qjpg/styles/communityIcon_x0untei1wh9b1.png",
    link: "memes"
  },
  {
    name: "wow",
    members: "2.395.106",
    icon: "https://styles.redditmedia.com/t5_2qio8/styles/communityIcon_f3a3cxfc6dra1.png",
    link: "wow"
  },
  {
    name: "pokemongo",
    members: "4.493.196",
    icon: "https://b.thumbs.redditmedia.com/G8vrniZg3VHg6g-cDgBOnCdlsx2TEbiSX_CRA_cRV5I.png",
    link: "pokemongo"
  },

]


const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" paddingTop="38px" gap="38px">
      <Typography variant="h2">Popular SubReddits</Typography>
      <Grid container rowSpacing="25px" columnSpacing="46px" sx={{width:"calc(235px*3 + 25px*2)"}}>
        {popularSubreddits.map((SubRedditInfo) => (
          <Grid item xs={6} sm={4} >
            <HomeCard SubRedditInfo={SubRedditInfo}/>
          </Grid>
        ))
      }
        
      </Grid>
    </Box>
  );
};

export default Home;
