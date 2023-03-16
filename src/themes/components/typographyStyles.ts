import { THEME_COLORS } from "../colors";

export default {
  MuiTypography: {
    
    styleOverrides: {
      root: (props: any) => {
        return {
          ...props.ownerState.style,
          ...(props.ownerState.variant === "body1" && {
            color: THEME_COLORS.TEXT
          }),
        };
      },

    },
  },
} as any;
