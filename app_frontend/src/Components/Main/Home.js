import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container fluid>
      {/* --------- Intro ----------------------- */}
      <Container fluid className="d-flex align-items-center" style={{ minHeight: '100vh', padding: '20px 0' }}>
        <Row className="w-100">
          <Col md={6} className="d-flex justify-content-center align-items-center p-3">
            <h1 className="text-center" style={{ fontSize: '2.5rem' }}>
              "Hi! I'm Archit Kumar, Software Engineer. Design and develop web Apps 😉" <br />
              <Button className="mt-5" variant="outline-dark">&rarr; About Me</Button>
            </h1>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center p-3">
            <img src="/coding.png" alt="Profile pic" className="img-fluid rounded-circle" style={{ maxWidth: '80%' }} />
          </Col>
        </Row>
      </Container>

      {/* --------- Technology Section ----------------------- */}
      <Container fluid className="py-5">
        <h2 className="text-center mb-4">Technologies & Languages</h2>
        <Row className="justify-content-center">
          {['mongodb.svg', 'express.svg', 'react.svg', 'nodejs2.svg', 'express.svg'].map((imgSrc, index) => (
            <Col key={index} xs={6} sm={4} md={4} lg={4} className="d-flex justify-content-center align-items-stretch mb-3">
              <Card className="h-100 d-flex flex-column align-items-center justify-content-center" style={{ padding: '1rem', height: '300px', width: '100%', backgroundColor: '#f8f9fa', border: 'none' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Card.Img src={`/${imgSrc}`} style={{ maxWidth: '100px' }} />
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col xs={6} sm={4} md={4} lg={4} className="d-flex justify-content-center align-items-stretch mb-3">
            <Card className="h-100 d-flex flex-column align-items-center justify-content-center" style={{ padding: '1rem', height: '300px', width: '100%', border: 'none' }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Button className="mt-auto" variant="outline-dark" as={Link} to='/skills'>&rarr; View more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
