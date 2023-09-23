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
import { useNavigate } from "react-router-dom";

const temas = {
  Videogames: {
    icon: <VideogameAssetOutlinedIcon />,
    subtemas: [
      {name:"Valheim", link:"/r/Valheim"},
      {name:"Genshin Impact",link:"/r/GenshinImpact"},
      {name:"Minecraft", link:"/r/Minecraft"},
      {name:"Pokimane", link:"/r/Pokimane"},
      {name:"Halo Infinite",link:"/r/HaloInfinite"}
    ],
  },
  Sports: {
    icon: <SportsBaseballOutlinedIcon />,
    subtemas: [
      {name:"NFL", link:"/r/nfl"},
      {name:"NBA",link:"/r/nba"},
      {name:"Megan Anderson", link:"/r/MeaganAnderson"},
      {name:"Atlanta Hawks", link:"/r/AtlantaHawks"},
      {name:"Los Angeles Lakers",link:"/r/Lakers"},
      {name:"Boston Celtics",link:"/r/BostonCeltics"},
      {name:"Arsenal F.C.", link:"/r/arsenal"},
      {name:"philadelphia 76ers", link:"/r/sixers"},
      {name:"Premier League",link:"/r/PremierLeague"},
      {name:"UFC",link:"/r/ufc"}
    ],
  },
  Business: {
    icon: <ShowChartOutlinedIcon />,
    subtemas: [
      {name:"GameStop", link:"/r/GameStop"},
      {name:"Moderna",link:"/r/Moderna"},
      {name:"Pfizer", link:"/r/Pfizer"},
      {name:"Johnson & Johnson", link:"/r/JohnsonAndJohnson"},
      {name:"AstraZeneca",link:"/r/AstraZeneca"},
      {name:"Walgreens",link:"/r/Walgreens"},
      {name:"Best Buy", link:"/r/BestBuy"},
      {name:"Novavax", link:"/r/Novavax"},
      {name:"SpaceX",link:"/r/SpaceX"},
      {name:"Tesla",link:"/r/Tesla"}
    ],
  },
  Crypto: {
    icon: <CurrencyBitcoinOutlinedIcon />,
    subtemas: [
      {name:"Cardano", link:"/r/Cardano"},
      {name:"Dogecoin",link:"/r/Dogecoin"},
      {name:"Algorand", link:"/r/Algorand"},
      {name:"Bitcoin", link:"/r/Bitcoin"},
      {name:"Litecoin",link:"/r/Litecoin"},
      {name:"Basic Attention Token",link:"/r/BATProject"},
      {name:"Bitcoin cash", link:"/r/Bitcoincash"},
    ],
  },
  Television: {
    icon: <TvOutlinedIcon />,
    subtemas: [

    ],
  },
  Famosos: {
    icon: <StarsOutlinedIcon />,
    subtemas: [

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
  const navigate = useNavigate();

  return (
    <Box width="300px" marginTop="50px">
			<Box position="fixed" width="300px">
      <Container>
        <List sx={{height:"calc(100vh - 130px)" , overflow:"auto"}}>
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
                    <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate(text.link)} >
                      <ListItemText primary={text.name} />
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
