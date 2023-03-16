import { THEME_COLORS } from "../colors";

export default {
  MuiAppBar: {
    defaultProps: {
      elevation: 3,
      position: "fixed",
    },
    styleOverrides: {
      root: (props: any) => {
        return {
          backgroundColor: THEME_COLORS.WHITE,
          height: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: `-2px 12px 25px -10px ${THEME_COLORS.SHADOW_COLOR}`,
          zIndex: props.theme.zIndex.drawer + 1,
        };
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        padding: "20px 30px",
      },
    },
  },
} as any;
