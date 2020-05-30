import React from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



function cards_container()
{
    const logoImg = require("../assets/logo.png");
    const frcLogo = require("../assets/firstlogo.jpg");
    const fikretYuksekLogo = require("../assets/fikretyuksel.jpg");
    const imgSize = 250;

   
    return(
<Container>

  <Row> 
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={logoImg}
                                width={imgSize}
                                height={imgSize} />
        <Card.Body>
          <Card.Title>Our Vision</Card.Title>
           <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
    
        </Card.Body>
      </Card>
     </Col>
        
        <Col md={4}>

        <Card>
  <Card.Img variant="top" src={frcLogo} width={imgSize}
            height={imgSize} />
  <Card.Body>
    <Card.Title>FIRST Robotics</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
        </Card>
        </Col>

        <Col md={4}>

        <Card>
  <Card.Img variant="top" src={fikretYuksekLogo}width={imgSize}
            height={imgSize} />
  <Card.Body>
    <Card.Title>Fikret Yuksel Foundation</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
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