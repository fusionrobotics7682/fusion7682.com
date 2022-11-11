import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../../style.css"



function supportUs(){
  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",
    }

    return(
      <div>
    <Container>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">Support Us</h1>
      </Jumbotron>
    </Container>


    <Container>
      <Row>
        
      <Col xs={12} md={12}>
      <h1 style={{color:"#10375c"}}>
        Desteğinize ihtiyacımız var!
      </h1>
      
      <p>
      Fusion Robotics olarak sponsorlarımız bizim için çok önemli bir etkendir. Katıldığımız yarışmalarda ve gerçekleştirmek istediğimiz projelerde takımımıza malzeme desteği, maddi desteği ve atölyede sıkı çalışma içinde bulunduğumuz zamanlarda beslenme gibi temel ihtiyaçlarımızı karşılamakta da bize destek olmaktadırlar. Bunun yanı sıra sponsorlarımız FIRST’ü ve STEM’i yaymamızda, kendimizi mühendislikte geliştirmemizde yardımcı olmaktadırlar.
      </p>
     
      </Col>
    </Row>

    <Row>
        
        <Col xs={12} md={12}>
        <h1 style={{color:"#10375c"}}>
          Destek Linklerimiz
        </h1>
        
        <p>
        -
        </p>
       
        </Col>
      </Row>
    
      </Container>
      <br></br>
      
      
    </div>

    )
}

export default supportUs;