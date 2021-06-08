import React, { useEffect, useState } from "react";
import LinearProgressBar from "./LinearProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import CircularPB from "./CircularProgressBar";

const useStyles = makeStyles((theme) => ({
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
    setCompletedOne(60);
  }, []);
  useEffect(() => {
    setCompletedTwo(70);
  }, []);
  useEffect(() => {
    setCompletedThree(80);
  }, []);

  useEffect(() => {
    setCompleted4(65);
  }, []);
  useEffect(() => {
    setCompleted5(75);
  }, []);
  useEffect(() => {
    setCompleted6(85);
  }, []);

  useEffect(() => {
    setCompleted7(70);
  }, []);
  useEffect(() => {
    setCompleted8(80);
  }, []);
  useEffect(() => {
    setCompleted9(90);
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <div className={classes.circular}>
          <CircularPB></CircularPB>
        </div>
        <div className={classes.linear}>
          <LinearProgressBar completed={completedOne} />
          <LinearProgressBar completed={completedTwo} />
          <LinearProgressBar completed={completedThree} />
        </div>
      </div>
      <div className={classes.section}>
        <div div className={classes.circular}></div>
        <div className={classes.linear}>
          <LinearProgressBar completed={completed4} />
          <LinearProgressBar completed={completed5} />
          <LinearProgressBar completed={completed6} />
        </div>
      </div>
      <div className={classes.section}>
        <div div className={classes.circular}></div>
        <div className={classes.linear}>
          <LinearProgressBar completed={completed7} />
          <LinearProgressBar completed={completed8} />
          <LinearProgressBar completed={completed9} />
        </div>
      </div>
    </div>
  );
}
