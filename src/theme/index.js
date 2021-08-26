import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 6,
        fontWeight: 600,
      },
    },
    MuiTextField: {
      root: {
        display: "flex",
      },
    },
  },
  props: {
    MuiButton: {
      color: "primary",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
});

export default theme;
