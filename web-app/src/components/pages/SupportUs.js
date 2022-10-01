import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../../style.css"



function supportUs(){
  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">Support Us</h1>
      </Jumbotron>
    </Container>


    <Container>
      <Row>
        
      <Col xs={12} md={12}>
      <h1 style={{color:"#10375c"}}>
      We need your support!
      </h1>
      
      <p>
      As Fusion Robotics, our sponsors are a very important factor for us. They also support us in meeting our basic needs such as material support, financial support and nutrition when we work hard in the workshop in the competitions we participate in and the projects we want to realize. In addition, our sponsors help us spread FIRST and STEM, and improve ourselves in engineering.
      </p>
     
      </Col>
    </Row>
      </Container>
      <br></br>
    </div>

    )
}

export default supportUs;