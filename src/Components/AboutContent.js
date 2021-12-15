import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "../data.json";
import { InView } from "react-intersection-observer";
import { SocialIcon } from "react-social-icons";
import me from "../me.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "70%",
    },
  },
  profile: {
    width: "45%",
    height: "100%",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "65%",
    },
  },
  paragraph: {
    display: "flex",
    width: "54%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
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

  mediaIcon: {
    margin: "0.5rem",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
}));

export default function AboutContent() {
  const classes = useStyles();
  const [inView, setInView] = useState(false);
  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => {
        console.log("inView in 85", inView);
        return (
          <div ref={ref} className={classes.main}>
            <div className={classes.content}>
              <img src={me} alt={"me"} className={classes.profile} />
              <div className={classes.paragraph}>
                <Typography variant="subtitle1">
                  I am Navid Sotoudeh mehr, An ambitious problem solver with a
                  passion for online businesses. I am thorough and precise in
                  everything I do, and have a keen interest in technology and
                  web applications. As someone who takes responsibility for his
                  own personal development, I am continually evaluating and
                  upgrading my skills so that I stay at the cutting edge of web
                  development. I am a natural problem solver, who have proven
                  myself by successfully completing projects for IT
                  consultancies, web design agencies, and IT departments.
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
        );
      }}
    </InView>
  );
}
