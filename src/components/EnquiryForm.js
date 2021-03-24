import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import EnquiryDialouge from "./EnquiryDialouge";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import { useDispatch } from "react-redux";
import { updateEnquiryFormObj } from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 65,
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      position: "unset",
    },
  },
  enquiryPaper: {
    padding: 16,
  },
  enquiryContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
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
  const dispatch = useDispatch();

  const enquiryInitialState = {
    checkInDate: new Date().toISOString().slice(0, 10),
    checkOutDate: new Date().toISOString().slice(0, 10),
    guestCount: 2
  };
  const [enquiry, setEnquiry] = useState(enquiryInitialState);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(updateEnquiryFormObj(enquiry))
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = e => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.enquiryPaper}>
        <form>
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
                  id="checkin-date"
                  label="Check In"
                  type="date"
                  name="checkInDate"
                  value={enquiry.checkInDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth={true}
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="checkout-date"
                  label="Check Out"
                  type="date"
                  name="checkOutDate"
                  value={enquiry.checkOutDate}
                  onChange={changeHandler}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="guest-count"
                  label="Number of Guests"
                  type="number"
                  name="guestCount"
                  value={enquiry.guestCount}
                  onChange={changeHandler}
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
        </form>
      </Paper>
    </div>
  );
}

export default EnquiryForm;
