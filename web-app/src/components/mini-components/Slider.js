import React from "react"
// import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from 'react-bootstrap/Jumbotron'

import "../../style.css"

function slider(){

        return(
        <div>
            <Jumbotron fluid className="headerBackground" >
            <Col md={12} sm={12} xs={12}>
            <div class="bg"></div>
            </Col>
            
            <Container>
            <div className="text-center headerText">
            <h1>We are <span style={{color:"#127681",
            fontWeight:"bold"}}>Fusion Robotics</span>.</h1>
                <p style=
                {{fontSize:"17px",
                }}>
                A team of passionate <span style={{color:"#127681",
            fontWeight:"bold"}}>youth</span> from Istanbul/Turkey.
                </p>

                <a href="/about-us" 
                style=
                {{
                    backgroundColor: "white",
                    color: "#127681",
                    padding: "5px",
                    borderRadius :"5px",

        }}>Click Here</a>
            </div>
                
            </Container>
            </Jumbotron>
           <br></br>
        </div>
        )
}
export default slider;