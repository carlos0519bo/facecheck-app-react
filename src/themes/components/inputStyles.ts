import { THEME_COLORS } from "../colors";

export default {
  MuiCheckbox: {
    defaultProps: {
      style: {
        accentColor: THEME_COLORS.PRIMARY,
      },
    },
    styleOverrides: {
      root: {
        borderRadius: 12,
        "&.MuiCheckbox-root": {
          color: THEME_COLORS.CHECKBOX,
        },
        "&.Mui-checked": {
          color: THEME_COLORS.PRIMARY,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        color: THEME_COLORS.INPUT_LABEL,
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      fullWidth: true,
      variant: "outlined",
    },
    styleOverrides: {
      icon: {
        color: THEME_COLORS.PRIMARY,
        margin: "0 10px",
      },
      select: {
        padding: "10px 30px",
        alignItems: "center",
        display: "flex",
        height: "35px",
        borderRadius: 12,
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      fullWidth: true,
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
      InputProps: {
        style: {
          borderColor: "transparent",
        },
      },
      InputLabelProps: {
        style: {
          fontSize: 14,
        },
      },
    },
    // styleOverrides: {
    //   root: (props: any) => {
    //     return {
    //       // alignItems: "center",
    //       // justifyContent: "center",
    //       borderRadius: 10,
    //     };
    //   },
    // },
  },
} as any;
