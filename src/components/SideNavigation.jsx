import {
  Box,
  Collapse,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import HomeIcon from '@mui/icons-material/Home';

import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const temas = {
  Videojuegos: {
    icon: <VideogameAssetOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
  Deportes: {
    icon: <SportsBaseballOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
  Negocios: {
    icon: <ShowChartOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
  Crypto: {
    icon: <CurrencyBitcoinOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
  Television: {
    icon: <TvOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
  Famosos: {
    icon: <StarsOutlinedIcon />,
    subtemas: [
      "Valheim",
      "Genshin Impact",
      "Minecraft",
      "Pokimane",
      "Halo Infinite",
    ],
  },
};

const SideNavigation = () => {
  const [open, setOpen] = React.useState("");

  const handleClick = (tema) => {
    if (open === tema) {
      setOpen(false);
    } else {
      setOpen(tema);
    }
  };

  return (
    <Box width="300px" marginTop="50px" >
			<Box position="fixed" width="300px">
      <Container>
        <List>
          <ListItemButton>
            <ListItemIcon sx={{color: 'actions.active' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <Divider sx={{marginBottom:"12px", marginTop:"12px"}}/>
          {Object.keys(temas).map((text) => (
            <>
              <ListItemButton onClick={() => handleClick(text)}>
                <ListItemIcon>{temas[text].icon}</ListItemIcon>
                <ListItemText primary={text} />
                {open === text ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === text} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {temas[text].subtemas.map((text) => (
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Container>
			</Box>
    </Box>
  );
};

export default SideNavigation;
