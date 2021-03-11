import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import RoomOTwo from '../resources/static/images/roomtwo.jfif'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  bottomButton:{
      backgroundColor:"#e4beb6",
      fontWeight: "bold"
  }
});

export default function RoomCard({handleClickOpen}) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={RoomOTwo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Deluxe Room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Guest room, 1 King, City view
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className={classes.bottomButton} onClick={handleClickOpen}>
            check rates
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
