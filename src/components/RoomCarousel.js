import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import RoomTwo from '../resources/static/images/roomtwo.jfif'
import RoomOne from '../resources/static/images/roomone.jfif'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginBottom: theme.spacing(5),
    },
    heading: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: "bold",
    },
    listHeading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: "bold",
    },
  }));

function RoomCarousel() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={RoomTwo} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={RoomOne}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={RoomTwo}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default RoomCarousel;
