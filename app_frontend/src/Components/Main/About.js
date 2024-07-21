import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-3 mb-md-0">
          <Image
            src="/profile.jpg"
            roundedCircle
            alt="Profile Picture"
            style={{ width: '150px', height: '150px' }}
          />
        </Col>
        <Col md={8} className='mb-5'>
          <h2>About Me</h2>
          <p>
            Hello! I'm Archit Kumar, a passionate Software Engineer with 1 year of experience in
            API development and database handling. I enjoy creating modern, responsive web
            applications using MERN. In my free time, I love watching movies and
            web series.
          </p>
          <p>
            My goal is to continuously improve my skills and create impactful solutions. I am
            always excited to learn new technologies and take on new challenges.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
