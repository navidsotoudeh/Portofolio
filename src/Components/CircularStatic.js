import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...props}
        size={100}
        thickness={2}
        style={{ width: "100px", height: "100px", color: "#9a5704" }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularStatic.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ navid, inView }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (inView) {
      setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress === navid ? navid : prevProgress + 1
        );
      }, 30);
    }
  }, [inView]);
  return <CircularProgressWithLabel value={progress} />;
}
