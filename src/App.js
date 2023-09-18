import { Route, Routes } from "react-router-dom";
import React from "react";
import SubReddit from "./pages/SubReddit";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Box>
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
