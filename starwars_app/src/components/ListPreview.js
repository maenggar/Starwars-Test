import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider
} from "@material-ui/core";

function ListPreview(props) {
  return (
    <div>
      <List>
        <Fragment>
          <ListItem button alignItems="flex-start" key={props.episode}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={props.title}
              secondary={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Episodes : {props.episode}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Director : {props.director}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Producer : {props.producer}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Release : {props.release}
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      </List>
    </div>
  );
}
export default ListPreview;
