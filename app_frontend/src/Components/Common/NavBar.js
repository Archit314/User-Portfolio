import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Navbar expand="md" sticky="top" className="overflow-hidden" style={{
        backdropFilter: 'blur(8px)', // Reduced blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.7)' // Semi-transparent background
      }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{fontSize: '25px'}}><img
            src="/profile.jpg" // Replace with the path to your image
            alt="Arrow Icon"
            style={{ maxWidth: '70px', marginRight: '8px', borderRadius: '50%' }} // Adjust size and spacing as needed
          />
            Archit Kumar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{fontSize: '25px'}}>
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}