import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
  enquiryContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& > *": {
      marginLeft: 15,
      marginRight: 15,
    },
  },

  enquiryButton: {
    "& > *": {
      paddingTop: "inherit",
      paddingBottom: "inherit",
    },
    fontWeight: "bold",
  },
}));

function EnquiryForm() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" spacing={2}>
        <Grid item>Looking for Vacation Packages ?</Grid>
        <Grid
          item
          container
          className={classes.enquiryContainer}
          direction="row"
          justify="space-evenly"
          spacing={2}
        >
          <Grid item>
            <TextField
              id="date"
              label="Check In"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label="Check Out"
              type="date"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              fullWidth={true}
            />
          </Grid>
          <Grid item>
            <TextField
              id="standard-basic"
              label="Number of Guests"
              defaultValue="2"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth={true}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.enquiryButton}
              size="large"
              fullWidth={true}
            >
              Make Enquiry
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default EnquiryForm;
