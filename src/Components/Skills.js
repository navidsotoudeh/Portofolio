import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import SkillsContent from "./SkillsContent";

const useStyles = makeStyles((theme) => ({
  skillsComponent: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "150vh",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: "100%",
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

export default function Contact(props) {
  const classes = useStyles();
  const title = data.SKILLS.title;
  const subtitle = data.SKILLS.subtitle;
  return (
    <InView onChange={props.onMount}>
      <Element name="skills" className={classes.skillsComponent}>
        <div className={classes.main}>
          <div className={classes.headerInSection}>
            <HeaderInSection title={title} subtitle={subtitle} />
          </div>
          <SkillsContent />
        </div>
      </Element>
    </InView>
  );
}
