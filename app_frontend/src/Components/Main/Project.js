import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Self Project 1",
    description: "This project involves creating a modern web application using React and Bootstrap.",
    imageUrl: "https://via.placeholder.com/600x400",
    link: "#",
    type: "Self"
  },
  {
    title: "Live Project 1",
    description: "This project focuses on API development and database handling.",
    imageUrl: "https://via.placeholder.com/600x400",
    link: "#",
    type: "Live"
  },
  {
    title: "Self Project 2",
    description: "This project involves building responsive and dynamic web pages.",
    imageUrl: "https://via.placeholder.com/600x400",
    link: "#",
    type: "Self"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>My Projects</h2>
      <div className="mb-4 d-flex justify-content-center">
        <Button
          className="mt-auto"
          variant={filter === 'All' ? "dark" : "outline-dark"}
          as={Link}
          to="#"
          onClick={() => setFilter('All')}
          style={{ margin: '0 5px', borderRadius: '30px', padding: '10px 20px' }}
        >
          All
        </Button>
        <Button
          className="mt-auto"
          variant={filter === 'Self' ? "dark" : "outline-dark"}
          as={Link}
          to="#"
          onClick={() => setFilter('Self')}
          style={{ margin: '0 5px', borderRadius: '30px', padding: '10px 20px' }}
        >
          Self
        </Button>
        <Button
          className="mt-auto"
          variant={filter === 'Live' ? "dark" : "outline-dark"}
          as={Link}
          to="#"
          onClick={() => setFilter('Live')}
          style={{ margin: '0 5px', borderRadius: '30px', padding: '10px 20px' }}
        >
          Live
        </Button>
      </div>
      <Row>
        {filteredProjects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100 border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={project.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="text-center mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1" style={{ fontSize: '1rem', color: '#6c757d' }}>{project.description}</Card.Text>
                <Button
                  className="mt-auto"
                  variant="outline-dark"
                  as={Link}
                  to={project.link}
                  style={{ borderRadius: '30px', padding: '10px 20px' }}
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
