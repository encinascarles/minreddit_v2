import {
  AppBar,
  Autocomplete,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { selectTheme, toggleMode } from "../theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { getSearch } from "../utils/redditAPI";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  const navigate = useNavigate();

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    if (searchQuery.length < 3) {
      setOptions([]);
      setLoading(false);
      return;
    }
    getSearch(searchQuery).then((res) => {
      setOptions([...res]);
    });
    setLoading(false);
  }, [searchQuery]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  console.log(searchQuery);
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <Typography variant="h4"> minReddit </Typography>
        </Link>
        <Box display="flex" gap="21px">
        <Autocomplete
          sx={{
            width: 220,
            height: 40,
            backgroundColor: "secondary.contrastText",
            border: "none",
            borderRadius: "12px",
            borderWidth: "0px",
            display: {xs:"none",md:"flex"},
            alignItems: "center",
            justifyContent: "space-between",
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          filterOptions={(x) => x}
          getOptionLabel={(option) => (option.title ? option.title : "")}
          options={options}
          freeSolo
          disableClearable
          value={item}
          onChange={(e, value) => {
            setSearchQuery("");
            setOptions([]);
            if (value.title) {
              navigate("/r/" + value.title);
            } else {
              navigate("/r/" + value);
            }
          }}
          renderInput={(params) => (
            <Box display="flex" width="100%">
              <TextField
                {...params}
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                transparent                
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <IconButton
                onClick={() => {
                  setSearchQuery("");
                  setOptions([]);
                  navigate("/r/" + searchQuery);
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          )}
        />

        <IconButton
          sx={{ color: "primary.contrastText" }}
          onClick={() => dispatch(toggleMode())}
        >
          {useSelector(selectTheme).palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
