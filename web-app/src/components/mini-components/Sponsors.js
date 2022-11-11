import React from "react"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../style.css"

const b_belediyesi = require("../../assets/sponsors/b_belediyesi.png");
const knowledge_club = require("../../assets/sponsors/knowledge_club.png");
const rustu_akin = require("../../assets/sponsors/rüştü_akın.png");
const unity = require("../../assets/sponsors/unity.png");
//const r_kadak = require("../../assets/sponsors/r_kadak.png");
//const altay_civata = require("../../assets/sponsors/altay_civata.png");
//const eskipolat = require("../../assets/sponsors/eskipolat.png");
//const demiriz = require("../../assets/sponsors/demiriz.png");
//const asya_bayrak = require("../../assets/sponsors/asya_bayrak.png");
//const konzek = require("../../assets/sponsors/konzek.png");
//const micron_tekstil = require("../../assets/sponsors/micron_tekstil.png");
//const star_alüminyum = require("../../assets/sponsors/star_alüminyum.png");
//const verar_kargo = require("../../assets/sponsors/verar_kargo.png");
//const özsoy_metal = require("../../assets/sponsors/özsoy_metal.png");
//const saykom = require("../../assets/sponsors/saykom.png");
//const ozbekcpa = require("../../assets/sponsors/özbekcpa.png");
//const özdisan = require("../../assets/sponsors/özdisan.png");

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
        <img src={b_belediyesi} alt="Slide 1"/>
        <img src={knowledge_club} alt="Slide 2"/>
        <img src={unity} alt="Slide 4"/>
        <img src={rustu_akin} alt="Slide 3"/>
        </Carousel>
  <br></br>
 
        </Col>
        </Row>
        </Container>

    )
}

export default sponsors;