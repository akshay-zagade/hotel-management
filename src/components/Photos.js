import { Typography } from "@material-ui/core";
import React from "react";
import PhotoPage from "./PhotoPage";

function Photos() {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
        PHOTOS
      </Typography>
      <PhotoPage />
    </div>
  );
}

export default Photos;
