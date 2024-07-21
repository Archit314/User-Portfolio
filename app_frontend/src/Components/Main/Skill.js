import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Skill() {
    return (
        <Container>
            <Container fluid className="py-5">
                <h2 className="text-center" style={{marginBottom: '85px'}}>Technologies & Languages</h2>
                <Row className="justify-content-center">
                    {['mongodb.svg', 'express.svg', 'react.svg', 'nodejs2.svg', 'express.svg', 'adonisJs.png', 'javascript.png', 'typescript.png', 'php.png', 'laravel.png','html.png', 'css.png', 'bootstrap.png', 'sql.png', 'github.png', 'postgresql.svg'].map((imgSrc, index) => (
                        <Col key={index} xs={6} sm={4} md={4} lg={4} className="d-flex justify-content-center align-items-stretch mb-3">
                            <Card className="h-100 d-flex flex-column align-items-center justify-content-center" style={{ padding: '1rem', height: '300px', width: '100%', backgroundColor: '#f8f9fa', border: 'none' }}>
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <Card.Img src={`/${imgSrc}`} style={{ maxWidth: '100px' }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}
