import React from "react"
import MenuBar from "../components/MenuBar"
import BackgroundImage from "../assets/rey-vs.jpg"

function Home(){
    return(
        <div>
            <MenuBar/>
             <img src={BackgroundImage} alt="StarWars background"/>
        </div>
    )
}export default Home