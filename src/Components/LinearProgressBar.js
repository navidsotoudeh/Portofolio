import React from "react";

const LinearProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: "90%",
    backgroundColor: "#eee",
    borderRadius: 5,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#ffc815",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 5s ease-in",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default LinearProgressBar;
