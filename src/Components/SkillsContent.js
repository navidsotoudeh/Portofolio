import React, { useEffect, useState } from "react";
import LinearProgressBar from "./LinearProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import CircularPB from "./CircularProgressBar";
import { InView } from "react-intersection-observer";

const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  circular: {
    width: "30%",
  },
  linear: {
    width: "70%",
  },
}));

export default function SkillsContent() {
  const classes = useStyles();
  const [inView, setInView] = React.useState(false);

  const [completedOne, setCompletedOne] = useState(0);
  const [completedTwo, setCompletedTwo] = useState(0);
  const [completedThree, setCompletedThree] = useState(0);

  const [completed4, setCompleted4] = useState(0);
  const [completed5, setCompleted5] = useState(0);
  const [completed6, setCompleted6] = useState(0);

  const [completed7, setCompleted7] = useState(0);
  const [completed8, setCompleted8] = useState(0);
  const [completed9, setCompleted9] = useState(0);

  useEffect(() => {
    setCompletedOne(inView ? 60 : 0);
    setCompletedTwo(inView ? 70 : 0);
    setCompletedThree(inView ? 80 : 0);
    setCompleted4(inView ? 65 : 0);
    setCompleted5(inView ? 75 : 0);
    setCompleted6(inView ? 85 : 0);
    setCompleted7(inView ? 70 : 0);
    setCompleted8(inView ? 80 : 0);
    setCompleted9(inView ? 90 : 0);
    //alert(inView);
  }, [inView]);

  return (
    <div className={classes.main}>
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <div ref={ref}>
            <div className={classes.section}>
              {console.log("in view:", inView)}
              <div className={classes.circular}>
                <CircularPB />
              </div>
              <div className={classes.linear}>
                <LinearProgressBar completed={completedOne} />
                <LinearProgressBar completed={completedTwo} />
                <LinearProgressBar completed={completedThree} />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular} />
              <div className={classes.linear}>
                <LinearProgressBar completed={completed4} />
                <LinearProgressBar completed={completed5} />
                <LinearProgressBar completed={completed6} />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular} />
              <div className={classes.linear}>
                <LinearProgressBar completed={completed7} />
                <LinearProgressBar completed={completed8} />
                <LinearProgressBar completed={completed9} />
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
