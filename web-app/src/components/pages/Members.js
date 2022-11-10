import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import "../../style.css"

const b_belediyesi = require("../../assets/sponsors/b_belediyesi.png");


function members(){
  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">Members</h1>
      </Jumbotron>
    </Container>


    <Container>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Mentors</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Captains</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>
    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Members</h1>
        </Col>
    </Col>


    <Col>
    <Row>
        <div style={{
            width: '12.5%',
        }}></div>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card><Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card><Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={b_belediyesi}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
                
                
            </Row>
    </Col>

    </Container>
      <br></br>
    </div>

    )
}

export default members;