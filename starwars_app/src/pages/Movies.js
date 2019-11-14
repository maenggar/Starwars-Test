import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid} from '@material-ui/core';
import DetailPreview from '../components/DetailPreview';
import ListPreview from '../components/ListPreview';

const useStyles = makeStyles(theme => ({
    root:{
      backgroundColor: theme.palette.primary.light
    },
    paperGrid: {
      flexGrow:1,  
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    CardGrid:{
        flexGrow:1,
        padding: theme.spacing(10)
    }

  }));
  
 
  

function Movies(){
const classes = useStyles();

 return(
     <div className={classes.root}> 
        <Container className={classes.paperGrid} maxWidth="lg">
           <Paper>
               <Grid container spacing={3}>
                   <Grid item lg={4}>
                     <ListPreview/>
                   </Grid>

                    <Grid item lg={8}>
                       <DetailPreview/>
                   </Grid>
               </Grid>

           </Paper>
        </Container>
   </div>
 )
}export default Movies