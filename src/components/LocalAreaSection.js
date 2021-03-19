import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
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
    fontSize: theme.typography.pxToRem(32),
  },
  listHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: "bold",
    color:"#ef5350"
  },
}));

export default function LocalAreaSection({ localAreaInfo }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {localAreaInfo &&
        localAreaInfo.map((feature) => (
          <Accordion expanded defaultExpanded key={feature.id}>
            <AccordionSummary
              aria-controls={`${feature.itemName}bh-content`}
              id={`${feature.itemName}bh-header`}
            >
              <Typography className={classes.heading} variant="caption">
                {feature.itemName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} direction="row" justify="flex-start">
                {feature &&
                  feature.items &&
                  feature.items.map((subElement,index) => (
                    <Grid item key={index}>
                      <List
                        aria-labelledby="nested-list-subheader"
                        subheader={
                          <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                            className={classes.listHeading}
                            disableSticky={true}
                          >
                            {subElement.subItemName}
                          </ListSubheader>
                        }
                      >
                        {subElement &&
                          subElement.subItems &&
                          subElement.subItems.map((itemName, index) => (
                            <ListItem key={index}>
                              <ListItemText primary={itemName} />
                            </ListItem>
                          ))}
                      </List>
                    </Grid>
                  ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
