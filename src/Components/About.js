import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import HeaderInSection from "./headerInSection";
import { InView } from "react-intersection-observer";
import AboutContent from "./AboutContent";
import data from "../data.json";
const useStyles = makeStyles((theme) => ({
  aboutComponent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "110vh",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      height: "160vh",
    },
  },
  headerInSection: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  main: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const title = data.About.title;
  const subtitle = data.About.subtitle;
  return (
    <InView onChange={props.onMount}>
      <Element name="about" className={classes.aboutComponent}>
        <div className={classes.main}>
          <div className={classes.headerInSection}>
            <HeaderInSection title={title} subtitle={subtitle} />
          </div>
          <AboutContent />
        </div>
      </Element>
    </InView>
  );
}
