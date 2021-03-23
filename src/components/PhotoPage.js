import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import PhotoDialog from "./PhotoDialog";

function PhotoPage() {
  const [open, setOpen] = useState(false);
  const [photoDialogDetails, setPhotoDialogDetails] = useState({});

  const handleClickOpen = (photoDialogDetails) => {
    setOpen(true);
    setPhotoDialogDetails(photoDialogDetails);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: 20, marginTop: 40 }}>
      <Grid container direction="row" justify="space-evenly" spacing={3}>
        {photoData &&
          photoData.map((photo, index) => (
            <PhotoCard
              key={index}
              {...photo}
              handleClickOpen={handleClickOpen}
            />
          ))}
      </Grid>
      <PhotoDialog
        handleClose={handleClose}
        open={open}
        photoDetails={photoDialogDetails}
      />
    </div>
  );
}

const photoData = [
  {
    title: "Room1",
    description:
      "it to make a type specimen book. It has survived not only five centuries, ",
    imageUrl: "https://source.unsplash.com/1280x720/?room,bed",
  },
  {
    title: "Room2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?hotel,bed",
  },
  {
    title: "Room3",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?room,hotel",
  },
  {
    title: "Room4",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?room,bed",
  },
  {
    title: "Room5",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?hotel,bed",
  },
  {
    title: "Room6",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?temple",
  },
  {
    title: "Room7",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?room,bed,hotel",
  },
  {
    title: "Room8",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imageUrl: "https://source.unsplash.com/1280x720/?caves",
  },
];

export default PhotoPage;
