import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

function OverviewPageCarousel() {
  const classes = useStyles();
  var items = [
    {
      title: "Random Name #1",
      image: "https://source.unsplash.com/1280x720/?room,bed",
    },
    {
      title: "Random Name #2",
      image: "https://source.unsplash.com/1280x720/?room,hotel",
    },
  ];
  return (
    <div className={classes.root}>
      <Carousel animation="slide" transition="100ms">
        {items.map((item, i) => (
          <CarouselItem key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

export default OverviewPageCarousel;
