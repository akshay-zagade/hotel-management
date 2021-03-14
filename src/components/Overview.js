import React from "react";
import HotelOverview from "./HotelOverview";
import OverviewPageCarousel from "./OverviewPageCarousel";

function Overview() {
  return (
    <div>
      <OverviewPageCarousel />
      <HotelOverview />
    </div>
  );
}

export default Overview;
