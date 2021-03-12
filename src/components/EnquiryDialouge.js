import React from "react";
import { useTheme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles, Slide, useMediaQuery } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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

const useStyles = makeStyles(() => ({
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

export default function RoomDetailsDialog(props) {
  const { open, handleClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <div>
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
          <form className={classes.enquiryInnerForm}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Mobile No"
              variant="outlined"
              defaultValue="+91 "
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="How can we help you ?"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
            />
            <Box className={classes.enquirySubmitButton}>
              <Button variant="contained" color="secondary" size="large">
                Submit Enquiry
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
