import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { selectTheme, toggleMode } from '../theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';


const TopBar = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky" sx={{backgroundColor:"primary.main"}}>
            <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="h4"> minReddit </Typography>
                <IconButton sx={{color:"primary.contrastText"}} onClick={()=>dispatch(toggleMode())}>
                {useSelector(selectTheme).palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
    </AppBar>
  )
}

export default TopBar