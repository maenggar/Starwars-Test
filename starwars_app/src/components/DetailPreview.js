import React, { useState } from "react";
import { Card, Grid, Typography, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

function DetailPreview(props) {
  let films = useState(props.films);
  let { id } = useParams();

  console.log(id, "id dari params");

  return (
    <div>
      <Card>
        <Divider variant="inset" />
        <Grid container spacing={3}>
          <Grid item md>
            <h3>{`DETAIL:${id}`}</h3>
            <ul>
              <li key={films[0][id - 1].episode_id}>
                <Typography>{films[0][id - 1].title}</Typography>
                <Typography>{films[0][id - 1].opening_crawl}</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container>
          <Divider />
          <Grid item md={12}>
            <Paper>more related preview</Paper>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
export default DetailPreview;
