import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';
import mission from '../../assets/mission.png';
import premium from '../../assets/premium.png';
import quotation from '../../assets/quotation.png';
import unnamed from '../../assets/unnamed.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Jumbotron fluid style={{ backgroundImage: `url(${unnamed})` }}>
                <Container>
                    <h1 className='title mb-4 pl-4'>About us</h1>
                    <p className='text-justify'>
                    Behind the Veganbite app, you’ll find a motivated and enthusiastic team. We truly believe that being Vegan doesn’t mean tasteless and boring meals. With Veganbite, we're helping people with tasty meal plans adapted to their body needs.
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Card style={{ width: '18rem', border: 'none', height: '313px' }}>
                            <img src={mission} className='mr-auto ml-auto mb-1' height='60px' width='60px' alt='mission icon'/>
                            <Card.Body className='card-body-about-us'>
                                <Card.Title className='text-white'>Our Mission</Card.Title>
                                <Card.Text className='text-justify text-white'>
                                Veganbite mission: help as many people to enter the vegan world with tasty recipes. We should get more text here. Will look nice. We'll figure something else out. I hope.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mb-3 d-flex justify-content-center'>
                        <Card style={{ width: '18rem', border: 'none', height: '350px' }}>
                            <img src={premium} className='mr-auto ml-auto mb-1' height='60px' width='60px' alt='premium icon'/>
                            <Card.Body className='card-body-about-us'>
                                <Card.Title className='text-white'>Go Premium</Card.Title>
                                <Card.Text className='text-justify text-white'>
                                Everyone can try Veganbite app for free and get meal plans adapted to their body type needs and goals. With Veganbite Pro, you will have access to unlimited shuffles, more recipes and you can register to have easy access to your data. 
                                </Card.Text>
                            </Card.Body>
                                <Button variant="warning text-white">Get Veganbite Pro</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='title mb-4 pl-4'>Vegan Testimonial</h2>
                <hr/>
                <img src={quotation} height='30px' width='30px' alt='quotation marks'/>
                <p className='text-justify'>
                I’ve been vegan for seven years, but the first two years were a disaster. I had no
                idea what I was doing, what to buy, what to eat, or even how to eat it. It wasn’t
                until my body started to show visible signs of weight loss, fatigue and a weakened
                immune system that I truly learned how to be a vegan. Now I regularly take my
                vitamins: B12 first and foremost, iron and Iodine (region specific). I try to eat
                the colour of the rainbow, literally, with dark and light greens, yellows, purples,
                reds, oranges, etc. I workout regularly and drink 3L of water daily. I now feel
                fantastic and no longer suffer from any of my earlier symptoms.
                </p>
                <p><em>Erin Mcintosh, 2020</em></p>
                <hr/>
            </Container>
            <Container>
                <p className='font-weight-bold'>
                Please consult your doctor before changing your diet. The information provided in this app is designed to be a suggestion of meal plans based only on caloric intake. This information should not be used as medical advice of any kind.
                </p>
            </Container>
        </div>
    )
}

export default AboutUs
