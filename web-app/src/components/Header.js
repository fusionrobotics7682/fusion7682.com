import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import "../style.css"

// Example icon code:
// import { FaHome  } from 'react-icons/fa';
// <FaHome  style={{color:"black"}}/>

function Header(){
    const logoImg = require("../assets/logo.png");
    const logoSize = 40;
    const logoStyle = {
        color: "#27275f",
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
      <Navbar.Brand href="#home" style={logoStyle}>Fusion Robotics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home  </Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <NavDropdown title="Team" id="basic-nav-dropdown">
            <NavDropdown.Item href="/robotics">Robotics</NavDropdown.Item>
            <NavDropdown.Item href="/security">Security</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  className="disabled" href="/web">Web [Disabled]</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button  variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
 
</>
        
    )
}

export default Header