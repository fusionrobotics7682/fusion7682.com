import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

import "../../style.css"
import { Card, Col, Image, Row } from "react-bootstrap"



function sponsors(){

  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

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

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
        <h1 className="text-center">Sponsors</h1>
      </Jumbotron>

      <Col>
                    <Col>
                    <Row>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={b_belediyesi}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Bahçelievler Belediyesi</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={knowledge_club}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Knowledge Club</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={rustu_akin}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Rüştü Akın Vakfı</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row><Row>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={unity}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Unity Grup Teknoloji</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row>
</Col>
                
</Col>
    </Container>
    </div>
    )
}

export default sponsors;