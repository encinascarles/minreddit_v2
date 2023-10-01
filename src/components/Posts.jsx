import { Stack } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";

const Posts = ({data,isLoading}) => {
  return (
    <Stack spacing={2} sx={{width:"100%"}}>
      {isLoading ? Array(10).fill().map((a,i) => <PostCardSkeleton key={i}/>) : data.map((info,i) => <PostCard PostData={info} key={i}/>)}
    </Stack>
  );
};

export default Posts;
