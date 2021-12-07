import React, { useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularPB(props) {
  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <CircularProgressbar
        value={props.completed}
        text={`${props.completed}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 4,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors

          textColor: "#000000",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
}
