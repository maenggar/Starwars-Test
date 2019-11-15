import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import BaseUrl from "../config/BaseUrl"
import { List,ListItem,ListItemAvatar,ListItemText,Avatar,Typography,Divider} from "@material-ui/core";


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
                                <ListItemAvatar>
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
                                        Realease : {item.release_date}
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