import React, { useEffect, useState } from "react";
import "../styles/commentForTest.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

export default function CommentForTest() {
  const orginalArray = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
    { id: 7, name: "g" },
    { id: 8, name: "h" },
    { id: 9, name: "i" },
    { id: 10, name: "j" },
  ];
  const [show, setShow] = useState(true);
  const [currentArray, setCurrentArray] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setStartIndex((previous) => previous + 1);
    }, 5000);

    filledCurrentArray();
  }, []);
  useEffect(() => {
    filledCurrentArray();
  }, [startIndex]);

  function filledCurrentArray() {
    let newArray = [
      orginalArray[startIndex % 10],
      orginalArray[(startIndex + 1) % 10],
      orginalArray[(startIndex + 2) % 10],
      orginalArray[(startIndex + 3) % 10],
      orginalArray[(startIndex + 4) % 10],
    ];
    setCurrentArray(newArray);
  }

  console.log(startIndex);
  console.log(currentArray);

  return (
    <>
      <CSSTransition
        in={show}
        timeout={350}
        classNames="myTable"
        unmountOnExit
        appear
      >
        <TransitionGroup
          component="table"
          border="1"
          style={{
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th width="50%">ID</th>
              <th width="50%">Name</th>
            </tr>
          </thead>
          {orginalArray.map((element) => (
            <tr style={{ justifyContent: "center", alignItems: "center" }}>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <div>{element.id}</div>
              </td>
              <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                <div>{element.name}</div>
              </td>
            </tr>
          ))}
        </TransitionGroup>
      </CSSTransition>
    </>
  );
}
