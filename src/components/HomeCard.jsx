import { Avatar, Card, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const HomeCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Ask Reddit"
        subheader="43.345.234 members"
      />
    </Card>
  );
};

export default HomeCard;
