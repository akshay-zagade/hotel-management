import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PhotoCard(props) {
  const classes = useStyles();
  const { title, description, imageUrl, handleClickOpen } = props;
  const photoDialogInfo = {
    title,
    description,
    imageUrl,
  };

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea onClick={() => handleClickOpen(photoDialogInfo)}>
          <CardMedia
            component="img"
            alt="Room"
            height="200"
            image={imageUrl}
            title={title}
          />
        </CardActionArea>
        <CardActions>
          <Typography variant="h5" component="h2">
            <FormatAlignLeftIcon /> {title}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
