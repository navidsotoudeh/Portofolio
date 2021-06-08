import React, { useState } from "react";
import "../styles/cssTransitionComponent.css";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import { makeStyles } from "@material-ui/core/styles";
import labtop from "../images/labtop.png";
import miladtower from "../images/miladtower.png";
import road from "../images/road.png";
import shoes from "../images/shoes.png";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "98%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tableOfComment: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function CommentContent(props) {
  const classes = useStyles();

  const content = [
    { id: 1, name: "akbar", img: labtop },
    { id: 2, name: "rahman", img: miladtower },
    { id: 3, name: "rahim", img: road },
    { id: 4, name: "navid", img: shoes },
  ];
  const [items, setItems] = useState([]);
  const [lastId, setLastId] = useState(0);

  const handleAdd = () => {
    setItems([...items, content[lastId]]);
    setLastId(lastId + 1);
  };

  const handleDelete = (index) => {
    let newItems = items.filter((el) => el.id !== index);
    setItems(newItems);
  };

  return (
    <div className={classes.main}>
      <div className={classes.tableOfComment}>
        <button onClick={handleAdd} style={{ fontWeight: "bold" }}>
          Add
        </button>
        <table
          border="1"
          style={{
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th width="50%">Name</th>
              <th width="50%">Images</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {items.map((element) => (
              <CSSTransition key={element.id} timeout={300} classNames="fade">
                <tr style={{ justifyContent: "center", alignItems: "center" }}>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <div>{element.name}</div>
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <img
                      src={element.img}
                      style={{ width: "40%" }}
                      alt={"photoo"}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(element.id)}>
                      <p>Delete Comment</p>
                    </button>
                  </td>
                </tr>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </table>
      </div>
    </div>
  );
}
