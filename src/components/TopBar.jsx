import {
  AppBar,
  Autocomplete,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  Box,
  Drawer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { selectTheme, toggleMode } from "../theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSearch } from "../utils/redditAPI";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavigation from "./SideNavigation";

const TopBar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarMode, setSearchBarMode] = useState("normal");
  const [showDrawer, setShowDrawer] = useState(false);

  const navigate = useNavigate();

  const theme = useTheme();
  const mode = useSelector(selectTheme).palette.mode;
  const pantalla = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (searchQuery.length < 3) {
      setOptions([]);
      return;
    }
    else{
      getSearch(searchQuery).then((res) => {
        setOptions([...res]);
      });
    }
  }, [searchQuery]);

  useEffect(() => {
    if (pantalla) {
      setSearchBarMode("normal");
    } else {
      if (searchBarMode === "normal") {
        setSearchBarMode("icon");
      }
    }
  }, [pantalla, searchBarMode]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  console.log(searchQuery);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" gap="16px">
          <IconButton
            sx={{ color: "primary.contrastText" }}
            onClick={() => setShowDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={showDrawer}
            onClose={() => setShowDrawer(false)}
            variant="temporary"
            anchor="left"
          >
            <SideNavigation />
          </Drawer>
          {searchBarMode === "expanded" ? (
            ""
          ) : (
            <Link to="/">
              <Typography variant="h4"> minReddit </Typography>
            </Link>
          )}
        </Box>
        <Box display="flex" gap="21px">
          {(searchBarMode === "normal") | (searchBarMode === "expanded") ? (
            <Autocomplete
              sx={{
                width: 220,
                height: 40,
                backgroundColor: "secondary.contrastText",
                border: "none",
                borderRadius: "12px",
                borderWidth: "0px",
                display: "flex",
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
              onChange={(e, value) => {
                setSearchBarMode("icon");
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
                      setSearchBarMode("icon");
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              )}
            />
          ) : (
            ""
          )}

          {searchBarMode === "icon" ? (
            <IconButton
              sx={{ color: "primary.contrastText" }}
              onClick={() => setSearchBarMode("expanded")}
            >
              <SearchIcon />
            </IconButton>
          ) : (
            ""
          )}
          {searchBarMode === "expanded" ? (
            <IconButton
              sx={{ color: "primary.contrastText" }}
              onClick={() => setSearchBarMode("icon")}
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{ color: "primary.contrastText" }}
              onClick={() => dispatch(toggleMode())}
            >
              {mode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
