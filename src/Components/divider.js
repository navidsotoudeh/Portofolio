import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  dvd: {
    background: "red",
    width: "20px",
    variant: "middle",
    marginRight: "5px",
    marginLeft: "5px",
  },
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Divider className={classes.dvd} orientation="vertical" flexItem />
      <MenuIcon></MenuIcon>
    </Grid>
  );
}
