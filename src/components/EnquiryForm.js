import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import React from "react";
import EnquiryDialouge from "./EnquiryDialouge";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "-webkit-sticky",
    position: "sticky",
    top: 65,
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      position: "unset"
    }
  },
  enquiryPaper: {
    paddingTop: 15,
    paddingBottom: 15
  },
  enquiryContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& > *": {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  enquiryHeader: {
    marginTop: 20,
  },
  enquiryHeadingText: {
    color: red[400],
    fontWeight: "bold",
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

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.enquiryPaper}>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item>
            <Typography className={classes.enquiryHeadingText}>
              Looking for Vacation Packages ?
            </Typography>
          </Grid>
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
                onClick={handleClickOpen}
              >
                Make Enquiry
              </Button>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        <EnquiryDialouge open={open} handleClose={handleClose} />
      </Paper>
    </div>
  );
}

export default EnquiryForm;
