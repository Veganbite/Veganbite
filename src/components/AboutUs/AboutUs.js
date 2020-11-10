import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';
import mission from '../../assets/mission.png';
import premium from '../../assets/premium.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Jumbotron fluid className='bg-white'>
                <Container>
                    <h1 className='title mb-4 pl-4'>About us</h1>
                    <p>
                    Behind the Veganbite app, you’ll find a motivated and enthusiastic team. We truly believe that being Vegan doesn’t mean tasteless and boring meals. With Veganbite, we're helping people with tasty meal plans adapted to their body needs.
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col className='mb-3'>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <img src={mission} className='mr-auto ml-auto' height='60px' width='60px'/>
                            <Card.Body className='card-body'>
                                <Card.Title>Our Mission</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3'>
                        <Card style={{ width: '18rem', border: 'none' }}>
                            <img src={premium} className='mr-auto ml-auto' height='60px' width='60px'/>
                            <Card.Body>
                                <Card.Title>Go Premium</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                                <Button variant="warning text-white">Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs
