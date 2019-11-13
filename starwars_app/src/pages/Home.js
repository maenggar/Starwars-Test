import React from "react"
import MenuBar from "../components/MenuBar"
import BackgroundImage from "../assets/starwars.jpg"
import About from "./about";

function Home(){
    return(
        <div>
            <MenuBar/>
             <img src={BackgroundImage} alt="StarWars background"/>
             <About/>
        </div>
    )
}export default Home