import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles(theme => ({
    root: {
     flexGrow:1,
    },
    toolbar:{
        backgroundColor:theme.palette.secondary.dark
    },
    menuButton: {
      flexGrow:1,
    },
    title: {
      flexGrow: 1,
      color:theme.palette.primary.light
    },
  }));

function MenuBar(){
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              STARWARS
            </Typography>
            <Tabs
                    className={classes.menuButton}
                    value={1}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
            >
                 <Tab label="Home" />
                 <Tab label="Movies" />
                 <Tab label="Episodes" />
            </Tabs>
            <Button color="primary">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    ) 
}export default MenuBar