//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import ContactContent from "./contactContent";
const useStyles = makeStyles((theme) => ({
  contactComponent: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "110vh",
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

export default function Contact(props) {
  const classes = useStyles();
  const title = data.Contact.title;
  const subtitle = data.Contact.subtitle;

  return (
    <InView onChange={props.onMount}>
      <Element name="contact" className={classes.contactComponent}>
        <div className={classes.main}>
          <div className={classes.headerInSection}>
            <HeaderInSection title={title} subtitle={subtitle} />
          </div>
          <ContactContent />
        </div>
      </Element>
    </InView>
  );
}
