import { Avatar, Card, CardActionArea, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { Link as RouterLink } from "react-router-dom";


const HomeCard = ({ SubRedditInfo }) => {
  return (
    <Card sx={{ width: "235px", backgroundImage: "none" }}>
      <CardActionArea component={RouterLink} to={SubRedditInfo.link}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={SubRedditInfo.icon}
            />
          }
          title={SubRedditInfo.name}
          subheader={`${SubRedditInfo.members} members`}
        />
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
