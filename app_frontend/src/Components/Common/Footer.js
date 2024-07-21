import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '2rem 0' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>About</h5>
            <p>
              A professional Backend Developer with 1 year of experience in designing, developing and maintaining server side web applications. Proficient in database management, API integration and server side logic. Committed to writing clean, efficient and maintainable code using modular programming.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#services" className="text-light">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
              <Nav.Link href="#contact" className="text-light">About</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Social accounts</h5>
            <ul className="list-unstyled">
              {['linkedin.svg', 'github.svg', 'instagram.svg'].map((imgSrc, index) => (
                <Card.Img key={index} src={`/${imgSrc}`} style={{ maxWidth: '40px', padding: '5px' }} />
              ))}
            </ul>
            <p>
              <Card.Img src={`/whatsapp.svg`} style={{ maxWidth: '40px', padding: '5px' }} /> 7078590454
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
