import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import { Card, Image, Jumbotron, Row } from "react-bootstrap";


function projects(){

    const gtys_image = require("../../assets/gtys_logo.jpeg");
    const kirlangic_image = require("../../assets/kırlangic_image.jpeg");
    const teknofest_robot_image = require("../../assets/teknofest_robot.jpeg");
    const mersin_off_season = require("../../assets/mersin_off_season.jpeg");
    const istanbul_regional_image = require("../../assets/istanbul_regional.png");
    const pendik_off_season_image = require("../../assets/pendik_off_season.png");
    const bosphorus_robot_image = require("../../assets/team_photo3.jpg");
    const gameX = require("../../assets/gameX.jpg");
    const oneideaoneworld = require("../../assets/1idea1world.png");
    

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

                <Row style={{ display:'flex', justifyContent:'center'}}>

                    <Card  border="light" style={{
                              width:350,
                          }}>
                      <Image variant="top" src={pendik_off_season_image}
                                              width={"%100"}
                                              height={250} />
                      <Card.Body>
                        <Card.Title>Pendik - Off Season</Card.Title>
                         <Card.Text>
                         We became the champion team together with our alliance teams in FRC 2022 Pendik Off-Season and were entitled to receive the "Winner" award.
                         </Card.Text>
                  
                      </Card.Body>
                    </Card>
            <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={bosphorus_robot_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Bosphorus Regional</Card.Title>
           <Card.Text>
           We did not give up and supported our team until the end, even if our robot broke down during the match when we went to the field with our first robot, which we made completely. </Card.Text>
    
        </Card.Body>
      </Card>
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={oneideaoneworld}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>1 Idea 1 World</Card.Title>
           <Card.Text>
           As Fusion Robotics, we were invited to the event held at BTM Istanbul, organized by TÜMMİAD. We introduced our team and our robot at the fair. We won a bronze medal for the interest in our robot and the performance we showed. </Card.Text>
    
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

                <Row style={{ display:'flex', justifyContent:'center' }}>
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={gtys_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Görsel Tabanlı Yerleştirme Sistemi</Card.Title>
           <Card.Text>
           We came second in Turkey among 243 teams in the Pre-Evaluation Reporting Stage of Education Technologies at 2021 TEKNOFEST.</Card.Text>
    
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
                <Row style={{ display:'flex', justifyContent:'center' }}>
                    
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
                </Row>
                </Col>

                <br></br>

                <Col>
                <Col>
                    <h1 style={{
                    textAlign: 'center',
                }}>2019</h1>
                <Row style={{ display:'flex', justifyContent:'center' }}>

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
        <Image variant="top" src={istanbul_regional_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>İstanbul Regional</Card.Title>
           <Card.Text>
           We competed for 3 days in the competition that took place in 2019 and we managed to reach the quarter-finals in this competition, which we participated for the first time. We have been awarded the SAFETY AWARD 2019 for the work we have done and the attention we have shown on occupational safety, which is very important in the competition.
</Card.Text>
    
        </Card.Body>
      </Card>

      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={mersin_off_season}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Mersin - Off Season</Card.Title>
           <Card.Text>
           Our robot almost never worked in the FRC off-season tournament organized by Mersin Governorship, but the experience and experience we gained during and during the competition contributed a lot to us.</Card.Text>
    
        </Card.Body>
      </Card>
      <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={gameX}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>GameX</Card.Title>
           <Card.Text>
           We made it to the semi-finals at the FRC Off-Season at GameX 2019 held in Istanbul and gained a lot of experience
           </Card.Text>
    
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
