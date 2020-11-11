import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterCard from './FooterCard';
import SocialMedia from './SocialMedia';
import FooterForm from './FooterForm';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Container style={{ background: '#F69740' }} fluid>
                <Row>
                    <Col lg={4} md={6} s={12}>
                        <FooterCard />
                    </Col>
                    <Col lg={4} md={6} s={12} className='d-flex justify-content-center align-items-start'>
                        <SocialMedia />
                    </Col>
                    <Col lg={4} md={12} s={12}>
                        <FooterForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

