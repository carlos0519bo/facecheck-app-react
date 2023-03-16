import { THEME_COLORS } from "../colors";

export default {
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: THEME_COLORS.BACKGROUND_COMPONENT_COLOR,
        top: "30px",
        border: "none",
      },
    },
  },
} as any;
