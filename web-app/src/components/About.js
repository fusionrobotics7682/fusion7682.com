import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import "../style.css"

const firstSlide = require("../assets/team_photo.jpg");

function aboutUs(){
  const jumbotronStyles = {
    backgroundColor: "#27275f",
    color: "#ffffff",


    }

    return(
      <div>
    <Container fluid>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">About Us</h1>
      </Jumbotron>
    </Container>


    <Container>
      <Row>
        
      <Col xs={12} md={6}>
      <h1 style={{color:"#27275f"}}>
        Who Are We?
      </h1>
      <p>
      Our FRC (FIRST® Robotics Competition) team was founded as “EnGen Robotics” in 2004 by Steve Harvey, 
      a math teacher at Da Vinci Charter Academy in Davis, CA. In 2007, we changed our name to “Citrus Circuits.” 
      Now beginning our 16th season, our team has grown to include nearly 100 high school students from Davis Senior High School, 
      Da Vinci Charter Academy, Holmes Junior High, Emerson Junior High, and Harper Junior High.

      Now beginning our 16th season, our team has grown to include nearly 100 high school students from Davis Senior High School, 
      Da Vinci Charter Academy, Holmes Junior High, Emerson Junior High, and Harper Junior High.
      
      Our FRC (FIRST® Robotics Competition) team was founded as “EnGen Robotics” in 2004 by Steve Harvey, 
      a math teacher at Da Vinci Charter Academy in Davis, CA. In 2007, we changed our name to “Citrus Circuits.” 
      Now beginning our 16th season, our team.
      </p>
      </Col>

      <Col xs={12} md={6}>
      <Image src={firstSlide} height={"310px"} width={"100%"} rounded />
      </Col>
      
      <Col xs={12} md={12}>
      <br></br>
      <p>
      Our FRC (FIRST® Robotics Competition) team was founded as “EnGen Robotics” in 2004 by Steve Harvey, 
      a math teacher at Da Vinci Charter Academy in Davis, CA. In 2007, we changed our name to “Citrus Circuits.” 
      Now beginning our 16th season, our team has grown to include nearly 100 high school students from Davis Senior High School, 
      Da Vinci Charter Academy, Holmes Junior High, Emerson Junior High, and Harper Junior High.

      Now beginning our 16th season, our team has grown to include nearly 100 high school students from Davis Senior High School, 
      Da Vinci Charter Academy, Holmes Junior High, Emerson Junior High, and Harper Junior High.
      
      Our FRC (FIRST® Robotics Competition) team was founded as “EnGen Robotics” in 2004 by Steve Harvey, 
      a math teacher at Da Vinci Charter Academy in Davis, CA. In 2007, we changed our name to “Citrus Circuits.” 
      Now beginning our 16th season, our team.
      </p>

      <hr style={{backgroundColor:"#27275f"}}></hr>
      </Col>


      <Col xs={12} md={12}>
      <h1 style={{color:"#27275f"}}>
        Vision Statement
      </h1>
      <p>
      We transform our communities through education; we engage people of all ages through outreach; 
      we inspire others with our commitment to excellence. We strive to Educate, Empower, and Excel.
      <br></br>
      </p>

      <hr style={{backgroundColor:"#27275f"}}></hr>
      </Col>

      <Col xs={12} md={12}>
      <h1 style={{color:"#27275f"}}>
        Join Us!
      </h1>
      <p>
      To join the team, there is an application and interview process starting in
       early May and ending in late June. We encourage anyone who will be in grades 9-12 
       for the upcoming season to apply- no experience is necessary. 
       Those who do not make it onto the team or apply after the deadline will be placed 
       on a waitlist. if you have any questions regarding the application process or 
       Citrus Circuits in general, please contact us at administration@citruscircuits.org or 
       use the Contact Us feature on this website.
      <br></br>
      </p>

      <hr style={{backgroundColor:"#27275f"}}></hr>
      </Col>
      
      </Row>
      </Container>
      <br></br>
    </div>

    )
}

export default aboutUs;