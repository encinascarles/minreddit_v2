import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideNavigation from '../components/SideNavigation'
import Posts from '../components/Posts';
import { useParams } from 'react-router-dom';
import getRedditData from '../utils/redditAPI';

function SubRedditTitle({title}) {
  return (
    <Box>
        <h1>SubReddit {title}</h1>
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
        <Box display="flex" flexDirection="column">
            <SubRedditTitle title={data ? id : data[0].subreddit}/>
            <Posts data={data} isLoading={isLoading}/>
        </Box>
        <Box width="300px"></Box>
    </Box>
  )
}

export default SubReddit