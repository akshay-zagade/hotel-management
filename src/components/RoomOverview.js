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

export default function RoomOverview(props) {
  const { overview } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {overview &&
        overview.map((feature) => (
          <Accordion
            expanded={expanded === feature.itemName}
            onChange={handleChange(feature.itemName)}
            key={feature.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${feature.itemName}bh-content`}
              id={`${feature.itemName}bh-header`}
            >
              <Typography className={classes.heading}>
                {feature.itemName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} direction="row" justify="flex-start">
                {feature &&
                  feature.items &&
                  feature.items.map((subElement) => (
                    <Grid item key={subElement.subItemName}>
                      <List
                        aria-labelledby="nested-list-subheader"
                        subheader={
                          <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                            className={classes.listHeading}
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
