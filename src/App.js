import "./App.css";
import Background from "./Components/Background";
import Appbar from "./Components/Appbar";
import React, { useState } from "react";
import Sections from "./Components/sections";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  sectionsAndBackground: {
    position: "static ",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };

  const [activeSession, setActiveSession] = useState();

  const onAboutMount = (eA) => {
    // console.log(eA + "about");
    eA && setActiveSession("about");
    return eA;
  };
  const onResumneMount = (eR) => {
    // console.log(eR + "Resume");
    eR && setActiveSession("resume");
    return eR;
  };
  const onSkillsMount = (eS) => {
    eS && setActiveSession("skills");
    return eS;
  };
  const onCommentMount = (eCo) => {
    eCo && setActiveSession("comment");
    return eCo;
  };
  const onContactMount = (eC) => {
    eC && setActiveSession("contact");
    return eC;
  };

  return (
    <>
      <div className={classes.main}>
        <Appbar onClickk={handleOnClick} activeSession={activeSession} />
        <div className={classes.sectionsAndBackground}>
          <Background show={show} activeSession={activeSession} />
          <Sections
            onAboutMount={onAboutMount}
            onResumneMount={onResumneMount}
            onSkillsMount={onSkillsMount}
            onCommentMount={onCommentMount}
            onContactMount={onContactMount}
          />
        </div>
      </div>
    </>
  );
}

export default App;
