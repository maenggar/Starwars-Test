import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import BaseUrl from "../config/BaseUrl";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider
} from "@material-ui/core";
import DetailPreview from "./DetailPreview";

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
                  {/* <Link to={`${url}detail1`}>link</Link> */}
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
