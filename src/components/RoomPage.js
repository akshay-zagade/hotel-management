import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import RoomDetailsDialog from "./RoomDetailsDialog";
import { fetchRoomData } from "../redux";
import { connect } from "react-redux";

function RoomPage({ roomData, fetchRoomData }) {
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
    fetchRoomData();
    return () => {
      console.log("from RoomPage", roomData);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {roomData.loading ? (
        <h1>Loading...</h1>
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
  console.log("From mapStateToProps: ", state);

  return {
    roomData: state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoomData: () => dispatch(fetchRoomData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
