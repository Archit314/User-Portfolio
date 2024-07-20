import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import React from 'react'

export default function NavBar() {
  return (
    <>
      <Navbar expand="md" className=" " sticky='top' style={{
        backdropFilter: 'blur(8px)', // Reduced blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.7)' // Semi-transparent background
      }}>
        <Container fluid>
          <Navbar.Brand href="#"><img
              src="/profile.jpg" // Replace with the path to your image
              alt="Arrow Icon"
              style={{ maxWidth: '70px', marginRight: '8px', borderRadius: '50%' }} // Adjust size and spacing as needed
            /> Archit Kumar</Navbar.Brand>
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action1">About</Nav.Link>
                <Nav.Link href="#action1">Skills</Nav.Link>
                <Nav.Link href="#action1">Projects</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}