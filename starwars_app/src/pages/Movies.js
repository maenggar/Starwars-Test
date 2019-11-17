import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../config/BaseUrl";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import DetailPreview from "../components/DetailPreview";
import ListPreview from "../components/ListPreview";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  },
  paperGrid: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),

    paddingBottom: theme.spacing(8)
  },
  CardGrid: {
    flexGrow: 1,
    padding: theme.spacing(10)
  }
}));

function Movies() {
  const classes = useStyles();
  const [film, setFilm] = useState([]);
  let { url, path } = useRouteMatch();

  useEffect(() => {
    axios
      .get(BaseUrl.API + "/films")
      .then(result => setFilm(result.data.results));
  }, []);

  return (
    <Fragment>
      <div className={classes.root}>
        <Container className={classes.paperGrid} maxWidth="lg">
          <Paper elevation={8}>
            <Grid container spacing={3}>
              <Grid item lg={4}>
                {film.map(item => (
                  <div>
                    <ListPreview
                      title={item.title}
                      episode={item.episode_id}
                      director={item.director}
                      producer={item.producer}
                      release={item.release_date}
                    />
                    <Link to={`${url}${item.episode_id}`}>detail</Link>
                  </div>
                ))}
              </Grid>
              <Grid item lg={8}>
                <Switch>
                  <Route path={`${path}:id`}>
                    <DetailPreview films={film.title} />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </Fragment>
  );
}
export default Movies;
