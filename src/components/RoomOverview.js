import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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

export default function RoomOverview() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Room Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} direction="row" justify="flex-start">
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Room Features
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Air-conditioned" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Living/sitting area" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Hospitality Services
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Newspaper delivered to room on request" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="This room type does not offer hearing accessible rooms" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Room Amenities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} direction="row" justify="flex-start">
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Room Features
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Air-conditioned" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Living/sitting area" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Hospitality Services
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Newspaper delivered to room on request" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="This room type does not offer hearing accessible rooms" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>In-room Media</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} direction="row" justify="flex-start">
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Room Features
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Air-conditioned" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Living/sitting area" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.listHeading}
                  >
                    Hospitality Services
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText primary="Newspaper delivered to room on request" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="This room type does not offer hearing accessible rooms" />
                </ListItem>
                <ListItem>
                  <ListItemText primary=" 38sqm/409sqft" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
