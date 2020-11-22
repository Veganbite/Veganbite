import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

class BFCard extends React.Component {
    render() {
        const { label, image, calories, recipe } = this.props;
        return (
            <Container>
            <Row style={{ marginTop: '10px', marginBottom: '10px'}}>
                <Col className='d-flex justify-content-center'>
                    <img src={image} width='275px' height='275px' alt={label}/>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Card className='d-flex justify-content-center' style={{ width: '320px', border: 'none', height: '275px' }}>
                        <Card.Body>
                        <Card.Title
                        className='text-warning text-center'
                        style={{ border: '1px solid #F69740' }}
                        >BREAKFAST</Card.Title>
                        <Card.Text className='text-center mt-5'>
                        <h5>{label}</h5>
                        </Card.Text>
                        <Col className='d-flex justify-content-between'>
                            <Button className='mt-5 text-white' variant='warning'>{parseInt(calories).toFixed(0)}Kcal</Button>
                            <Button className='mt-5' variant='warning'><a href={recipe} style={{ textDecoration: 'none', color: 'white' }}>Get the Recipe</a></Button>
                        </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default BFCard;