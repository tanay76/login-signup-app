import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          React Auth
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
