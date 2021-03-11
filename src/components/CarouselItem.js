import { CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },

  mediaTitle: {
    position: "absolute",
    bottom: 0,
    textOverflow: "ellipsis",
    padding: "15px",
    backgroundColor: "#000",
    color: "#fff",
    opacity: 0.6,
    width: "100%",
    textAlign: "center",
  },
});

function CarouselItem({ image, title, height = 250 }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardMedia
        component="img"
        alt={title}
        height={height}
        image={image}
        title={title}
      />
      <Typography className={classes.mediaTitle} variant="h5">
        {title}
      </Typography>
    </div>
  );
}

export default CarouselItem;
