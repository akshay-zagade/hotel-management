import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import LocalAreaSection from "./LocalAreaSection";

const useStyles = makeStyles((theme) => ({
  headingContainer: {
    padding: theme.spacing(3),
    marginBottom:theme.spacing(1),
  },
}));

function LocalArea() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.headingContainer}>
        <Typography variant="h3" style={{ textAlign: "center" }} gutterBottom>
          LOCAL AREA
        </Typography>
      </Paper>
      <LocalAreaSection localAreaInfo={localAreaInfo} />
    </div>
  );
}

const localAreaInfo = [
  {
    id: 1,
    itemName: "FAMILY AND CHILDREN'S ACTIVITIES",
    items: [
      {
        subItemName: "Rajiv Gandhi Zoological Park",
        subItems: [
          "Phone: +91 20 2437 0747",
          "This 130-acre zoo is divided into an animal orphanage, a snake park, a zoo and a 42 acre lake.",
          "7.1 MILES",
        ],
      },
      {
        subItemName: "Babasaheb Ambedkar Museum",
        subItems: [
          "Phone: +91 20 2437 0747",
          "Dedicated to Babasaheb Ambedkar, freedom fighter, showcasing items that represents his entire life",
          "0.6 MILES",
        ],
      },
      {
        subItemName: "Boating in Pune",
        subItems: [
          "Phone: +91 20 2437 0747",
          "This 130-acre zoo is divided into an animal orphanage, a snake park, a zoo and a 42 acre lake.",
          "7.1 MILES",
        ],
      },
      {
        subItemName: "Sinhagad Fort",
        subItems: [
          "Phone: +91 20 2437 0747",
          "This 130-acre zoo is divided into an animal orphanage, a snake park, a zoo and a 42 acre lake.",
          "7.1 MILES",
        ],
      },
    ],
  },
  {
    id: 2,
    itemName: "AREA SIGHTSEEING",
    items: [
      {
        subItemName: "Historical Monuments Tour",
        subItems: ["Forts, Temples and Museum", "Daya - Personal Guide"],
      },
      {
        subItemName: "Old City of Pune Walk",
        subItems: ["Shaniwar Wada & old city", "Daya - Personal Guide"],
      },
      {
        subItemName: "Historical Monuments Tour",
        subItems: ["Forts, Temples and Museum", "Daya - Personal Guide"],
      },
      {
        subItemName: "Museum Tour",
        subItems: ["Forts, Temples and Museum", "Daya - Personal Guide"],
      },
      {
        subItemName: "Pune City Tour",
        subItems: ["Shaniwar Wada & old city", "Daya - Personal Guide"],
      },
    ],
  },
];

export default LocalArea;
