import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

function CircularProgressWithLabel(props) {
  const useStyles = makeStyles((theme) => ({
    circularProgress: {
      color: "#4f4327",
      [theme.breakpoints.down("sm")]: {
        color: "#4f4327",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...props}
        size={110}
        thickness={2}
        className={classes.circularProgress}
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
