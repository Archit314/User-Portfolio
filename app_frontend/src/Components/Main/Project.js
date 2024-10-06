import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Ensure this import is present

const projects = [
  {
    title: "Portfolio",
    description: "This is my portfolio project.",
    imageUrl: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
    link: "https://architkumar.netlify.app",
    detailsLink: "/projects/portfolio", // Update this link to your project details page
    type: "Self"
  },
  {
    title: "NIWISH",
    description: "Niwish is a platform where you can Buy/Sell Metal (Gold/Silver), Buy Coins & Create SIP starting with ₹1.",
    imageUrl: "https://cms.bluelupin.com/uploads/i_Stock_1411911762_28f103b49a.jpg",
    link: "https://niwish.com",
    detailsLink: "/projects/niwish", // Update this link to your project details page
    type: "Live"
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
          onClick={() => setFilter('All')}
          style={{ margin: '0 5px', borderRadius: '30px', padding: '10px 20px' }}
        >
          All
        </Button>
        <Button
          className="mt-auto"
          variant={filter === 'Self' ? "dark" : "outline-dark"}
          onClick={() => setFilter('Self')}
          style={{ margin: '0 5px', borderRadius: '30px', padding: '10px 20px' }}
        >
          Self
        </Button>
        <Button
          className="mt-auto"
          variant={filter === 'Live' ? "dark" : "outline-dark"}
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
                <div className="d-flex justify-content-between mt-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outline-dark"
                      style={{ borderRadius: '30px', padding: '10px 20px' }}
                    >
                      View Project
                    </Button>
                  </a>
                  <Button
                    variant="outline-dark"
                    as={Link}
                    to={project.detailsLink} // Link to your project details page
                    style={{ borderRadius: '30px', padding: '10px 20px' }}
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
