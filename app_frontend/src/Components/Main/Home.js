import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <Container fluid>
    <Container style={{ height: '100vh' }}>
      <Row className="h-100">
        <Col md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
            "Hi! i'm Archit Kumar Software Engineer." <br></br>
          <Button variant="outline-dark">&rarr;About Me</Button>
          </h1>
        </Col>
        <Col md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <img src="/profile.jpg" alt="Description of profile pic" style={{ maxWidth: '80%', height: 'auto', borderRadius: "50%" }} />
        </Col>
      </Row>
    </Container>
    </Container>
  )
}
