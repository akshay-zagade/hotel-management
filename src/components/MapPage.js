import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import MapImage from "../resources/static/images/map-image.png";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    maxWidth: "80%",
  },
  travelInfo: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

function MapPage() {
  const classes = useStyles();
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>MAP & TRANSPORTATION</h1> */}
      <Typography variant="h4" align="center">
        MAP & TRANSPORTATION
      </Typography>
      <Grid item align="center">
        <Card className={classes.root}>
          <CardActionArea>
            <a
              href="https://goo.gl/maps/Wzmj8dxSLC5ZEDgF8"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                alt="Map"
                height="auto"
                image={MapImage}
                title="MAP"
              />
            </a>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        container
        direction="row"
        align="center"
        className={classes.travelInfo}
        style={{ marginTop: 40, padding: 20 }}
      >
        <Grid item sm={6}>
          <Typography variant="h4">Pune to Jejuri</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Distance - 50 km" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Travel Options - MSRTC Buses, PMT Buses, Trains etc" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Estimated Bus Fare - 70 INR (one way)" />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4">Mumbai to Jejuri</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Distance - 200 km" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Travel Options - MSRTC Buses, Private Buses, Trains etc" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Estimated Bus Fare - 250 INR (one way)" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default MapPage;
