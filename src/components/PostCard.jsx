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
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useTheme } from "@mui/material/styles";


const PostCard = ({PostData}) => {
  const theme = useTheme();
	function CardMediaProc() {
    if (PostData.media_type === "image") {
      return (
        <CardMedia
          sx={{aspectRatio:4/3, objectFit: "contain"}}
          component="img"
          image={PostData && PostData.media}
        />
      );
    } else if (PostData.media_type === "hosted:video") {
      return <CardMedia ssx={{aspectRatio:5/3, objectFit: "contain"}} component="video" src={PostData && PostData.media} controls />;
    }
  }

  return (
		<Card raised sx={{borderRadius:4, objectFit: "contain",}}>
        <CardHeader
          avatar={PostData ? <Avatar>{PostData.author[0]}</Avatar> : null}
          title={PostData && PostData.title}
          subheader={PostData && PostData.author}
        />
        <Box paddingRight={2} paddingLeft={2}>
          {PostData && PostData.thumbnail && <CardMediaProc />}
        </Box>
        <CardActions sx={{ display: "flex", justifyContent: "center", gap:2}}>
          <ButtonGroup
            variant="contained"
            sx={{
              borderRadius: "20px",
              height: "40px",
              alignItems: "center",
              backgroundColor: "primary.main",
            }}
          >
            <IconButton sx={{color:theme.palette.getContrastText(theme.palette.primary.main)}}>
              <ArrowUpwardOutlinedIcon  />
            </IconButton>
            <Typography color={theme.palette.getContrastText(theme.palette.primary.main)}>{PostData && PostData.ups}</Typography>
            <IconButton sx={{color:theme.palette.getContrastText(theme.palette.primary.main)}}>
              <ArrowDownwardOutlinedIcon />
            </IconButton>
          </ButtonGroup>
          <Button
            variant="contained"
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
