import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import BaseUrl from "../config/BaseUrl";
import {Link as RouterLink} from "react-router-dom";
import { List,ListItem,ListItemAvatar,ListItemText,Avatar,Typography,Divider} from "@material-ui/core";



function ListItemLink(props) {
    const { to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
          // See https://github.com/ReactTraining/react-router/issues/6056
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}>
          <ListItemText/>
        </ListItem>
      </li>
    );
  }



function ListPreview(){
    const [film, setFilm] = useState([]);

    useEffect(() => {
      axios
        .get(BaseUrl.API+"films/") 
        .then(result => setFilm(result.data.results));
    }, []);

    return(
         <div>
            <List>{film.map( item =>(
                       
                       <Fragment>    
                            <ListItem button alignItems="flex-start">
                                <ListItemAvatar>z`z 
                                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                   primary={item.title}
                                   secondary={
                                   <div style={{display:"flex",flexDirection:"column"}}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        //className={classes.inline}
                                        color="textPrimary"
                                    >
                                       Episodes : {item.episode_id}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        //className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Director : {item.director}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        //className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Producer : {item.producer}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        //className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Rex lease : {item.release_date}
                                    </Typography>
                                 </div>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />  
                       </Fragment>  
             )) 
            } 
            </List>
      </div>
    )
}export default ListPreview