import React, { useState, useEffect } from "react";

const LinearStatic = (props) => {
  const { navid, inView } = props;
  const [progress, setProgress] = useState(0);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#f1eaea",
    marginBottom: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#ffc815",
    borderRadius: "inherit",
    textAlign: "right",
  };

  useEffect(() => {
    if (inView) {
      setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress === navid ? navid : prevProgress + 1
        );
      }, 30);
    }
  }, [inView]);
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={{ height: "100%" }}>{`${progress}% `}</span>
      </div>
    </div>
  );
};

export default LinearStatic;
