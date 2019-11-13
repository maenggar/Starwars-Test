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
      color:theme.palette.primary
    },
    tabLabel:{
      color:theme.palette.primary.light
    },
    title: {
      flexGrow: 1,
      color:theme.palette.primary.light
    },
  }));

function MenuBar(){
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              STARWARS
            </Typography>
            <Tabs
                    className={classes.menuButton}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
            >
                 <Tab label="Home" className={classes.tabLabel}/>
                 <Tab label="Movies" className={classes.tabLabel} />
                 <Tab label="Episodes" className={classes.tabLabel} />
            </Tabs>
            <Button color="primary">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    ) 
}export default MenuBar