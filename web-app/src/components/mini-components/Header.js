import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../../style.css"

// Example icon code:
// import { FaHome  } from 'react-icons/fa';
// <FaHome  style={{color:"black"}}/>

function Header(){
    const logoImg = require("../../assets/logo.png");
    const instagram = require("../../assets/instagram.png");
    const linkedin = require("../../assets/linkedin.png");
    const logoSize = 40;
    const logoStyle = {
        color: "#10375c",
        marginLeft: "20px",
        fontWeight: "bold"
    }
    
    return(   
    <>
      <Navbar bg="white" expand="lg">
      <img
        src={logoImg}
        width={logoSize}
        height={logoSize}
        className="d-inline-block align-top"
        alt="FR Logo"/>
      <Navbar.Brand href="/" style={logoStyle}>Fusion Robotics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/members">Members</Nav.Link>
          <Nav.Link href="/sponsors">Sponsors</Nav.Link>
          <Nav.Link href="/support-us">Support Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>     
      <Navbar.Collapse></Navbar.Collapse>          
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="https://www.instagram.com/fusionrobotics7682/?hl=tr"><img style={{
            width: '30px'
          }} src={instagram}></img></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/company/fusion-robotics-7682"><img style={{
            width: '30px'
          }} src={linkedin}></img></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</>
        
    )
}

export default Header