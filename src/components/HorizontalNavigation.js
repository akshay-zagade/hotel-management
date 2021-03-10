import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    // border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
  navMenu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuFont: {
    fontWeight: "bold",
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
    marginRight: theme.spacing(4),
  },
}))(ToggleButtonGroup);

export default function HorizontalNavigation() {
  const [alignment, setAlignment] = React.useState("overview");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <Box elevation={0} className={classes.paper} width="100%">
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        flexgrow={2}
      >
        <ToggleButton
          value="overview"
          aria-label="overview"
          component={Link}
          to="/"
        >
          <Typography className={classes.menuFont}>overview</Typography>
        </ToggleButton>
        <ToggleButton
          value="rooms"
          aria-label="rooms"
          component={Link}
          to="/rooms"
        >
          <Typography className={classes.menuFont}>rooms</Typography>
        </ToggleButton>
        <ToggleButton
          value="local area"
          aria-label="local area"
          component={Link}
          to="/"
        >
          <Typography className={classes.menuFont}>local area</Typography>
        </ToggleButton>
        <ToggleButton value="map" aria-label="map" component={Link} to="/">
          <Typography className={classes.menuFont}>map</Typography>
        </ToggleButton>
        <ToggleButton
          value="photos"
          aria-label="photos"
          component={Link}
          to="/photos"
        >
          <Typography className={classes.menuFont}>photos</Typography>
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Box>
  );
}
