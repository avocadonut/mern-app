import React, { Component } from 'react';
import {
    Navbar,
    Nav,  
    Container
} from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
         <Container>
          <Navbar.Brand href="#home"><i className="fa fa-users fa-fw"></i>Employee Magement System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
          </Navbar.Collapse>
         </Container>
        </Navbar>
    )
  }
}

export default Header;