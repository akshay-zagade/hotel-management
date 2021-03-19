import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    flexGrow: 1,
  },
}));

export default function NavigationTab(props) {
  const { history } = props;
  const classes = useStyles();
  const routes = {
    0: "/",
    1: "/rooms",
    2: "/localarea",
    3: "/map",
    4: "/photos",
  };

  const location = (value) => {
    switch (value) {
      case "/":
      case "/rooms":
      case "/localarea":
      case "/map":
      case "/photos":
        return true;
      default:
        return false;
    }
  };

  return (
    <Tabs
      className={classes.paper}
      centered
      value={
        location(history.location.pathname) ? history.location.pathname : false
      }
    >
      <Tab
        label={<Typography>overview</Typography>}
        value={routes[0]}
        component={Link}
        to={routes[0]}
      />
      <Tab
        label={<Typography>rooms</Typography>}
        value={routes[1]}
        component={Link}
        to={routes[1]}
      />
      <Tab
        label={<Typography>local area</Typography>}
        value={routes[2]}
        component={Link}
        to={routes[2]}
      />
      <Tab
        label={<Typography>map</Typography>}
        value={routes[3]}
        component={Link}
        to={routes[3]}
      />
      <Tab
        label={<Typography>photos</Typography>}
        value={routes[4]}
        component={Link}
        to={routes[4]}
      />
    </Tabs>
  );
}
