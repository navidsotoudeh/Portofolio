//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import ResumeContent from "./ResumeContent";

const useStyles = makeStyles((theme) => ({
  resumeComponent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "150vh",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
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
      height: "100%",
    },
  },
}));

export default function Resume(props) {
  const classes = useStyles();
  const title = data.RESUME.title;
  const subtitle = data.RESUME.subtitle;
  return (
    <InView onChange={props.onMount}>
      <Element name="resume" className={classes.resumeComponent}>
        <div className={classes.main}>
          <div className={classes.headerInSection}>
            <HeaderInSection title={title} subtitle={subtitle} />
          </div>
          <ResumeContent />
        </div>
      </Element>
    </InView>
  );
}
