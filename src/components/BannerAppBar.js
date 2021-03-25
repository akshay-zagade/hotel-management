import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import Logo from "../resources/static/images/logoAL-Seven.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: "4px",
  },
  bannerFontColor: {
    color: "#fff",
  },
}));

function BannerAppBar() {
  const classes = useStyles();
  return (
    <AppBar
      position="relative"
      style={{ paddingTop: "50px", paddingBottom: "30px" }}
    >
      <Grid spacing={0} direction="row" container>
        <Grid
          item
          sm={4}
          xs={12}
          direction="column"
          justify="center"
          alignItems="center"
          spacing={0}
          container
        >
          <Grid item>
            <Link to="/">
              <img src={Logo} alt="Akshay Lodge" />
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          sm={8}
          xs={12}
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography gutterBottom variant="h2" className={classes.heading}>
              AKSHAY LODGE
            </Typography>
          </Grid>

          <Grid item>
            <Button
              size="small"
              variant="text"
              color="default"
              startIcon={<RoomIcon />}
              href="https://goo.gl/maps/Wzmj8dxSLC5ZEDgF8"
              target="_blank"
              rel="noreferrer"
              className={classes.bannerFontColor}
            >
              Zagade Complex, Hanuman Chowk, Jejuri, 412303, Maharashtra, India.
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="text"
              color="default"
              startIcon={<PhoneIcon />}
              href="tel:+918625936263"
              className={classes.bannerFontColor}
            >
              +91 8625936263
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default BannerAppBar;
