import React, { Fragment,useState,useEffect } from 'react';

import {Switch,Route} from "react-router-dom"

import axios from "axios";
import BaseUrl from "../config/BaseUrl";

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

const [IDfilm, setIDFilm] = useState([]);

useEffect(() => {
  axios
    .get(BaseUrl.API+"films/") 
    .then(result => setIDFilm(result.data.results));
}, []);


 return(

     <Fragment>
        <Switch>
          <Route path="/ListPreview" component={ListPreview}/>
          <Route path="/DetailPreview/" component={DetailPreview} />
        </Switch>

     <div className={classes.root}> 
        <Container className={classes.paperGrid} maxWidth="lg">
           <Paper elevation={8}>
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
   </Fragment>
 )
}export default Movies