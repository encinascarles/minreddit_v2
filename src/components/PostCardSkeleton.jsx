import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";


const PostCard = () => {
  return (
		<Card raised sx={{borderRadius:4, objectFit: "contain", backgroundImage:"none"}}>
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
