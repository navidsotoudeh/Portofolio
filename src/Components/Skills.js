//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import SkillsContent from "./SkillsContent";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  skillsComponent: {
    backgroundColor: "#84ffff",
    display: "flex",
    width: "100%",
    height: "150vh",
    paddingTop: "80px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px",
    paddingLeft: "15px",
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function Contact(props) {
  const classes = useStyles();
  const title = data.SKILLS.title;
  const subtitle = data.SKILLS.subtitle;

  return (
    <InView onChange={props.onMount}>
      <Element name="skills" className={classes.skillsComponent}>
        <div className={classes.main}>
          <HeaderInSection title={title} subtitle={subtitle} />
          <SkillsContent />
        </div>
      </Element>
    </InView>
  );
}
