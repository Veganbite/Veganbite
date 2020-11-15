import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

class LCard extends React.Component {
    render() {
        const { name, pic, calories, recipe } = this.props;
        return (
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img src={pic} width='250px' height='250px' alt={name}/>
                </Col>
                <Col>
                    <Card className='d-flex justify-content-center' style={{ width: '320px', border: 'none', height: '250px' }}>
                        <Card.Body>
                        <Card.Title
                        className='text-warning text-center'
                        style={{ border: '1px solid #F69740' }}
                        >LUNCH</Card.Title>
                        <Card.Text className='text-center mt-5'>
                        <h5>{name}</h5>
                        </Card.Text>
                        <Col className='d-flex justify-content-between'>
                            <Button className='mt-5 text-white' variant='warning'>{calories}</Button>
                            <Button className='mt-5' variant='warning'><a href={recipe} style={{ textDecoration: 'none', color: 'white' }}>Get the Recipe</a></Button>
                        </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default LCard;