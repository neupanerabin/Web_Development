import React from 'react'
import propTypes from 'prop-types'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"

const Header = (props) => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
       
  
        
      </>

        

    )
};
// Header.propTypes = {
//     name: propTypes.string,
//     age: propTypes.number,
//     address: propTypes.string,
// }
// Header.defaultProps = {
//     name: "Default name",
//     age: "age leho",
//     address: "ktm"
// }



export default Header