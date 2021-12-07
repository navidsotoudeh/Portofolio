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
    //alignItems: "center",
    //justifyContent: "space-between",
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  circular: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    setCompletedOne(60); //setCompleted6(inView ? 85 : 0);
    setCompletedTwo(70);
    setCompletedThree(80);
    setCompleted4(65);
    setCompleted5(75);
    setCompleted6(85);
    setCompleted7(70);
    setCompleted8(80);
    setCompleted9(90);
    //alert(inView);
  }, [inView]);
  //--------------------------------------------------
  const [completedOneCPB, setCompletedOneCPB] = useState(0);
  const [completedTwoCPB, setCompletedTwoCPB] = useState(0);
  const [completedThreeCPB, setCompletedThreeCPB] = useState(0);

  useEffect(() => {
    setCompletedOneCPB(90); //CPB : Circular Progress Bar

    //alert(inView);
  }, [inView]);

  useEffect(() => {
    setCompletedTwoCPB(70); //CPB : Circular Progress Bar

    //alert(inView);
  }, [inView]);

  useEffect(() => {
    setCompletedThreeCPB(80); //CPB : Circular Progress Bar

    //alert(inView);
  }, [inView]);

  //-------------------------------------------------------

  return (
    <div className={classes.main}>
      <InView onChange={setInView}>
        {({ ref, inView }) => (
          <div ref={ref}>
            <div className={classes.section}>
              {console.log("in view:", inView)}
              <div className={classes.circular}>
                <CircularPB completed={completedOneCPB} />
                <span style={{ width: "70%", backgroundColor: "red" }}>
                  Web Development
                </span>
              </div>
              <div className={classes.linear}>
                <LinearProgressBar completed={completedOne} />
                <LinearProgressBar completed={completedTwo} />
                <LinearProgressBar completed={completedThree} />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular}>
                <CircularPB completed={completedTwoCPB} />
                <span style={{ width: "70%", backgroundColor: "yellow" }}>
                  Data base
                </span>
              </div>
              <div className={classes.linear}>
                <LinearProgressBar completed={completed4} />
                <LinearProgressBar completed={completed5} />
                <LinearProgressBar completed={completed6} />
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.circular}>
                <CircularPB completed={completedThreeCPB} />

                <span style={{ width: "70%", backgroundColor: "green" }}>
                  SERVER TECHNOLOGIES
                </span>
              </div>
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