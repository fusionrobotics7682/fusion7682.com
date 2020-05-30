import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import style from "./style.css"




function Footer()
{
    const currentDate = new Date();
    const author = "Mustafa Mert Tunalı";
    const logoImg = require("../assets/logo.png");
    const logoSize = 120;
    return(
        <footer>
            <Container>

        <Row md={4} xs={12}>
            <Col>
            <a href="">FIRST Robotics</a>
            </Col>

            <Col>
            <a href="">About</a>
            </Col>

            <Col>
            <a href="">Media</a>
            </Col>

            <Col>
            <a href="">Sponsor Us</a>
            </Col>
           
        </Row>
        <br></br>
        <Row md={1}>
            <p className="text-center">© {currentDate.getFullYear()} Fusion Robotics</p>

        </Row>
    </Container>
        </footer>
    )
}
    


export default Footer