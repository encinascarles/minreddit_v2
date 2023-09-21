import { Stack } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";

const Posts = ({data,isLoading}) => {
  return (
    <Stack spacing={2} sx={{width:"100%"}}>
      {data[0] && data.map((info) => <PostCard PostData={info} />)}
    </Stack>
  );
};

export default Posts;
