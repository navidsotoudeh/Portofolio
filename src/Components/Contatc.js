//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import HeaderInSection from "./headerInSection";
import data from "../data.json";
import ContactContent from "./contactContent";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  contactComponent: {
    display: "flex",
    width: "100%",
    height: "110vh",
    paddingTop: "80px",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    paddingLeft: "15px",
    marginRight: "15px",
    width: "100%",
    height: "100%",
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
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            <ContactContent />
          </div>
        </div>
      </Element>
    </InView>
  );
}
