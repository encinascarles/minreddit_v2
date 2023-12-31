import React from "react";
import {
  Card,
  CardHeader,
  Skeleton,
} from "@mui/material";

const PostCard = (key) => {
  return (
		<Card raised sx={{borderRadius:4, objectFit: "contain", backgroundImage:"none"}} key={key}>
        <CardHeader
          avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
          title={<Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />}
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      </Card>
	)
};

export default PostCard;
