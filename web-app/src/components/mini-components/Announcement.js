import React from "react"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function announcement(){
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const months ={
        0:"January",
        1:"February",
        2:"March", 
        3:"April",
        4:"May",
        5:"June",
        6:"July",
        7:"August",
        8:"September",
        9:"October",
        10:"November",
        11:"December"
    }
    return(
        <Container>
        <Row>
        <Col md={4}>
        </Col>
            <Col md={12}>

            <h3 style={{color:"#127681"}} class="text-center">
            Announcement
            </h3>

            </Col>

            <Col md={12}>
    <p className="text-center"><span className="text-muted">{months[month]} {day}, {year} -</span> Our web-app is now online; Take a tour for us! <Badge variant="secondary">New</Badge></p>
            </Col>

        </Row>

        </Container>
    )
}

export default announcement;