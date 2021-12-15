import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export const COLORS = {
  main: "#FFC815",
  textSecondary: "#C4C4C4",
  textHint: "#CB4E6C",
  primaryMain: "#2f2f2f",
};

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#467fcf" },
  },
  typography: {
    h2: {
      fontFamily: ["Roboto"].join(","),
      fontWeight: 500,
      fontSize: "20px",
      color: COLORS.textHint,
      [breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
    subtitle1: {
      fontFamily: ["Roboto"].join(","),
      fontWeight: 500,
      fontSize: "15px",
      color: COLORS.primaryMain,
      [breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
    subtitle2: {
      fontFamily: ["Roboto"].join(","),
      fontWeight: 400,
      fontSize: "12px",
      color: COLORS.primaryMain,
      [breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
  },
});

export default theme;
