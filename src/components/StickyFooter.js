import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link style={{ textDecoration: "none" }} to="/">
          Akshay Lodge
        </Link>
        {" 1994-"}
        {new Date().getFullYear()}
        {". "}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Zagade Complex, Hanuman Chowk, Jejuri, 412303, Maharashtra, India.
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[800],
  },
  contents: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
