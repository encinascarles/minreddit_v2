import { Route, Routes } from "react-router-dom";
import React from "react";
import SubReddit from "./pages/SubReddit";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./pages/Home";
import {useSelector} from 'react-redux'
import { selectTheme } from "./theme/themeSlice";



function App() {
  const theme = createTheme(useSelector(selectTheme));
  


  return (
    <Box>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          <Box>
            <Routes>
              <Route path="/:sub/:id" element={<SubReddit />} />
              <Route index element={<Home />} />
            </Routes>
          </Box>
        </ThemeProvider>
    </Box>
  );
}

export default App;
