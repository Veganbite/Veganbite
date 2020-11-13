import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const FooterCard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='mt-3 mb-3 d-flex justify-content-center'>
                        <Card style={{ width: '18rem', border: 'none', height: '235px' }}>
                            <Card.Body className='card-body pb-3' style={{ backgroundColor: '#F9D00F'}}>
                                <Card.Title className='text-white'>Disclaimer</Card.Title>
                                <Card.Text className='text-justify text-white'>
                                Four Wilders looking for a chance to prove themselves in the real world. If you like the web-app make sure to visit our LinkedIn profiles and drop us a message. You'll find all the links in the Social Media Icons.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='text-white mt-3 ml-3'>
                    Wild Code School ‘20{<br/>}Created with Edamam API
                </Row>
            </Container>
        </div>
    )
}

export default FooterCard
