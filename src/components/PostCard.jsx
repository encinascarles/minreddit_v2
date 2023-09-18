import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useTheme } from "@mui/material/styles";

const PostCard = ({PostData}) => {
	function CardMediaProc() {
    if (PostData.media_type === "image") {
      return (
        <CardMedia
          sx={{ maxHeight: "400px", objectFit: "contain" }}
          component="img"
          image={PostData && PostData.media}
        />
      );
    } else if (PostData.media_type === "hosted:video") {
      return <CardMedia sx={{ maxHeight: "400px", objectFit: "contain" }} component="video" src={PostData && PostData.media} controls />;
    }
  }

  return (
		<Card raised>
        <CardHeader
          avatar={PostData ? <Avatar>{PostData.author[0]}</Avatar> : null}
          title={PostData && PostData.title}
          subheader={PostData && PostData.author}
        />
        {PostData && PostData.thumbnail && <CardMediaProc />}
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup
            variant="contained"
            sx={{
              borderRadius: "20px",
              height: "40px",
              alignItems: "center",
              mr: "20px",
            }}
          >
            <IconButton>
              <ArrowUpwardOutlinedIcon />
            </IconButton>
            <Typography>{PostData && PostData.ups}</Typography>
            <IconButton>
              <ArrowDownwardOutlinedIcon />
            </IconButton>
          </ButtonGroup>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ChatOutlinedIcon />}
            sx={{
              borderRadius: "20px",
              height: "40px",
            }}
          >
            <Typography>{PostData && PostData.num_comments}</Typography>
            
          </Button>
        </CardActions>
      </Card>
	)
};

export default PostCard;
