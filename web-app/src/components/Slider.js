import React from "react"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../style.css"
function slider(){
    const firstSlide = require("../assets/team_photo.jpg");
    const secondSlide = require("../assets/team_photo3.jpg");
    const thirdSlide = require("../assets/team_photo2.jpeg");
    return(
        <Container fluid>
        <Row>
        <Col md={12}>
        <Carousel
        centered
        infinite
        arrows
        dots
        className="headerSlider"
        >
        <img src={firstSlide} alt="Slide 1" />
        <img src={secondSlide} alt="Slide 2" />
        <img src={thirdSlide} alt="Slide 3"/>
        </Carousel>
        </Col>
        </Row>
  <br></br>
  </Container>
    )
}
export default slider;