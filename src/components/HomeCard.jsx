import { Avatar, Card, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const HomeCard = ({SubRedditInfo}) => {
  return (
    <Card sx={{width:"235px",backgroundImage:"none"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={SubRedditInfo.icon}/>
        }
        title={SubRedditInfo.name}
        subheader={`${SubRedditInfo.members} members`}
      />
    </Card>
  );
};

export default HomeCard;
