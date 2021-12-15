import React from "react";

const LinearProgressBar = (props) => {
  const { progress } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#eee",
    marginBottom: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#ffc815",
    borderRadius: "inherit",
    textAlign: "right",
    //transition: "width 5s ease-in",
  };

  const labelStyles = {
    color: "black",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}% `}</span>
      </div>
    </div>
  );
};

export default LinearProgressBar;
