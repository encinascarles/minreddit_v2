import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideNavigation from "../components/SideNavigation";
import Posts from "../components/Posts";
import { useNavigate, useParams } from "react-router-dom";
import getRedditData from "../utils/redditAPI";

function SubRedditTitle({ title }) {
  return (
    <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4">
        SubReddit <b>{title}</b>
      </Typography>
    </Box>
  );
}

const SubReddit = () => {
  const { id, sub } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData(id, sub) {
      try {
        const res = await getRedditData(id, sub);
        setData(res);
        setIsLoading(false);
      } catch (error) {
        navigate("/404");
      }
    }
    
    fetchData(id, sub);
  }, [id,sub,navigate]);

  return (
    <Box
      sx={{display:"grid", gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"}, gridGap: "20px", justifyContent: "center" }}
      gap={4}
    >
      <Box sx={{gridColumn:"1/2", display:{xs:"none", md:"flex"}, flexDirection:"row", justifyContent:"right"}}>
        <SideNavigation />
        <Divider orientation="vertical" flexItem sx={{ marginTop: "42px" }} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridColumn={{sm:"1",md:"2/3"}}
        paddingX={{xs:"20px",md:"0px"}}
      >
        <SubRedditTitle title={data ? id : data[0].subreddit} />
        <Posts data={data} isLoading={isLoading} />
      </Box>
    </Box>
  );
};

export default SubReddit;
