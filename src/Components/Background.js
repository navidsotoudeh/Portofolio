import React from "react";
import labtop from "../images/labtop.png";
import miladtower from "../images/miladtower.png";
import road from "../images/road.png";
import shoes from "../images/shoes.png";
import lights from "../images/lights.png";
import { makeStyles } from "@material-ui/core/styles";
import HoverMenue from "./hoverMenue";
import TextOnBg from "./TextOnBg";

export default function Background({ activeSession, show }) {
  const useStyles = makeStyles((theme) => ({
    bg: {
      display: "flex",
      width: "40%",
      height: "100%",
      position: "relative",
    },
    img: {
      top: "-70px",
      width: "40%",
      position: "fixed",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  let bgImage = () => {
    switch (activeSession) {
      case "about":
        return labtop;
      case "resume":
        return miladtower;
      case "skills":
        return shoes;
      case "comment":
        return lights;
      case "contact":
        return road;
      default:
      // code block
    }
  };

  return (
    <div className={classes.bg}>
      <img src={bgImage()} alt={"labtop.png"} className={classes.img} />
      <div
        style={{
          width: "40%",
          height: "100%",
          position: "fixed",
          backgroundColor: "black",
          opacity: "0.3",
        }}
      ></div>
      <TextOnBg activeSession={activeSession} />
      <HoverMenue show={show} />
    </div>
  );
}
