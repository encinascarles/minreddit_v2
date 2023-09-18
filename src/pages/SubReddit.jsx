import { Box } from '@mui/material'
import React from 'react'
import SideNavigation from '../components/SideNavigation'
import Posts from '../components/Posts';

function SubRedditTitle() {
  return (
    <Box>
        <h1>SubReddit Title</h1>
    </Box>
  );
}

const SubReddit = () => {
  return (
    <Box display="flex" justifyContent="center" gap={4}>
        <SideNavigation />
        <Box display="flex" flexDirection="column">
            <SubRedditTitle />
            <Posts />
        </Box>
    </Box>
  )
}

export default SubReddit