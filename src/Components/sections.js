import React, { Component, useState } from "react";
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
  },
  dvd: {
    background: "#6a6363",
    width: "1000px",
    variant: "fullWidth",
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function Sections({
  onAboutMount,
  onResumneMount,
  onSkillsMount,
  onContactMount,
}) {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <About onMount={onAboutMount} />
      <Divider className={classes.dvd} />
      <Resume onMount={onResumneMount} />
      <Divider className={classes.dvd} />
      <Skills onMount={onSkillsMount} />
      <Divider className={classes.dvd} />
      <Contact onMount={onContactMount} />
    </div>
  );
}
