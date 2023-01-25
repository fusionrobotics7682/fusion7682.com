import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

function Footer()
{
    const currentDate = new Date();
    // Author will be added.
    //const author = "Mustafa Mert Tunalı";

    return(
        <footer>
            <Container>
        <br></br>
        <Row md={1}>
            <p className="text-center text-muted">© COPYRIGHT {currentDate.getFullYear()}. ALL RIGHTS RESERVED.</p>
            <p className="text-center text-muted">fusion7682@gmail.com</p>
        </Row>
    </Container>
        </footer>
    )
}
    


export default Footer