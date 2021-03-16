import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import RoomDetailsDialog from "./RoomDetailsDialog";
import { fetchRoomData } from "../redux";
import { connect } from "react-redux";
import RoomPageSkeleton from "./RoomPageSkeleton";

function RoomPage({ roomData, fetchRoom }) {
  const [open, setOpen] = useState(false);
  const [roomDialogDetails, setRoomDialogDetails] = useState({});

  const handleClickOpen = (roomDetails) => {
    setOpen(true);
    setRoomDialogDetails(roomDetails);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchRoom();
  }, [fetchRoom]);

  return (
    <div style={{ padding: 20, marginTop: 40 }}>
      {roomData.loading ? (
        <RoomPageSkeleton/>
      ) : (
        <Grid container direction="row" justify="space-evenly" spacing={3}>
          {roomData &&
            roomData.data &&
            roomData.data.map((room) => (
              <RoomCard
                key={room.id}
                handleClickOpen={() => handleClickOpen(room)}
                {...room}
              />
            ))}
        </Grid>
      )}
      <RoomDetailsDialog
        handleClose={handleClose}
        open={open}
        roomDetails={roomDialogDetails}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    roomData: state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoom: () => dispatch(fetchRoomData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
