//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import ResumeContent from "./ResumeContent";

const useStyles = makeStyles(() => ({
  resumeComponent: {
    //backgroundColor: "#dcedc8",
    display: "flex",
    width: "100%",
    height: "150vh",
    top: "75px",
    paddingTop: "80px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    marginRight: "15px",
    paddingLeft: "15px",
    width: "100%",
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
          <HeaderInSection title={title} subtitle={subtitle} />
          <ResumeContent />
        </div>
      </Element>
    </InView>
  );
}
