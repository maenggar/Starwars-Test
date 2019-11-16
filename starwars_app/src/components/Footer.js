import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.dark
  }
}));

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="primary">
        {"Copyright © "}
        <Link color="inherit" href="#">
          StarWars
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Copyright />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footer;
