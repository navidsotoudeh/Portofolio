import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import SchoolIcon from "@material-ui/icons/School";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  schoolIcon: { fontSize: 20, color: "#ffc815", transform: "scale(1.5)" },
  fiberManualRecordIcon: {
    fontSize: 20,
    color: "#000000",
    transform: "scale(1)",
  },
  divider: {
    marginTop: 20,
    width: "100%",
    margin: "15px auto",
  },
}));

export default function ResumeContent() {
  const classes = useStyles();

  const [openZero, setOpenZero] = React.useState(true);
  const [openOne, setOpenOne] = React.useState(true);
  const [openTwo, setOpenTwo] = React.useState(true);
  const [openThree, setOpenThree] = React.useState(true);

  const handleClickZero = () => {
    setOpenZero(!openZero);
  };
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
      <ListItem button onClick={handleClickZero}>
        <ListItemIcon>
          <WorkOutlineIcon
            style={{ fontSize: 20, color: "#ffc815", transform: "scale(1.5)" }}
          />
        </ListItemIcon>
        <ListItemText primary="Veunex Co" />
        {openZero ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openZero} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon
                className={classes.fiberManualRecordIcon}
              />
            </ListItemIcon>
            <ListItemText primary="Frontend Developer (2020-2021)" />
          </ListItem>
        </List>
      </Collapse>
      <Divider className={classes.divider} />
      <ListItem button onClick={handleClickOne}>
        <ListItemIcon>
          <WorkOutlineIcon
            style={{ fontSize: 20, color: "#ffc815", transform: "scale(1.5)" }}
          />
        </ListItemIcon>
        <ListItemText primary="Arayeh Co" />
        {openOne ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon
                className={classes.fiberManualRecordIcon}
              />
            </ListItemIcon>
            <ListItemText primary="Web-GIS Engineer (2019-2020)" />
          </ListItem>
        </List>
      </Collapse>
      <Divider className={classes.divider} />
      <ListItem button onClick={handleClickTwo}>
        <ListItemIcon>
          <SchoolIcon className={classes.schoolIcon} />
        </ListItemIcon>
        <ListItemText primary="Khaje Nasir Toosi" />
        {openTwo ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTwo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon
                className={classes.fiberManualRecordIcon}
              />
            </ListItemIcon>
            <ListItemText primary="GIS (2017-2019)" />
          </ListItem>
        </List>
      </Collapse>
      <Divider className={classes.divider} />
      <ListItem button onClick={handleClickThree}>
        <ListItemIcon>
          <SchoolIcon className={classes.schoolIcon} />
        </ListItemIcon>
        <ListItemText primary="University Of Tehran" />
        {openThree ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openThree} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon
                className={classes.fiberManualRecordIcon}
              />
            </ListItemIcon>
            <ListItemText primary="Civil Engineering (2012-2017)" />
          </ListItem>
        </List>
      </Collapse>
      <Divider className={classes.divider} />
    </List>
  );
}
