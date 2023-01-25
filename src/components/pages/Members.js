import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import "../../style.css"

function members(){
//    const instagram = require("../../assets/instagram.png");
//    const linkedin = require("../../assets/linkedin.png");
const sipan_merhas = require("../../assets/fusion-member-photo/sipan_merhas.JPG");
const mertali_ipek = require("../../assets/fusion-member-photo/mertali_ipek.JPG");
//const nisanur_gülerce = require("../../assets/fusion-member-photo/nisanur_gülerce.JPG");
//const ömercan_aydın = require("../../assets/fusion-member-photo/ömercan_aydıns.JPG");
const rana_fidan = require("../../assets/fusion-member-photo/rana_fidan.JPG");
const sude_güçer = require("../../assets/fusion-member-photo/sude_güçer.JPG");
const şevval_arslantürk = require("../../assets/fusion-member-photo/şevval_arslantürk.JPG");
const yağmur_akyüz = require("../../assets/fusion-member-photo/yağmur_akyüz.JPG");
const zeynep_banu = require("../../assets/fusion-member-photo/zeynep_banu.JPG");
const dağcan_duru = require("../../assets/fusion-member-photo/dağcan_duru.JPG");
const aziz_kılıç = require("../../assets/fusion-member-photo/aziz_kılıç.jpg");
const umut_tepe = require("../../assets/fusion-member-photo/umut_tepe.jpeg");
const bayram_kuru = require("../../assets/fusion-member-photo/bayram_kuru.png");
    
  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">Members</h1>
      </Jumbotron>
    </Container>


    <Container>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Mentors</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Tekin</Card.Title>
                        <Card.Text>Lead Mentor</Card.Text>
                    </Card.Body>
                </Card>
    </Row>    <Row style={{ display:'flex', justifyContent:'center' }}
>
    
<Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mustafa Mert Tunalı</Card.Title>
                        <Card.Text>Student at MEF Universty - Software</Card.Text>
                    </Card.Body>
                </Card>
                 <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Ahmet Yıldız</Card.Title>
                        <Card.Text>Student at MEF Universty - Software</Card.Text>
                    </Card.Body>
                </Card>
                 <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={aziz_kılıç}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Abdul Aziz Kılıç</Card.Title>
                        <Card.Text>Namık Kemal Universty - Electronics</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={bayram_kuru}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Bayram Kuru</Card.Title>
                        <Card.Text>Engineer - Mechanic</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={umut_tepe}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Umut Tepe</Card.Title>
                        <Card.Text>Engineer - Electronics</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Ömercan Aydın</Card.Title>
                        <Card.Text>Mentor - Mechanic</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Nazif Yiğit Çomak</Card.Title>
                        <Card.Text>Mentor - Mechanic</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Burak Akkılıç</Card.Title>
                        <Card.Text>Mentor - Mechanic</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>               <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Ayşegül Kılınç</Card.Title>
                        <Card.Text>Mentor - Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Sahranur Çalış</Card.Title>
                        <Card.Text>Mentor - Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Rohat Yeşilyurt</Card.Title>
                        <Card.Text>Mentor - Software</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>
    
    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Alumni</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Kaan Arısoy</Card.Title>
                        <Card.Text>Old Captain</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Ali Güvenç</Card.Title>
                        <Card.Text>Old Captain</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Tuba Özen</Card.Title>
                        <Card.Text>Old Captain</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={yağmur_akyüz}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Yağmur Akyüz</Card.Title>
                        <Card.Text>Alumni</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Baran Aktaş</Card.Title>
                        <Card.Text>Alumni</Card.Text>
                    </Card.Body>
                </Card>

                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={mertali_ipek}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Mertali İpek</Card.Title>
                        <Card.Text>Alumni</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Selim Basut</Card.Title>
                        <Card.Text>Alumni</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Captains</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
<Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={sipan_merhas}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Sipan Merhas Akcan</Card.Title>
                        <Card.Text>Captain</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={dağcan_duru}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Dağcan Bektaş Duru</Card.Title>
                        <Card.Text>Mechanic Captain</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Burak Talha Sümer</Card.Title>
                        <Card.Text>Software Captain</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={zeynep_banu}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Zeynep Banu Seyrek</Card.Title>
                        <Card.Text>Public Relations Captain</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>


    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Software</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>

                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Ömer Faruk Yılmaz</Card.Title>
                        <Card.Text>Software</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Mechanic</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Yüşa Mervan Gülgör</Card.Title>
                        <Card.Text>Mechanic</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={şevval_arslantürk}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Şevval Arslantürk</Card.Title>
                        <Card.Text>Mechanic</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    </Col>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Public Relations</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Nisanur Gülerce</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={rana_fidan}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Rana Gül Fidan</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={sude_güçer}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Sude Güçer</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Sümeyra Sare Vural</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Sertab Irmak Sağıroğlu</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>Beyzanur Yılmaz</Card.Title>
                        <Card.Text>Public Relations</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    
    </Col>

    <Col>
         <Col>
            <h1 style={{
                textAlign: 'center',
            }}>Rookie</h1>
        </Col>
    </Col>

    <Col>
    <Row style={{ display:'flex', justifyContent:'center' }}
>
                <Card  border="light" style={{
                    width:270,}}>
                    <Image variant="top" src={""}
                            width={"%100"}
                            height={"%100"}  />
                    <Card.Body>
                        <Card.Title>No rookie yet</Card.Title>
                        <Card.Text> They are will be add</Card.Text>
                    </Card.Body>
                </Card>
    </Row>
    
    </Col>
    </Container>
      <br></br>
    </div>

    )
}

export default members;
