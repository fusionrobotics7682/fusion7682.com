import React from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



function cards_container()
{
    const logoImg = require("../../assets/logo.png");
    const frcLogo = require("../../assets/firstlogo.jpg");
    const fikretYuksekLogo = require("../../assets/fikretyuksel.jpg");
    const imgSize = 250;
    const fusionWidth = 150;
    const fusionHeight = 300;
    const firstLogoWidth = 300;
    const firstLogoHeight = 225;
  
   
    return(
<Container>

  <Row > 
    <Col lg="4" md={6} >
      <Card  border="light" >
        <Card.Img variant="top" src={logoImg}
                                width={fusionWidth}
                                height={fusionHeight} />
        <Card.Body>
          <Card.Title>Our Vision</Card.Title>
           <Card.Text>
           Fusion Robotics is a team gathered under STEM, moving forward on its goals and dreams. 
           With your support, we will be engineers, business people, scientists of the future.          </Card.Text>
    
        </Card.Body>
      </Card>
     </Col>
        
        <Col lg="4" md={6}>
          <Card border="light">
            <Card.Img variant="top" src={frcLogo} width={firstLogoWidth}
                      height={firstLogoHeight}/>
            <Card.Body>
                <Card.Title>FIRST Robotics</Card.Title>
                <Card.Text>
                The FIRST Robotics Competition (FRC) is an international high school robotics competition. 
                Each year, teams of high school students, coaches, and mentors work during a six-week period 
                to build robots capable of competing in that year's game that weigh up to 125 pounds (57 kg).
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="4" md={6}>

        <Card  border="light">
  <Card.Img variant="top" src={fikretYuksekLogo}width={imgSize}
            height={imgSize} />
  <Card.Body>
    <Card.Title>Fikret Yuksel Foundation</Card.Title>
    <Card.Text>
    The Foundation focuses on improving education for Turkish students primarily through getting them involved in the FIRST® Robotics Competition.
    Their mission is to spread the FIRST Robotics Competition to as many students as possible in Turkey. 
    </Card.Text>
    
  </Card.Body>
        </Card>

        </Col>

    
  </Row>
<br></br>
</Container>
    )
}

export default cards_container;