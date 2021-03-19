import React from "react";
import { Grid } from "@material-ui/core";
import RoomCardSkeleton from "./RoomCardSkeleton";

function RoomPageSkeleton() {
  const numberOfCards = [1, 2, 3, 4, 5, 6];
  return (
    <Grid container direction="row" justify="space-evenly" spacing={3}>
      {numberOfCards.map((card) => (
        <RoomCardSkeleton key={card} />
      ))}
    </Grid>
  );
}

export default RoomPageSkeleton;
