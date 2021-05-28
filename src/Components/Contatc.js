//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  contactComponent: {
    backgroundColor: "bisque",
    display: "flex",
    width: "100%",
    height: "150vh",
    paddingTop: "80px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    paddingLeft: "15px",
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function Contact(props) {
  const classes = useStyles();
  const title = data.Contact.title;
  const subtitle = data.Contact.subtitle;

  return (
    <InView onChange={props.onMount}>
      <Element name="contact" className={classes.contactComponent}>
        <div className={classes.main}>
          <HeaderInSection title={title} subtitle={subtitle} />
        </div>
      </Element>
    </InView>
  );
}