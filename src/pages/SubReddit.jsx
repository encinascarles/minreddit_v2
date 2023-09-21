import { Box, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideNavigation from '../components/SideNavigation'
import Posts from '../components/Posts';
import { useParams } from 'react-router-dom';
import getRedditData from '../utils/redditAPI';

function SubRedditTitle({title}) {
  return (
    <Box sx={{paddingTop:4, paddingBottom:4}} >
      <Typography variant="h4">SubReddit <b>{title}</b></Typography>
    </Box>
  );
}

const SubReddit = () => {
	const {id}= useParams()
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect( () => {
		getRedditData(id)
		.then(res => {
				setData(res)
				setIsLoading(false)
		})
	},[])

  return (
    <Box display="flex" justifyContent="center" gap={4}>
        <SideNavigation />
        <Divider orientation="vertical" flexItem sx={{marginTop:"42px"}} />
        <Box display="flex" flexDirection="column" alignItems="center" sx={{width:"40vw", minWidth:700}}>
            <SubRedditTitle title={data ? id : data[0].subreddit} />
            <Posts data={data} isLoading={isLoading}/>
        </Box>
        <Box width="300px"></Box>
    </Box>
  )
}

export default SubReddit