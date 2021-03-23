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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography style={{ fontWeight: "bold" }}>
              Connect with us &nbsp;
              <FacebookIcon htmlColor="#3b5998" /> &nbsp;
              <InstagramIcon htmlColor="#cd486b" /> &nbsp;
              <TwitterIcon htmlColor="#00acee" />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          align="center"
        >
          <Box className={classes.overviewImage}>
            <img src={RoomOne} alt="Overview" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HotelOverview;
