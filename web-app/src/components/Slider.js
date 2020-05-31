import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import "../style.css"
function slider(){
    const firstSlide = require("../assets/team_photo.jpg");
    const secondSlide = require("../assets/team_photo3.jpg");

   
    

    return(
        <Container>
        <Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstSlide}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mersin Off-Season 2019</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondSlide}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Istanbul Regional 2019</h3>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  <br></br>
  </Container>
    )
}
export default slider;