import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "98%",

    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ResumeContent() {
  const classes = useStyles();

  const [openOne, setOpenOne] = React.useState(true);
  const [openTwo, setOpenTwo] = React.useState(true);
  const [openThree, setOpenThree] = React.useState(true);

  const handleClickOne = () => {
    setOpenOne(!openOne);
  };
  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };
  const handleClickThree = () => {
    setOpenThree(!openThree);
  };

  return (
    <List className={classes.root}>
      <ListItem button onClick={handleClickOne}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Arayeh Co" />
        {openOne ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Web-GIS Engineer" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickTwo}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Kahje NAsir Toosi" />
        {openTwo ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="GIS" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickThree}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="University OF Tehran" />
        {openThree ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary="Civil Engineering" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
