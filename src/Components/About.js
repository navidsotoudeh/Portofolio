import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import me from "../me.png";
import data from "../data.json";
import HeaderInSection from "./headerInSection";
import { InView } from "react-intersection-observer";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  aboutComponent: {
    //backgroundColor: "#f9fbe7",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "150vh",
    marginBottom : '1rem',
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
        marginRight: "15px",
        paddingLeft: "0",

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
  paragraph: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "15px",
    marginLeft: "15px",
    paddingRight: "15px",
    [theme.breakpoints.down("sm")]: {
        display: "block",
      },
  },
  mediaIcon: {
    margin: "0.5rem"
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center"
  },
  profile: {
    width: "340px",
    height: "340px",
    borderRadius : "5px",
    [theme.breakpoints.down("sm")]: {
        maxWidth: "300px", 
        maxHeight: "300px",
      },

  }
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function About(props) {
  const classes = useStyles();
  const title = data.About.title;
  const subtitle = data.About.subtitle;
  return (
    <InView onChange={props.onMount}>
      <Element name="about" className={classes.aboutComponent}>
        <div className={classes.main}>
          <HeaderInSection title={title} subtitle={subtitle} />
          <div className={classes.content}>
            <img src={me} alt={"me"}  className={classes.profile} />

            <div className={`${classes.paragraph} circularProgressBarr`}>
              <p style={{ fontSize: "25px"}}> WEB DEVELOPER FROM IRAN </p>
              <p>
                Hello, I am navid sotoudeh..., ambitious problem solver with a
                passion for online businesses. I have much experience of
                creating logical and innovative solutions to complex problems.
                I am thorough and precise in everything I do, and have a keen
                interest in technology and web applications. As someone who
                takes responsibility for his own personal development, I am
                continually evaluating and upgrading my skills so that I stay
                at the cutting edge of web development. I am a natural problem
                solver, who have proven myself by successfully completing
                projects for IT consultancies, web design agencies, and IT
                departments.
              </p>
            </div>
          </div>
          <p style={{ fontSize: "25px" , textAlign : "center" }}>Easily find me on</p>
          <div className={classes.socialIcons}>
            {Object.keys(data.About.link).map(key =>
              <SocialIcon
                className={classes.mediaIcon}
                key={data.About.link[key]}
                url={data.About.link[key]}
              />
            )}
          </div>
        </div>
      </Element>
    </InView>
    )
}
