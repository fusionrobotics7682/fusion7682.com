import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import { Card, Image, Jumbotron, Row } from "react-bootstrap";


function projects(){

    const gtys_image = require("../../assets/gtys_logo.jpeg");
    const kirlangic_image = require("../../assets/kırlangic_image.jpeg");
    const teknofest_robot_image = require("../../assets/teknofest_robot.jpeg");
    const ist_regional_image = require("../../assets/ist_regional.jpeg");
    const mersin_off_seasons_image = require("../../assets/mersin_off_season.jpeg");
    const bosp_robot_image = require("../../assets/bosp_robot.png");
    

    const jumbotronStyles = {
        backgroundColor: "#10375c",
        color: "#ffffff",
        }

    return(
        <Container>

            <Container>
                <Jumbotron style={jumbotronStyles}>    
                <h1 className="text-center">Projects</h1>
                </Jumbotron>
            </Container>
            
            <Col>
                    <Col>
                <h1 style={{
                    textAlign: 'center',
                }}>2022</h1>

                <Row>

            <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={bosp_robot_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Bosphorus Regional</Card.Title>
           <Card.Text>
           We went to the field with our first robot, which we made completely, even if our robot broke down during the match, we did not give up and continued to support our team until the end.</Card.Text>
    
        </Card.Body>
      </Card>
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={""}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Pendik - Off Season</Card.Title>
           <Card.Text>
           -</Card.Text>
    
        </Card.Body>
      </Card>
                </Row>
                </Col>
                
                </Col>

                <br></br>

            <Col>
                    <Col>
                <h1 style={{
                    textAlign: 'center',
                }}>2021</h1>

                <Row>
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={gtys_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Görsel Tabanlı Yerleştirme Sistemi</Card.Title>
           <Card.Text>
           We qualified to be the second in Turkey among 243 teams in the Pre-Evaluation Report phase of the Education Technologies field in 2021 TEKNOFEST.</Card.Text>
    
        </Card.Body>
      </Card>
                </Row>
                </Col>
                
                </Col>

                <br></br>

                <Col>
                <h1 style={{
                    textAlign: 'center',
                }}>2020</h1>
            <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={kirlangic_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Teknofest - Kırlangıç</Card.Title>
           <Card.Text>
           We became one of the finalist teams in the TEKNOFEST 2020 competition held in Gaziantep.
</Card.Text>
    
        </Card.Body>
      </Card>
                </Col>

                <br></br>

                <Col>
                <Col>
                    <h1 style={{
                    textAlign: 'center',
                }}>2019</h1>
                <Row>

                <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={teknofest_robot_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Teknofest</Card.Title>
           <Card.Text>
           We exhibited our robot at the event held in Istanbul.
</Card.Text>
    
        </Card.Body>
      </Card>
     
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={ist_regional_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>İstanbul Regional</Card.Title>
           <Card.Text>
           We competed for 3 days in the competition that took place in 2019 and we managed to reach the quarter-finals in this competition, which we participated for the first time. We were entitled to receive the SAFETY AWARD 2019 due to the work we have done and the attention we have shown on occupational safety, which is very important in the competition.</Card.Text>
    
        </Card.Body>
      </Card>

      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={mersin_off_seasons_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Mersin - Off Season</Card.Title>
           <Card.Text>
           Our robot almost never worked in the FRC off-season tournament organized by Mersin Governorship, but the experience and experience we gained during and during the competition contributed a lot to us.</Card.Text>
    
        </Card.Body>
      </Card>
                </Row>
                </Col>
                </Col>
                <br></br>
        </Container>

        
    )
}

export default projects;    
