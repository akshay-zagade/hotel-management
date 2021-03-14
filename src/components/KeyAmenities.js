import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import WifiIcon from "@material-ui/icons/Wifi";

const useStyles = makeStyles((theme) => ({
  keyAmenitiesIconPaper: {
    padding: 10,
    height: "100%",
    width: 150,
    borderRadius: 20,
  },
  keyAmenitiesHeader: {
    padding: 15,
  },
  keyAmenitiesBody: {
    padding: 15,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: 330,
    },
  },
}));

function KeyAmenities() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item align="center" className={classes.keyAmenitiesHeader}>
          <Typography variant="h4">KEY AMENITIES</Typography>
        </Grid>
        <Grid
          item
          container
          className={classes.keyAmenitiesBody}
          justify="space-evenly"
        >
          <Grid item align="center">
            <Paper
              elevation={5}
              square={false}
              className={classes.keyAmenitiesIconPaper}
            >
              <InvertColorsIcon fontSize="large" />{" "}
              <Typography> 24*7 Water </Typography>
            </Paper>
          </Grid>
          <Grid item align="center">
            <Paper
              elevation={5}
              square={false}
              className={classes.keyAmenitiesIconPaper}
            >
              <WifiIcon fontSize="large" /> <Typography> Free Wifi </Typography>
            </Paper>
          </Grid>
          <Grid item align="center">
            <Paper
              elevation={5}
              square={false}
              className={classes.keyAmenitiesIconPaper}
            >
              <LocalParkingIcon fontSize="large" />{" "}
              <Typography> Parking Lot</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default KeyAmenities;
