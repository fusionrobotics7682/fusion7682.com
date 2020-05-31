import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function teams(){
    const logoImg = require("../assets/logo.png");;
    const fusionSecLogo = require("../assets/fusionlogo2.png")
    const imgSize = 320;

    return(
        <Container>
            <Row>
                <Col md={12}>

                    
                    <h2 className="text-center teamsTitle">Teams</h2>
                    <p className="text-center">We are not only a robotics team, we're family.
                                            So we've founded one more team inside of Fusion
                                            Robotics called <strong>Fusion Security</strong>.
                                                Bu takımı kurmamızdaki ana amaç, FRC topluluğunu
                                                sadece robotik ile sınırlı bırakmayıp 
                                                güvenlik alanında da eğitimler ve projeler yapmayı planlıyoruz.
                                                </p>
                    <p className="text-center"> Kurduğumuz diğer takımlardan birisi de <strong>FusionVision</strong>. Bu takım ile FRC yarışmalarında görüntü işlemeyi kolaylaştıracak kütüphaneler üretmek, destek vermek aynı zamanda
                    popüler olan yapay zekânın alt dalında yer olan derin öğrenmeyi FRC'de uygulayarak öğrenmek.</p>
                    
                    <p className="text-center"> Sizler de bize bu 2 takımda destek çıkmak, ortak proje 
                    yapmak istiyorsanız <a href="/teams-support">buradan</a> iletişime geçebilirsiniz! </p>
                    
                
                </Col>
                <Col md={6}>

                <Card>
        <Card.Img variant="top" src={fusionSecLogo}
                                width={imgSize}
                                height={imgSize} />
        <Card.Body>
          <Card.Title>Fusion Security</Card.Title>
           <Card.Text>
           Fusion Robotics takımının altında kurulmuş bir bilgi güvenliği takımıdır.
           FRC takımlarında yer alıp siber güvenliğe meraklı kişilere eğitim ve ortak
           proje geliştirme imkanı sunar.</Card.Text>
    
        </Card.Body>
      </Card>

                </Col>

            <Col md={6}>

                <Card>
        <Card.Img variant="top" src={logoImg}
                                width={imgSize}
                                height={imgSize} />
        <Card.Body>
          <Card.Title>Fusion Vision</Card.Title>
           <Card.Text>
           FRC takımlarının görüntü işlemeyi
           daha kolay kullanabilmesi, öğrenebilmesi için kütüphaneler geliştirir
           derin öğrenme hakkında çeşitli eğitimler verir.</Card.Text>
    
        </Card.Body>
      </Card>

                </Col>
                
            </Row>
        </Container>
    )
}

export default teams;