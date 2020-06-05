import React from "react"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../style.css"


const sponsor1 = require("../../assets/sponsor4.jpg");
const sponsor2 = require("../../assets/sponsor2.jpg");
const sponsor3 = require("../../assets/sponsor3.jpg");




function sponsors(){
    return(

        <Container>
        <Row>
        <Col md={12}>
        <br></br>
        <h2 className="text-center" style={{color:"#10375c"}}>Sponsors</h2>
        </Col>
        
        <Col md={12}>
        <Carousel
        centered
        infinite
        dots
        arrows
        slidesPerPage={3}
        className="sponsorCarousel"
        >
        <img src={sponsor1} alt="Slide 1"/>
        <img src={sponsor2} alt="Slide 2"/>
        <img src={sponsor3} alt="Slide 3"/>
        </Carousel>
  <br></br>
 
        </Col>
        </Row>
        </Container>

    )
}

export default sponsors;