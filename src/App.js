import "./App.css";
import Background from "./Components/Background";
import Appbar from "./Components/Appbar";
import React, { useState } from "react";
import Sections from "./Components/sections";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import HoverMenue from "./Components/hoverMenue";

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
    eA && setActiveSession("about");
    return eA;
  };
  const onResumeMount = (eR) => {
    eR && setActiveSession("resume");
    return eR;
  };
  const onSkillsMount = (eS) => {
    eS && setActiveSession("skills");
    return eS;
  };
  const onContactMount = (eC) => {
    eC && setActiveSession("contact");
    return eC;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <Appbar onClickk={handleOnClick} activeSession={activeSession} />
        <div className={classes.sectionsAndBackground}>
          <Background show={show} activeSession={activeSession} />
          <HoverMenue show={show} />
          <Sections
            onAboutMount={onAboutMount}
            onResumeMount={onResumeMount}
            onSkillsMount={onSkillsMount}
            onContactMount={onContactMount}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
