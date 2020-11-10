import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Jumbotron fluid className='bg-white'>
                <Container>
                    <h1>About us</h1>
                    <p>
                    Behind the Veganbite app, you’ll find a motivated and enthusiastic team. We truly believe that being Vegan doesn’t mean tasteless and boring meals. With Veganbite, we're helping people with tasty meal plans adapted to their body needs.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default AboutUs
