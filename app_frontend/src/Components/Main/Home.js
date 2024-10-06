import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "Importance of php.ini file",
    description: "This blog tells how to solve the errors occured during laravel project creation in php.ini file.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KDaMn4L7ERWXrRqvmq6Fwg.jpeg",
    link: "https://medium.com/@architkumar-SDE/how-do-you-solve-errors-related-to-the-php-ini-file-while-creating-a-laravel-project-ca1e798e8097", // Update this link to your blog post
    type: "Self"
  },
  {
    title: "Host Laravel project on Render using Docker & Nginx",
    description: "This blog helps you to host your Laravel project on Render using Docker & Nginx configurations.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*Cp4IuDtZOkbYGFVUwyqxEA.png",
    link: "https://medium.com/@architkumar-SDE/how-to-deploy-laravel-application-on-render-for-free-using-docker-nginx-configuration-9683b3378756", // Update this link to your blog post
    type: "Live"
  }
];

export default function Home() {
  return (
    <Container fluid>
      {/* --------- Intro ----------------------- */}
      <Container fluid className="d-flex align-items-center" style={{ minHeight: '100vh', padding: '20px 0' }}>
        <Row className="w-100">
          <Col md={6} className="d-flex justify-content-center align-items-center p-3">
            <h1 className="text-center" style={{ fontSize: '2.5rem' }}>
              "Hi! I'm Archit Kumar, Software Engineer. Design and develop web Apps 😉" <br />
              <Button className="mt-5" variant="outline-dark" as={Link} to='/about'>&rarr; About Me</Button>
            </h1>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center p-3">
            <img src="/coding.png" alt="Profile pic" className="img-fluid rounded-circle" style={{ maxWidth: '80%' }} />
          </Col>
        </Row>
      </Container>

      {/* --------- Technology Section ----------------------- */}
      <Container fluid className="py-5">
        <h2 className="mb-4 text-center" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#343a40' }}>
          Professional Skills
        </h2>        <Row className="justify-content-center">
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

      {/* --------- Blog Section ----------------------- */}
      <Container style={{ paddingTop: '40px', paddingBottom: '40px', marginTop: '60px' }}> {/* Added marginTop */}
        <h2 className="mb-4 text-center" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#343a40' }}>
          My Blogs
        </h2>

        <Row>
          {blogs.map((blog, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="shadow-sm h-100" style={{ borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.3s', backgroundColor: '#fff' }}>
                <Card.Img variant="top" src={blog.imageUrl} style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }} />
                <Card.Body className="d-flex flex-column p-4" style={{ justifyContent: 'space-between' }}>
                  <Card.Title className="text-center mb-3" style={{ fontSize: '1.4rem', fontWeight: '600', color: '#212529' }}>
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1 text-center" style={{ fontSize: '1rem', color: '#6c757d' }}>
                    {blog.description}
                  </Card.Text>
                  <div className="text-center mt-3"> {/* Center the button */}
                    <a
                      href={blog.link}
                      target="_blank" // Open link in a new tab
                      rel="noopener noreferrer" // Security best practice
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant="outline-dark"
                        style={{ borderRadius: '50px', padding: '8px 20px', fontWeight: '500', transition: 'background-color 0.3s' }}
                      >
                        View Blog
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="dark"
            as={Link}
            to="/blogs" // Link to your Blog component
            style={{ borderRadius: '50px', padding: '10px 30px', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase' }}
          >
            View More Blogs
          </Button>
        </div>
      </Container>
    </Container>
  );
}
