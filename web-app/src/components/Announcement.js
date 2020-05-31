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
    return(
        <Container>
        <Row>
        <Col md={4}>
        </Col>
            <Col md={2}>

            <h4 style={{color:"#27275f"}} class="text-center">
            Announcement:
            </h4>

            </Col>

            <Col md={6}>
    <p>fusionrobotics.com online! [{day}.{month}.{year}] <Badge variant="secondary">New</Badge> </p>
            </Col>

        </Row>

        </Container>
    )
}

export default announcement;