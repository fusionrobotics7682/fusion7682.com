import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"

import "../../style.css"
import { Card, Col, Image, Row } from "react-bootstrap"
import { startTransition } from "react"



function sponsors(){

  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

    const b_belediyesi = require("../../assets/sponsors/bahcelievler_logo.jpeg");
    const knowledge_club = require("../../assets/sponsors/knowledge_club.jpeg");
    const rustu_akin = require("../../assets/sponsors/rüstü_akin_vakfi.jpeg");
    const unity = require("../../assets/sponsors/unity.jpeg");
    const r_kadak = require("../../assets/sponsors/r_kadak.jpeg");
    const altay_civata = require("../../assets/sponsors/altay_civata.jpeg");
    const eskipolat = require("../../assets/sponsors/eskipolat.jpeg");
    const demiriz = require("../../assets/sponsors/demiriz.JPG");
    const asya_bayrak = require("../../assets/sponsors/asya_bayrak.jpeg");
    const konzek = require("../../assets/sponsors/konzek.jpeg");
    const micron_tekstil = require("../../assets/sponsors/micron_tekstil.jpeg");
    const star_alüminyum = require("../../assets/sponsors/star_alüminyum.jpeg");
    const verar_kargo = require("../../assets/sponsors/verar_kargo.jpeg");
    const özsoy_metal = require("../../assets/sponsors/özsoy_metal.jpeg");
    const saykom = require("../../assets/sponsors/saykom.jpeg");
    const ozbekcpa = require("../../assets/sponsors/özbekcpa.jpeg");
    const özdisan = require("../../assets/sponsors/özdisan.jpeg");
    const sbk_krom = require("../../assets/sponsors/sbk_krom.jpeg");
    const dogus_kalip = require("../../assets/sponsors/dogus_kalip.jpeg");
    const veronelli = require("../../assets/sponsors/veronelli.jpeg");
    const burger_yiyelim = require("../../assets/sponsors/burger_yiyelim.jpeg");
    const merkad = require("../../assets/sponsors/merkad.jpeg");
    const türksa = require("../../assets/sponsors/türksa_kayış.jpeg");

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
        <h1 className="text-center">Sponsors</h1>
      </Jumbotron>

      <Col>
                    <Col>
                    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Electron</h1>
            <p className="text-center">
            Our Electron Sponsors are very important to us. Without them, we cannot determine our layers.
            </p>
        </Col>
    </Col>
    <Row>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={rustu_akin}
                    width={"%100"}
                    height={"%150"} />
<Card.Body>
<Card.Title><a href="http://www.rav.org.tr/" style={{
    color: "white",
}}>Rüştü Akın Vakfı</a></Card.Title>
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
<Card.Title><a href="https://knowledgeclub.netdevopsakademi.net/" style={{
    color: "white",
}}>Knowledge Club</a></Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={unity}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title><a href="https://www.unityotomasyon.com.tr/" style={{
    color: "white",
}}>Unity Grup Teknoloji</a></Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row><Row>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={konzek}
                    width={"%100"}
                    height={"%150"} />
<Card.Body>
<Card.Title><a href="https://www.konzek.com/?gclid=Cj0KCQiAqOucBhDrARIsAPCQL1ZDtEVMqzijLxnydn5HbtHUi28u9sCDoF63tWomjZ27oySU2B4gV9oaAnIJEALw_wcB" style={{
    color: "white",
}}>Konzek</a></Card.Title>
<Card.Text>
</Card.Text>
</Card.Body>
</Card>
    </Row>
    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Proton</h1>
            <p className="text-center">
            Our Proton Sponsors represent our positives. Thanks to them, we are always positive and happy.
            </p>
        </Col>
    </Col>
    <Row>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={dogus_kalip}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Doğuş Kalıp</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={altay_civata}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Altay Civata</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={asya_bayrak}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Asya Bayrak</Card.Title>
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
                    height={"%100"}  />
<Card.Body>
<Card.Title>Saykom</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={türksa}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Türksa Kayış</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={merkad}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Merkad Makina</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row>
    <Row>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={burger_yiyelim}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Burger Yiyelim</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row>
    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Neutron</h1>
            <p className="text-center">
            We are very lucky to have our Neutron Sponsors by our side at the most important moments.
            </p>
        </Col>
    </Col>
    <Row>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={eskipolat}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Eski Polat</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={veronelli}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Eigenmann & Veronelli</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={demiriz}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Demiriz</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

    </Row>
    <Row>
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
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={star_alüminyum}
                    width={"%100"}
                    height={"%100"}  />
<Card.Body>
<Card.Title>Star Alüminyum</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>

<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={sbk_krom}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>SBK Krom Metal</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
    </Row>
    <Row>
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
                    height={"%100"}  />
<Card.Body>
<Card.Title>Özsoy Metal</Card.Title>
<Card.Text>
</Card.Text>

</Card.Body>
</Card>
<Card  border="light" style={{
    width:350,
}}>
<Image variant="top" src={ozbekcpa}
                    width={"%100"}
                    height={"%100"} />
<Card.Body>
<Card.Title>Özbekcpa</Card.Title>
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