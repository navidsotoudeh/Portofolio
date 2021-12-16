import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const LinearStatic = (props) => {
  const { navid, inView } = props;
  const [progress, setProgress] = useState(0);

  const useStyles = makeStyles((theme) => ({
    containerStyles: {
      height: 17.5,
      width: "100%",
      backgroundColor: "#f1eaea",
    },
    fillerStyles: {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: "#ffc815",
      borderRadius: "inherit",
      textAlign: "right",
    },
  }));
  useEffect(() => {
    if (inView) {
      setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress === navid ? navid : prevProgress + 1
        );
      }, 30);
    }
  }, [inView]);
  const classes = useStyles();
  return (
    <div className={classes.containerStyles}>
      <div className={classes.fillerStyles}>
        <span
          style={{
            fontSize: "80%",
          }}
        >{`${progress}% `}</span>
      </div>
    </div>
  );
};

export default LinearStatic;
