//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { scroller } from "react-scroll";
import { InView } from "react-intersection-observer";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: " #191919",
    width: "100%",
    justifyContent: "space-between",
    padding: "0px",
    position: "fixed",
    zIndex: "2",
  },
  lnavbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  myName: {
    display: "flex",
    flexDirection: " row",
    backgroundColor: "#FFC815",
    alignItems: "center",
    justifyContent: "center",
    height: "70px",
    width: "150px",
    color: "black",
  },
  menueIcon: {
    display: "flex",
    marginRight: theme.spacing(2),
    alignSelf: "center",
    alignItems: "center",
    color: "white",
    height: "50px",
    transition: "all 0.5s ease-out ",
    "&:hover": {
      color: "#FFC815",
    },
    transform: "scale(1.8)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Grid: {
    alignItems: "center",
  },
  dvd: {
    background: "grey",
    width: "2px",
    variant: "fullWidth",
    color: "textSecondary",
    marginRight: "4px",
    marginLeft: "2px",
  },
  rnavbar: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    width: "60%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    display: "flex",
    backgroundColor: "#292929",
    color: " white",
    borderRadius: 0,
    height: "50px",
    width: "150px",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-out ",
    "&:hover": {
      color: "#FFC815",
      backgroundColor: "#292929",
      //fontSize: "0.5rem",
    },
  },
  title: {
    fontSize: "80%",
    height: "100%",
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function Appbar({ onClickk, activeSession }) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <div className={classes.lnavbar}>
        <div className={classes.myName}>Navid Sotoudeh</div>
        <div className={classes.menueIcon} onClick={onClickk}>
          <Grid container className={classes.Grid}>
            <Divider className={classes.dvd} orientation="vertical" flexItem />
            <MenuIcon></MenuIcon>
          </Grid>
        </div>
      </div>
      <div className={classes.rnavbar}>
        <Button
          style={{
            backgroundColor: activeSession === "about" ? "#FFC815" : "#292929",
          }}
          className={classes.button}
          onClick={() =>
            scroller.scrollTo("about", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          <Typography className={classes.title}>About</Typography>
        </Button>
        <Button
          style={{
            backgroundColor: activeSession === "resume" ? "#FFC815" : "#292929",
          }}
          className={classes.button}
          onClick={() =>
            scroller.scrollTo("resume", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          <Typography className={classes.title}>Resume</Typography>
        </Button>
        <Button
          style={{
            backgroundColor: activeSession === "skills" ? "#FFC815" : "#292929",
          }}
          className={classes.button}
          onClick={() =>
            scroller.scrollTo("skills", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          <Typography className={classes.title}>skills</Typography>
        </Button>
        <Button
          style={{
            backgroundColor:
              activeSession === "contact" ? "#FFC815" : "#292929",
          }}
          className={classes.button}
          onClick={() =>
            scroller.scrollTo("contact", {
              duration: 1500,
              smooth: "easeOutQuart",
            })
          }
        >
          <Typography className={classes.title}>Contact</Typography>
        </Button>
      </div>
    </Toolbar>
  );
}
