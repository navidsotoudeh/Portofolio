import React, { useEffect, useState } from "react";
import LinearProgressBar from "./LinearProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import CircularPB from "./CircularProgressBar";
import { InView } from "react-intersection-observer";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    width: "80%",
    display: "flex",
    height: "35%",
    flexDirection: "row",
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
  }, [inView]);

  //-------------------------------------------------------

  return (
    <InView onChange={setInView}>
      {({ ref, inView }) => (
        <div ref={ref}>
          <div className={classes.section}>
            <div className={classes.circular}>
              <div
                style={{
                  width: "70%",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularPB completed={completedThreeCPB} />
              </div>
              <Typography variant="subtitle1">SERVER TECHNOLOGIES</Typography>
            </div>
            <div className={classes.linear}>
              <LinearProgressBar completed={completed7} />
              <LinearProgressBar completed={completed8} />
              <LinearProgressBar completed={completed9} />
            </div>
          </div>
          {/*//==========================================================================================*/}
          <div className={classes.section}>
            <div className={classes.circular}>
              <div
                style={{
                  width: "70%",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularPB completed={completedThreeCPB} />
              </div>
              <Typography variant="subtitle1">SERVER TECHNOLOGIES</Typography>
            </div>
            <div className={classes.linear}>
              <LinearProgressBar completed={completed7} />
              <LinearProgressBar completed={completed8} />
              <LinearProgressBar completed={completed9} />
            </div>
          </div>
          {/*//==========================================================================================*/}
          <div className={classes.section}>
            <div className={classes.circular}>
              <div
                style={{
                  width: "70%",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularPB completed={completedThreeCPB} />
              </div>
              <Typography variant="subtitle1">SERVER TECHNOLOGIES</Typography>
            </div>
            <div className={classes.linear}>
              <LinearProgressBar completed={completed7} />
              <LinearProgressBar completed={completed8} />
              <LinearProgressBar completed={completed9} />
            </div>
          </div>
          {/*//==========================================================================================*/}
        </div>
      )}
    </InView>
  );
}
