import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7';

const TopBar = () => {
  return (
    <AppBar position="sticky">
            <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="h4"> minReddit </Typography>
                <IconButton>
                    <Brightness7Icon />
                </IconButton>
            </Toolbar>
    </AppBar>
  )
}

export default TopBar