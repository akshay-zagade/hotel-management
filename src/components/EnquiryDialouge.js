import React, { useState } from "react";
import { useTheme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  makeStyles,
  Slide,
  Snackbar,
  useMediaQuery,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewEnquiry,
  hideFailureNotifiacation,
  hideSuccessNotifiacation,
  updateEnquiryDialougeObj,
} from "../redux";
import { Alert } from "@material-ui/lab";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  enquirySubmitButton: {
    display: "flex",
    justifyContent: "center",
  },
  enquiryInnerForm: {
    "& > *": {
      marginBottom: 15,
    },
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, subtitle, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle1" style={{ fontSize: "32px" }}>
        {children}
      </Typography>
      <Typography variant="subtitle2" style={{ fontSize: "24px" }}>
        {subtitle}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& > *": {
      marginBottom: 15,
    },
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EnquiryDialouge(props) {
  const { open, handleClose } = props;
  const dispatch = useDispatch();
  const { successNotification, failureNotification } = useSelector((state) => {
    return { ...state.enquiry };
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  const initialEnquiryObj = {
    firstName: "",
    lastName: "",
    contactNo: "+91 ",
    customerComment: "",
  };

  const [enquiry, setEnquiry] = useState(initialEnquiryObj);

  const changeHandler = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(successNotification);
    console.log(failureNotification);
    dispatch(hideSuccessNotifiacation());
    dispatch(hideFailureNotifiacation());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateEnquiryDialougeObj(enquiry));
    dispatch(createNewEnquiry());
    handleClose(false);
  };

  return (
    <div style={{ display: "contents" }}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        scroll="body"
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm"
        keepMounted
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Fill More Details
        </DialogTitle>
        <DialogContent>
          <form className={classes.enquiryInnerForm} onSubmit={submitHandler}>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              name="firstName"
              value={enquiry.firstName}
              required
              fullWidth
              onChange={changeHandler}
            />
            <TextField
              id="last-name"
              label="Last name"
              variant="outlined"
              name="lastName"
              value={enquiry.lastName}
              required
              fullWidth
              onChange={changeHandler}
            />
            <TextField
              id="mobile-no"
              label="Mobile No"
              variant="outlined"
              name="contactNo"
              value={enquiry.contactNo}
              required
              fullWidth
              onChange={changeHandler}
            />
            <TextField
              id="how-can-help"
              label="How can we help you ?"
              variant="outlined"
              name="customerComment"
              value={enquiry.customerComment}
              fullWidth
              multiline
              rows={3}
              onChange={changeHandler}
            />
            <Box className={classes.enquirySubmitButton}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
              >
                Submit Enquiry
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar open={successNotification} onClose={handleCloseNotification}>
        <Alert
          onClose={handleCloseNotification}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Enquiry created successfully
        </Alert>
      </Snackbar>
      <Snackbar open={failureNotification} onClose={handleCloseNotification}>
        <Alert
          onClose={handleCloseNotification}
          severity="error"
          elevation={6}
          variant="filled"
        >
          Failed to create enquiry
        </Alert>
      </Snackbar>
    </div>
  );
}

export default EnquiryDialouge;
