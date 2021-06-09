//---------------------------------------------import module------------------------------------------------------------
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import data from "../data.json";
import HeaderInSection from "./headerInSection";
import CommentForTest from "./commentForTest";

//-----------------------------------CSS code---------------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  commentComponent: {
    backgroundColor: "#b3dcce",
    display: "flex",
    width: "100%",
    height: "150vh",
    paddingTop: "80px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "15px",
    paddingLeft: "15px",
  },
}));

//-----------------------main code--------------------------------------------------------------------------------------

export default function Comment(props) {
  const classes = useStyles();
  const title = data.COMMENT.title;
  const subtitle = data.COMMENT.subtitle;

  return (
    <InView onChange={props.onMount}>
      <Element name="comment" className={classes.commentComponent}>
        <div className={classes.main}>
          <HeaderInSection title={title} subtitle={subtitle} />
          <CommentForTest />
        </div>
      </Element>
    </InView>
  );
}
