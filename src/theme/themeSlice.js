import { deepOrange, grey } from '@mui/material/colors';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  palette: {
    mode:"light",
    primary: {
    main: deepOrange[500],
    dark: deepOrange[600],
    light: deepOrange[400],
    }
  }
}

export const themeSlice = createSlice({
name: 'theme',
initialState,
reducers: {
  toggleMode: (state) => {
      if(state.palette.mode === 'dark'){
          state.palette={
            mode:"light",
            primary: {
            main: deepOrange[500],
            dark: deepOrange[600],
            light: deepOrange[400],
            }
          };
      }
      else{
          state.palette = {
            mode:"dark",
            primary: {
              main: "#46555A",
              dark: deepOrange[600],
              light: deepOrange[50],
            },
            background: {
              default: "#0C1416",
              paper: "#1D282C",
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
            divider: "rgba(255,255,255,0.12)",
            action: {
              active: "rgba(255,255,255,0.56)",
              hover: "rgba(255,255,255,0.08)",
              selected: "rgba(255,255,255,0.16)",
              focus: "rgba(255,255,255,0.12)",
              disabled: "rgba(255,255,255,0.38)",
              disabledBackground: "rgba(255,255,255,0.12)",
            },
          }
      }
  }
},
});

export const { toggleMode } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
