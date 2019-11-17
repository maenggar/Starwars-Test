import React, { useState } from "react";
import { Card, Grid, Divider, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

function DetailPreview(props) {
  let [filmsx] = useState([props.films]);
  let { id } = useParams();

  console.log(filmsx, "id dari params");

  return (
    <div>
      <Card>
        <Divider variant="inset" />
        <Grid container spacing={3}>
          <Grid item md>
            <h3>{`DETAIL:${id}`}</h3>
            <Typography>{filmsx[[id].title]}</Typography>
            <Typography>{filmsx[[id].opening_crawl]}</Typography>
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
