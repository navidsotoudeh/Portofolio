import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularPB(props) {
  const [valueEnd, setValueEnd] = React.useState(0);

  useEffect(() => {
    setValueEnd(90);
  }, []);

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <CircularProgressbar
        styles={{ pathTransitionDuration: 0.15 }}
        duration={4.4}
        value={valueEnd}
        text={`JS : ${valueEnd}%`}
      />
    </div>
  );
}
