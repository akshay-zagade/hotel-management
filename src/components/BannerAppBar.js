import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import HotelIcon from "@material-ui/icons/Hotel";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";

function BannerAppBar() {
  return (
    <AppBar position="relative" style={{ padding: "80px 0 20px" }}>
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
            <HotelIcon fontSize="large" />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h3">
              HOTEL
            </Typography>
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
            <Typography gutterBottom variant="h4">
              HOTEL AK
            </Typography>
          </Grid>

          <Grid item>
            <Button
              size="small"
              variant="text"
              color="default"
              startIcon={<RoomIcon />}
              href="#"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="text"
              color="default"
              startIcon={<PhoneIcon />}
              href="tel:+918625936263"
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
