import React, { useEffect, useLayoutEffect, useState } from "react";
import "../styles/commentForTest.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import makeStyles from "@material-ui/core/styles/makeStyles";
import labtop from "../images/labtop.png";

export default function CommentForTest() {
  const useStyles = makeStyles((theme) => ({
    header: {
      width: "80%",
      height: "70px",
      backgroundColor: "wheat",
      display: "flex",
      justifyContent: "space-around",
      borderRadius: "1%",
      boxShadow: "1px 1px 1px #9E9E9E",
    },
    headerId: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      color: "grey",
    },
    commentRow: {
      width: "80%",
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "honeydew",
      marginTop: "5px",
      borderRadius: "1%",
      boxShadow: "1px 1px 1px #9E9E9E",
    },
    rowId: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  }));
  const classes = useStyles();

  const orginalArray = [
    { id: 1, name: "a", comment: "Here is your comment", img: labtop },
    { id: 2, name: "b", comment: "Here is your comment", img: labtop },
    { id: 3, name: "c", comment: "Here is your comment", img: labtop },
    { id: 4, name: "d", comment: "Here is your comment", img: labtop },
    { id: 5, name: "e", comment: "Here is your comment", img: labtop },
    { id: 6, name: "f", comment: "Here is your comment", img: labtop },
    { id: 7, name: "g", comment: "Here is your comment", img: labtop },
    { id: 8, name: "h", comment: "Here is your comment", img: labtop },
    { id: 9, name: "i", comment: "Here is your comment", img: labtop },
    { id: 10, name: "j", comment: "Here is your comment", img: labtop },
  ];
  const [currentArray, setCurrentArray] = useState([]);

  const [startIndex, setStartIndex] = useState(9);
  useEffect(() => {
    setInterval(() => {
      setStartIndex((previous) => (previous > 0 ? previous - 1 : 9));
    }, 3000);
    filledCurrentArray();
  }, []);

  useEffect(() => {
    filledCurrentArray();
  }, [startIndex]);

  function filledCurrentArray() {
    let newArray = [];
    newArray = [
      orginalArray[startIndex - 4 > 0 ? startIndex - 4 : startIndex + 5],
      orginalArray[startIndex - 3 > 0 ? startIndex - 3 : startIndex + 6],
      orginalArray[startIndex - 2 > 0 ? startIndex - 2 : startIndex + 7],
      orginalArray[startIndex - 1 > 0 ? startIndex - 1 : startIndex + 8],
      orginalArray[startIndex > 0 ? startIndex : startIndex + 9],
    ];
    setCurrentArray(newArray);
  }

  console.log(currentArray);
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------

  return (
    <div style={{ height: "90%" }}>
      <div className={classes.header}>
        <div className={classes.headerId}>ID</div>
        <div className={classes.headerId}>Name</div>
        <div className={classes.headerId}>Comment</div>
        <div className={classes.headerId}>Image</div>
      </div>
      <TransitionGroup>
        {currentArray.map((element) => (
          <CSSTransition key={element.id} timeout={3000} classNames="navid">
            <div className={classes.commentRow}>
              <div className={classes.rowId}>{element.id}</div>
              <div className={classes.rowId}>{element.name}</div>
              <div className={classes.rowId}>{element.comment}</div>
              <div className={classes.rowId}>
                {" "}
                <img
                  src={element.img}
                  alt={"comment_photo"}
                  style={{ width: "20%", height: "15%" }}
                />
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
