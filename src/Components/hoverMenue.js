import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { scroller } from "react-scroll";

export default function HoverMenue({ show }) {
  const useStyles = makeStyles((theme) => ({
    hoverMenue: {
      top: "70px",
      backgroundColor: "black",
      width: "40%",
      height: "100%",
      display: show ? "flex" : "none",
      position: "fixed",
      opacity: 0.7,
      alignItems: "center",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    btnholder: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "10%",
      width: "100%",
      alignItems: "center",
    },
    btn: {
      display: "flex",
      backgroundColor: "black",
      justifyContent: "center",
      color: "white",
      width: "100%",
      fontSize: "x-large",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.hoverMenue}>
      <div className={classes.btnholder}>
        <div
          className={classes.btn}
          onClick={() =>
            scroller.scrollTo("about", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          About
        </div>
        <div
          className={classes.btn}
          onClick={() =>
            scroller.scrollTo("resume", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          Resume
        </div>
        <div
          className={classes.btn}
          onClick={() =>
            scroller.scrollTo("skills", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          Skills
        </div>
        <div
          className={classes.btn}
          onClick={() =>
            scroller.scrollTo("contact", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          Contact
        </div>
      </div>
    </div>
  );
}
