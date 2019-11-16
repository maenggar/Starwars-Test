import React from "react";
import {
  Card,
  Grid,
  Typography,
  Divider,
  Paper,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

function DetailPreview() {
  const classes = useStyles();
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <Card>
        <Typography>Detail's Preview</Typography>
        <Divider variant="inset" component="li" />
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={7}>
            <h3>{`DETAIL:${id}`}</h3>
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
