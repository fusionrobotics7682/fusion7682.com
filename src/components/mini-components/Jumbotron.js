import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"






function Jumbotron_Header()
{
    const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",


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

        <a href="/support-us" 
        style=
        {{
            backgroundColor: "white",
            color: "#127681",
            padding: "5px",
            borderRadius :"5px",

        }}>Click Here</a>

    </Container>
    </Jumbotron>
       

    )
}

export default Jumbotron_Header;