import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

import "../../style.css"



function sponsors(){
    return(
      <div>
    <Container fluid>
      <Jumbotron fluid style={jumbotronStyles}>
        <h1 className="text-center">Sponsors</h1>
      </Jumbotron>
    </Container>
    </div>
    )
}

export default sponsors;