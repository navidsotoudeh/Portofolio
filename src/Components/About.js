import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import me from "../me.png";
import data from "../data.json";
import HeaderInSection from "./headerInSection";
import { InView } from "react-intersection-observer";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  aboutComponent: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100vh",
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
    flexDirection: "column",
    marginLeft: "15px",
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: "0",
      paddingLeft: "0",
    },
  },
  headerInSection: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "15px",
    paddingRight: "15px",
    color: "black",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "0.9rem",
    },
  },
  easily: {
    fontSize: "1.15rem",
    color: "#a27c02",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
  },

  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  mediaIcon: {
    margin: "0.5rem",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  profile: {
    width: "340px",
    height: "340px",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      maxHeight: "300px",
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const title = data.About.title;
  const subtitle = data.About.subtitle;
  return (
    <InView onChange={props.onMount}>
      <Element name="about" className={classes.aboutComponent}>
        <div className={classes.main}>
          <div className={classes.headerInSection}>
            <HeaderInSection title={title} subtitle={subtitle} />
          </div>
          <div className={classes.content}>
            <img src={me} alt={"me"} className={classes.profile} />
            <div className={classes.paragraph}>
              <Typography variant="subtitle2" className={classes.paragraph}>
                I am Navid Sotoudeh mehr, An ambitious problem solver with a
                passion for online businesses. I am thorough and precise in
                everything I do, and have a keen interest in technology and web
                applications. As someone who takes responsibility for his own
                personal development, I am continually evaluating and upgrading
                my skills so that I stay at the cutting edge of web development.
                I am a natural problem solver, who have proven myself by
                successfully completing projects for IT consultancies, web
                design agencies, and IT departments.
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "30%",
            }}
          >
            <Typography variant="overline" className={classes.easily}>
              Easily find me on
            </Typography>
            <div className={classes.socialIcons}>
              {Object.keys(data.About.link).map((key) => (
                <SocialIcon
                  className={classes.mediaIcon}
                  key={data.About.link[key]}
                  url={data.About.link[key]}
                />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </InView>
  );
}
