import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import RoomOne from "../resources/static/images/hotel.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  overviewText: {
    margin: 15,
    padding: 15,
  },
  overviewImage: {
    margin: 15,
    padding: 15,
  },
}));

function HotelOverview() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} direction="row">
        <Grid item xs={12} sm={6}>
          <Box className={classes.overviewText}>
            <Typography variant="h4" gutterBottom>
              PLAN YOUR STAY AT OUR LODGE IN JEJURI
            </Typography>
            <Typography gutterBottom>
              Experience a good service at economic cost. Ideally situated in
              center of the Jejuri city (On the way to Khandoba temple). Our
              lodge is an ideal destination for Khandoba devotees. We provide
              different types of rooms including AC-Delux Room, Delux Room,
              Semi-Delux Room with clean bathrooms etc. We also provide big hall
              to accommodate 20-25 people. We provide home made lunch or dinner
              on demand. We look forward to making your visit truly remarkable
              at Akshay Lodge, Jejuri.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Connect with us &nbsp;
              <FacebookIcon htmlColor="#3b5998" /> &nbsp;
              <InstagramIcon htmlColor="#cd486b" /> &nbsp;
              <TwitterIcon htmlColor="#00acee" />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} align="center">
          <Box className={classes.overviewImage}>
            <img src={RoomOne} alt="Overview" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HotelOverview;
