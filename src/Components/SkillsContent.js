import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InView } from "react-intersection-observer";
import Typography from "@material-ui/core/Typography";
import CircularStatic from "./CircularStatic";
import LinearStatic from "./LinearStatic";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    width: "80%",
    display: "flex",
    height: "30%",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  circular: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  linear: {
    width: "70%",
  },
}));

export default function SkillsContent() {
  const classes = useStyles();
  const [inView, setInView] = useState(false);
  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => {
        console.log("inView in 85", inView);
        return (
          <div ref={ref} className={classes.main}>
            <div className={classes.section}>
              <div className={classes.circular}>
                <CircularStatic navid={90} inView={inView} />
                <Typography variant="subtitle1">
                  FRONT-END TECHNOLOGIES
                </Typography>
              </div>
              <div className={classes.linear}>
                <div>
                  <Typography variant="subtitle2">HTML5 / CCS 3</Typography>
                  <LinearStatic navid={85} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">JAVASCRIPT</Typography>
                  <LinearStatic navid={95} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">REACT</Typography>
                  <LinearStatic navid={90} inView={inView} />
                </div>
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular}>
                <CircularStatic navid={70} inView={inView} />
                <Typography variant="subtitle1">
                  BACK-END TECHNOLOGIES
                </Typography>
              </div>
              <div className={classes.linear}>
                <div>
                  <Typography variant="subtitle2">Php</Typography>
                  <LinearStatic navid={65} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">NodeJs</Typography>
                  <LinearStatic navid={70} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">MongoDB</Typography>
                  <LinearStatic navid={70} inView={inView} />
                </div>
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular}>
                <CircularStatic navid={65} inView={inView} />
                <Typography variant="subtitle1">SERVER TECHNOLOGIES</Typography>
              </div>
              <div className={classes.linear}>
                <div>
                  <Typography variant="subtitle2">Nginx</Typography>
                  <LinearStatic navid={65} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">Docker</Typography>
                  <LinearStatic navid={60} inView={inView} />
                </div>
                <div>
                  <Typography variant="subtitle2">Apache</Typography>
                  <LinearStatic navid={70} inView={inView} />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </InView>
  );
}
