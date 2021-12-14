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
    width: "100%",
    height: "120vh",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  main: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "10px",
    },
  },
  headerInSection: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
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
