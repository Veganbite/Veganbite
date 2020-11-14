import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const BFCard = () => {
    return (
        <Row>
            <Col className='d-flex justify-content-center'>
                <img src={''} width='250px' height='250px'/>
            </Col>
            <Col>
                <Card className='d-flex justify-content-center' style={{ width: '320px', border: 'none', height: '250px', backgroundColor: 'gray' }}>
                    <Card.Body>
                    <Card.Title
                    className='text-warning text-center'
                    style={{ border: '1px solid #F69740' }}
                    >BREAKFAST</Card.Title>
                    <Card.Text className='text-center mt-5'>
                    <h5>props.mealTitle</h5>
                    </Card.Text>
                    <Col className='d-flex justify-content-between'>
                        <Button className='mt-5 text-white' variant='warning'>props.calories</Button>
                        <Button className='mt-5' variant='warning'><a href='props.recipeLink' style={{ textDecoration: 'none', color: 'white' }}>Get the Recipe</a></Button>
                    </Col>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default BFCard;