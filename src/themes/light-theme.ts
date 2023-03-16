import { createTheme } from "@mui/material";
import { red, common } from "@mui/material/colors";
import { THEME_COLORS } from "./colors";
import {
  appBarStyles,
  inputStyles,
  typographyStyles,
  buttonStyles,
  drawerStyles,
} from "./components";

export const lightTheme = createTheme({
  
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    mode: "light",

    action: {
      disabledBackground: THEME_COLORS.DISABLED_BUTTON,
      disabled: THEME_COLORS.BACKGROUND_COLOR,
      hover: THEME_COLORS.HOVER_COLOR,
    },
    background: {
      default: THEME_COLORS.BACKGROUND_COLOR,
    },
    primary: {
      main: THEME_COLORS.PRIMARY,
    },
    secondary: {
      main: THEME_COLORS.SECONDARY,
    },
    error: {
      main: red.A400,
    },
    info: {
      main: common.white,
    },
  },
  components: {
    ...appBarStyles,
    ...inputStyles,
    ...typographyStyles,
    ...buttonStyles,
    ...drawerStyles,
  },
});
