export default {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        borderRadius: 7,
        width: "100%",
        height: 50,
        fontWeight: "bold",
        textTransform: "none",
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
      },
    },
  },
} as any;
