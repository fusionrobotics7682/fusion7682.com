import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../style.css"


function supportUs(){
  const jumbotronStyles = {
    backgroundColor: "#27275f",
    color: "#ffffff",
    width: "100%"


    }

    return(
      <div>
    <Container fluid>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">Support Us</h1>
      </Jumbotron>
    </Container>


    <Container>
      <Row>
        
      <Col xs={12} md={12}>
      <h1 style={{color:"#27275f"}}>
        We need your support!
      </h1>
      
      <p>
      As a FIRST Robotics Team, we require many resources for our program to be successful. Our team is always looking for support whether it be in the form of new team members, mentors, or sponsorship.
      </p>
     
      </Col>
    


      <Col xs={12} md={12}>
      <h2 style={{color:"#27275f"}}>
      ​Become a Member
      </h2>
      <p>
      Citrus Circuits is always excited to have new members, regardless of skill level. You only have to be in high school (grades 9-12) and 
      excited about robotics and FIRST. We’re looking for students interested in electronics, mechanics, programming, marketing, or business and media. 
      To join, send us an email at administration@citruscircuits.org, or drop by Mr. Harvey’s room (room M-1 at the southwest corner of campus) at Davis Senior High School.
      <br></br>
      </p>

  
      </Col>

        <Col xs={12} md={12}>
        <h2 style={{color:"#27275f"}}>
        Become a Sponsor
        </h2>
        <p>
        This option is for businesses and corporations. Our annual budget has grown to over $200,000, so our team is always in need of funding and 
        sponsors. If your company is interested in sponsoring us through things like money, parts, or mentors, feel free to contact us at administration@citruscircuits.org. 
        We’ll be happy to add you as a sponsor and to see your logo on our t-shirts and robot next year. To view our sponsor page click here.
        <br></br>
        </p>
        <hr style={{backgroundColor:"#27275f"}}></hr>
        </Col>

        <Col xs={12} md={12}>
        <h2 style={{color:"#27275f"}}>
        SPONSORSHIP LEVELS
        </h2>
        </Col>
       

        <Col xs={12} md={6}>
      
        <p> <strong>Gold - $5,000 and up</strong></p>
        <ul>
          <li>Get your logo(large) on our website, 
            t-shirt, robot and competition banner.
          </li>
          <li>
            All time level benefits.
          </li>
          <li>
            Personalized video showing your impact on our team.
          </li>
        </ul>
        </Col>


        <Col xs={12} md={6}>
        <p> <strong>Silver - $1,000 to $5,000</strong></p>
        <ul>
          <li>Get your logo(large) on our website, 
            t-shirt, robot and competition banner.
          </li>
          <li>
            All time level benefits.
          </li>
          <li>
            Two team t-shirts (pre-ordered).
          </li>
        </ul>
        </Col>

        <Col xs={12} md={6}>
        <p> <strong>Bronze - $600,000 to $1,000</strong></p>
        <ul>
          <li>Two team t-shirts

          </li>
          <li>
          Social media post 
          </li>
          <li>
          A thank-you team picture
          </li>
  
        </ul>
        </Col>

        <Col xs={12} md={6}>
        <p> <strong>Lime - $100 to $600</strong></p>
        <ul>
          <li>
          Get your name on our website
          </li>
          <li>
          A thank-you team letter
          </li>
          <li>
          An invitation to UCD Regional and other local events
          </li>
        </ul>
        </Col>

        <Col xs={12} md={12}>
        <hr style={{backgroundColor:"#27275f"}}></hr>
        </Col>

        <Col xs={12} md={12}>
        <h2 style={{color:"#27275f"}}>
        BENEFITS OF SPONSORING
        </h2>
        </Col>

        <Col xs={12} md={12}>
        
        <ul>
          <li>
          Promoting STEM education in Davis & Yolo County
          </li>
          <li>
          High profile local press coverage
          </li>
          <li>
          Website and webcast visibility
          </li>
          
        </ul>
        </Col>

        
      
      </Row>
      </Container>
      <br></br>
    </div>

    )
}

export default supportUs;