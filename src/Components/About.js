//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import me from "../me.png";
import data from "../data.json";
import HeaderInSection from "./headerInSection";
import { InView } from "react-intersection-observer";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  aboutComponent: {
    backgroundColor: "#f9fbe7",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "200vh",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
    paddingLeft: "15px",
  },

  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
    paddingLeft: "15px",
    marginLeft: "15px",
    paddingRight: "15px",
  },
  socialIcon: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
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
            <img
              src={me}
              alt={"me"}
              style={{
                width: "340px",
                height: "340px",
              }}
            />

            <div className={`${classes.paragraph} circularProgressBarr`}>
              <p style={{ fontSize: "25px" }}> WEB DEVELOPER FROM IRAN </p>
              <p>
                Hello, I am navid sotoudeh..., ambitious problem solver with a
                passion for online businesses. I have much experience of
                creating logical and innovative solutions to complex problems. I
                am thorough and precise in everything I do, and have a keen
                interest in technology and web applications. As someone who
                takes responsibility for his own personal development, I am
                continually evaluating and upgrading my skills so that I stay at
                the cutting edge of web development. I am a natural problem
                solver, who have proven myself by successfully completing
                projects for IT consultancies, web design agencies, and IT
                departments.
              </p>
              <p style={{ fontSize: "25px" }}>Easily find me on</p>
              <div className={classes.socialIcon}>
                {Object.keys(data.About.link).map((key) => (
                  <SocialIcon
                    key={data.About.link[key]}
                    url={data.About.link[key]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>
    </InView>
  );
}
