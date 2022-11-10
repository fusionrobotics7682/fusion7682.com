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

                <Row style={{ display:'flex', justifyContent:'center'}}>

            <Card  border="light" style={{
                width:350,
            }}>
        <Image variant="top" src={bosp_robot_image}
                                width={"%100"}
                                height={250} />
        <Card.Body>
          <Card.Title>Bosphorus Regional</Card.Title>
           <Card.Text>
           Tamamını bizim yaptığımız ilk robotumuzla sahaya çıktık, robotumuz maç sırasında arızalansa bile pes etmedik ve takımımıza sonuna kadar destek olmaya devam ettik. </Card.Text>
    
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
           2021 TEKNOFEST'te Eğitim Teknolojileri alanının Ön Değerlendirme Rapor aşamasında 243 takım arasından Türkiye ikincisi olmaya hak kazandık</Card.Text>
    
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
           Gaziantep'te düzenlenen TEKNOFEST 2020 yarışmasında finalist takımlardan biri olduk.
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
           İstanbul'da düzenlenen etkinlikte robotumuzu sergiledik.
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
           2019 yılında gerçekleşen yarışmada 3 gün boyunca yarıştık ve ilk kez katıldığımız bu yarışmada çeyrek finallere kalmayı başardık.
Yarışmada çok önem verilen iş güvenliği konusunda yaptığımız çalışmalar ve gösterdiğimiz dikkatten dolayı SAFETY AWARD 2019'u almaya hak kazandık.
</Card.Text>
    
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
           Mersin Valiliği'nin düzenlemiş olduğu FRC sezon dışı turnuvada robotumuz neredeyse hiç çalışmadı ancak yarışma sürecinde ve yarışma esnasında edindiğimiz tecrübe ve deneyim bize çok şey kattı.</Card.Text>
    
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
