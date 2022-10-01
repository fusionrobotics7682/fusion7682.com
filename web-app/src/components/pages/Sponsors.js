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

    const b_belediyesi = require("../../assets/sponsors/b_belediyesi.jpeg");
    const knowledge_club = require("../../assets/sponsors/knowledge_club.jpeg");
    const rustu_akin = require("../../assets/sponsors/rüştü_akın.jpeg");
    const unity = require("../../assets/sponsors/unity.jpeg");
    //const r_kadak = require("../../assets/sponsors/r_kadak.jpeg");
    const altay_civata = require("../../assets/sponsors/altay_civata.jpeg");
    const eskipolat = require("../../assets/sponsors/eskipolat.jpeg");
    //const demiriz = require("../../assets/sponsors/demiriz.jpeg");
    const asya_bayrak = require("../../assets/sponsors/asya_bayrak.jpeg");
    const konzek = require("../../assets/sponsors/konzek.jpeg");
    const micron_tekstil = require("../../assets/sponsors/micron_tekstil.jpeg");
    const star_alüminyum = require("../../assets/sponsors/star_alüminyum.jpeg");
    const verar_kargo = require("../../assets/sponsors/verar_kargo.jpeg");
    const özsoy_metal = require("../../assets/sponsors/özsoy_metal.jpeg");
    const saykom = require("../../assets/sponsors/saykom.jpeg");
    //const ozbekcpa = require("../../assets/sponsors/özbekcpa.jpeg");
    const özdisan = require("../../assets/sponsors/özdisan.jpeg");

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
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={altay_civata}
                    width={"%100"}
                    height={300}/>
<Card.Body>
<Card.Title>Altay Civata</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={eskipolat}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Eski Polat</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row><Row>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={asya_bayrak}
                    width={"%100"}
                    height={"%100"}/>
<Card.Body>
<Card.Title>Asya Bayrak</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={konzek}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Konzek</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>


<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={micron_tekstil}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Mikron Tekstil</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row><Row>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={star_alüminyum}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Star_Alüminyum</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={verar_kargo}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Verar Kargo</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={özsoy_metal}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Özsoy Metal</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row><Row>


<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={saykom}
                    width={"%100"}
                    height={250} />
<Card.Body>
<Card.Title>Saykom</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={özdisan}
                    width={"%100"}
                    height={250} />
<Card.Body>
<Card.Title>Özdisan</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

    </Row>
    <Row>

    </Row>
                </Col>
                
                
                </Col>
    </Container>
    </div>
    )
}

export default sponsors;