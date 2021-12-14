import React from "react";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contatc";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  sections: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    top: "70px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dvd: {
    background: "#6a6363",
    width: "100%",
    variant: "fullWidth",
  },
}));
export default function Sections({
  onAboutMount,
  onResumeMount,
  onSkillsMount,
  onContactMount,
}) {
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <About onMount={onAboutMount} />
      <Divider className={classes.dvd} />
      <Resume onMount={onResumeMount} />
      <Divider className={classes.dvd} />
      <Skills onMount={onSkillsMount} />
      <Divider className={classes.dvd} />
      <Divider className={classes.dvd} />
      <Contact onMount={onContactMount} />
    </div>
  );
}
