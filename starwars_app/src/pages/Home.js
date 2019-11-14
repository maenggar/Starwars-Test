import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import MenuBar from "../components/MenuBar";
import BackgroundImage from "../assets/starwars.jpg";
import About from "./about";
import Movies from "./Movies";
import Footer from "../components/Footer";

const useStyle=makeStyles( theme=>({
    root:{
        clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 60% 100%, 0 86%, 0 0)',
        backgroundColor: theme.palette.primary.light
    },
}))



function Home(){
    const classes=useStyle()
    return(
        <div>
            <MenuBar/>
             <img src={BackgroundImage} alt="StarWars background" width="100%" className={classes.root}/>
             <Movies/>
             <About/>
             <Footer/>
        </div>
    )
}export default Home