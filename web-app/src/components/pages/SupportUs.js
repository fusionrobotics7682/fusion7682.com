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
      As a FIRST Robotics Team, we require many resources for our program to be successful. Our team is always looking for support whether it be in the form of new team members, mentors, or sponsorship.
      </p>
     
      </Col>
    </Row>
      </Container>
      <br></br>
    </div>

    )
}

export default supportUs;