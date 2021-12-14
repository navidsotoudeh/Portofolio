//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        textAlign : "center",
      },
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC815",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    width: "13rem",
    height: "5rem",
  },
  dvd: {
    background: "#FFC815",
    width: "200px",
    variant: "fullWidth",
    height: "5px",
    [theme.breakpoints.down("sm")]: {
        width : "100%",
      },
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function HeaderInSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Box borderRadius={26} className={classes.headerText}>
        <h3
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            padding: "14px 30px",
          }}
        >
          {props.title}
        </h3>
      </Box>

      <h2
        style={{
          paddingLeft: "15px",
          fontSize: "53px",
          letterSpacing: "1px",
          fontFamily: "Montserrat",
        }}
      >
        {props.subtitle}
        <Divider className={classes.dvd} orientation="horizontal" />
      </h2>
    </div>
  );
}
