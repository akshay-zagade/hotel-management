import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
});

export default function RoomCardSkeleton() {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <Skeleton variant="rect" height={140} />
          <CardContent>
            <Typography gutterBottom variant="h4">
              <Skeleton />
            </Typography>
            <Skeleton />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Skeleton variant="rect" width="30%" height={30} />
        </CardActions>
      </Card>
    </Grid>
  );
}
