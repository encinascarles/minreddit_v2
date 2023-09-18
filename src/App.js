import { Route, Routes } from "react-router-dom";
import React from "react";
import SubReddit from "./pages/SubReddit";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Box>
      <CssBaseline />
      <TopBar />
      <Box>
        <Routes>
          <Route path="/:id" element={<SubReddit />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
