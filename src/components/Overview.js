import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import HotelOverview from "./HotelOverview";
import KeyAmenities from "./KeyAmenities";
import OverviewPageCarousel from "./OverviewPageCarousel";

const useStyles = makeStyles({
  root: {
    height: 5,
    marginBottom: 20
  },
});

function Overview() {

  const classes = useStyles();
  return (
    <div>
      <OverviewPageCarousel />
      <HotelOverview />
      <Divider variant="middle" classes={{root: classes.root}}/>
      <KeyAmenities />
    </div>
  );
}

export default Overview;
