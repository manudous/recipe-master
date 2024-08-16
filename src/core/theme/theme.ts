import { css } from "@emotion/css";
import { createTheme, responsiveFontSizes } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#6200EA",
    },
    secondary: {
      main: "#03DAC6",
    },
    error: {
      main: "#B00020",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: css`
          cursor: pointer;
        `,
      },
    },
  },
});

export const theme = responsiveFontSizes(defaultTheme);
