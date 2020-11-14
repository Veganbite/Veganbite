import React from "react";
import { Card, Button, Col } from 'react-bootstrap';

function PhysicalAct (props) {
    return (
        <Card className='mt-4' border='warning' style={{ width: '38rem', height: '200px' }}>
            <Card.Body>
                <Card.Title className='text-center'>
                    {props.title}
                </Card.Title>
                <Col className='d-flex justify-content-center'>
                    <Button
                        style={{ marginRight: '20px', marginTop: '25px' }}
                        variant="light" 
                        onClick={props.handleActivityLevel}
                        name="physicalActivity"
                        value="sedentary"
                    >
                        Sedentary
                    </Button>
                    <Button
                        style={{ marginRight: '20px', marginLeft: '20px', marginTop: '25px' }}
                        variant="light"
                        onClick={props.handleActivityLevel}
                        name="physicalActivity"
                        value="light"
                    >
                        Light
                    </Button>
                    <Button
                        style={{ marginRight: '20px', marginLeft: '20px', marginTop: '25px' }}
                        variant="light" 
                        onClick={props.handleActivityLevel}
                        name="physicalActivity"
                        value="moderate"
                    >
                        Moderate
                    </Button>
                    <Button
                        style={{ marginLeft: '20px', marginTop: '25px' }}
                        variant="light" 
                        onClick={props.handleActivityLevel}
                        name="physicalActivity"
                        value="vigorous"
                    >
                        Vigorous
                    </Button>
                </Col>
            </Card.Body>
        </Card>
    );
}

export default PhysicalAct;