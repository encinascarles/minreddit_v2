import { Route, Routes } from "react-router-dom";
import React from "react";
import SubReddit from "./pages/SubReddit";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange } from "@mui/material/colors";
import Home from "./pages/Home";

function App() {
  const theme= createTheme({
    palette:{
      mode: 'light',
      primary: {
        main: deepOrange[500],
        dark: deepOrange[600],
        light: deepOrange[400],
      },
    }
  })
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <Box>
          <Routes>
            <Route path="/:id" element={<SubReddit />} />
            <Route index element={<Home />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
