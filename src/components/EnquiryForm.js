import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(2),
    },

    display: "flex",
    flexWrap: "wrap",
  },
  buttonBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
  },
}));

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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
  },
}))(MuiDialogContent);



export default function CustomizedDialogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Enquiry
        </DialogTitle>
        <DialogContent>
          <form className={classes.form}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Mobile"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="How can we help you ?"
              variant="outlined"
              multiline
              rowsMax={3}
              fullWidth
            />
            <Box className={classes.buttonBox}>
              <Button variant="contained" color="secondary" type="submit">
                submit
              </Button>
              <Button variant="contained" color="secondary" type="reset">
                reset
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
