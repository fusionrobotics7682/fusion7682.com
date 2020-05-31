import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Footer()
{
    const currentDate = new Date();
    // Author will be added.
    //const author = "Mustafa Mert Tunalı";

    return(
        <footer>
            <Container>

        <Row md={4} xs={12}>
            <Col>
            <a href="/first-robotics">FIRST Robotics</a>
            </Col>

            <Col>
            <a href="/about">About</a>
            </Col>

            <Col>
            <a href="/media">Media</a>
            </Col>

            <Col>
            <a href="/sponsor-us">Sponsor Us</a>
            </Col>

            <Col md={12}>
            <br></br>
            <p className="text-center">Email: <strong>contact@fusionrobotics.com</strong></p>
            </Col>
           
        
           
        </Row>
        <br></br>
        <Row md={1}>
            <p className="text-center">© COPYRIGHT {currentDate.getFullYear()}. ALL RIGHTS RESERVED.</p>

        </Row>
    </Container>
        </footer>
    )
}
    


export default Footer