import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

import style from "./style.css"
function Jumbotron_Header()
{
    const img1 = require("../assets/slider/we_are_fusion.PNG");
    const imgSize = "50%";
   
    return(
        <Jumbotron fluid>
    <Container>
        <h1>We Are Fusion!</h1>
        <p>
        Team 7682 is a high-school robotics team from
         the Istanbul area. 
        We give students opportunities to experience real 
        world engineering through competitive robotics.
        </p>
    </Container>
    </Jumbotron>
       

    )
}

export default Jumbotron_Header;