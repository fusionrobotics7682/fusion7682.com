import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"






function Jumbotron_Header()
{
    const jumbotronStyles = {
    backgroundColor: "#27275f",
    color: "#ffffff",
    fontFamily: "sans-serif"
    }

    return(

        <Jumbotron fluid style={jumbotronStyles}>
    <Container>
        <h1>  Support us!</h1>
        <p>
        Team 7682 is a high-school robotics team from
         the Istanbul area. 
        We give students opportunities to experience real 
        world engineering through competitive robotics.

        We welcome for your support!
        </p>

        <a href="/support-us" style={{color:"rgb(0, 156, 215)"}}>Click Here</a>

    </Container>
    </Jumbotron>
       

    )
}

export default Jumbotron_Header;