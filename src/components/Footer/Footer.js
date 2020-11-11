import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import pencil from '../../assets/pencil.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container style={{ background: '#F69740' }} class="w-100">
                <Row>
                    <Col>
                        <Row style={{ backgroundColor: '#F9D00F', marginLeft: '1em' }}>
                            <Card style={{ border: 'none', height: '315px' }}>
                                <Card.Body className='card-body' style={{ backgroundColor: '#F9D00F' }}>
                                    <Card.Title className='text-white'>Disclaimer</Card.Title>
                                    <Card.Text className='text-justify text-white'>
                                    Four Wilder developers aiming to make a difference in the programming world through beautifully writen and functional lines of code. You can find our LinkedIn in the social media icons. If you find yourself looking for Full Stack Developers you've come to the right place!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='text-white'>
                            Wild Code School ‘20{<br/>}Created with Edamam API
                        </Row>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem', border: 'none', height: '325px' }}>
                                <Card.Body className='card-body'>
                                    <Card.Title className='text-white text-center'>Follow Us</Card.Title>
                                    <Card.Text className='text-justify text-white'>
                                       
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col>
                    <Form>
                        <div class="form-group" className='mt-1'>
                            <label for="exampleFormControlTextarea1" className='text-white'><h5>Reach Us</h5></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your message...'></textarea>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className='text-white'>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='text-white'>Email:</Form.Label>
                            <Form.Control type="email" placeholder="youremail@example.com" />
                        </Form.Group>
                        <Button variant="warning" type="submit" className='text-white'>
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

