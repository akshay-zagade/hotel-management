import React from "react";
import RoomTwo from "../resources/static/images/roomone.jfif";
import RoomOne from "../resources/static/images/roomtwo.jfif";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }
}));

function OverviewPageCarousel() {
  const classes = useStyles();
  var items = [
    {
      title: "Random Name #1",
      image: RoomOne,
    },
    {
      title: "Random Name #2",
      image: RoomTwo,
    }
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
