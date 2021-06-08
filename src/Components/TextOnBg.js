import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "40%",
    height: "100%",
    display: "flex",
    position: "fixed",
    paddingLeft: "30px",
    //justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  box: {
    display: "flex",
    borderColor: "rgba(255,255,255,0.51)",
    m: 2,
    border: "9px solid",
    borderTop: "0",
    borderRight: "0",
    width: "50%",
    height: "70%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginBottom: "30px",
  },
  text: {
    fontSize: "150%",
    color: "white",
    fontFamily: "sansSerif",
    marginLeft: "20px",
  },
}));

export default function TextOnBg({ activeSession }) {
  const classes = useStyles();

  let txt = () => {
    switch (activeSession) {
      case "about":
        return "ABOUT ME";
      case "resume":
        return "MY RESUME";
      case "skills":
        return "MY SKILLS";
      case "comment":
        return "Share your idea";
      case "contact":
        return "CONTACT ME";
      default:
      // code block
    }
  };

  return (
    <div className={classes.wrapper}>
      <Box className={classes.box}>
        <div className={classes.text}>
          <h1>{txt()}</h1>
        </div>
      </Box>
    </div>
  );
}
