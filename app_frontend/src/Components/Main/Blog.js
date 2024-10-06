import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogs = [
    {
        title: "Self Project 1",
        description: "This project involves creating a modern web application using React and Bootstrap.",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*KDaMn4L7ERWXrRqvmq6Fwg.jpeg",
        link: "https://medium.com/@architkumar-SDE/how-do-you-solve-errors-related-to-the-php-ini-file-while-creating-a-laravel-project-ca1e798e8097",
        type: "Self"
    },
    {
        title: "Live Project 1",
        description: "This project focuses on API development and database handling.",
        imageUrl: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*Cp4IuDtZOkbYGFVUwyqxEA.png",
        link: "https://medium.com/@architkumar-SDE/how-to-deploy-laravel-application-on-render-for-free-using-docker-nginx-configuration-9683b3378756",
        type: "Live"
    }
];

export default function Blog() {
    return (
      <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
         <h2 className="mb-4 text-center" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#343a40' }}>My Blogs</h2> 

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
      </Container>
    );
}
