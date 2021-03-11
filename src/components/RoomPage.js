import { Grid } from "@material-ui/core";
import React from "react";
import RoomCard from "./RoomCard";
import RoomDetailsDialog from "./RoomDetailsDialog";

function RoomPage() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ padding: 20, marginTop:40 }}>
      <Grid container direction="row" justify="space-evenly" spacing={3}>
        <RoomCard handleClickOpen={handleClickOpen} />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </Grid>
      <RoomDetailsDialog
        handleClose={handleClose}
        open={open}
      />
    </div>
  );
}

export default RoomPage;
