import React from "react";
import { Card, Button, Col } from 'react-bootstrap';

function PhysicalAct (props) {
    return (
        <Card className='mt-4' border='warning' style={{ width: '28rem', height: '12rem' }}>
            <Card.Body>
                <Card.Title className='text-center'>
                    {props.title}
                </Card.Title>
                <Col className='d-flex justify-content-center'>
                    <Col className='d-flex flex-column'>
                        <Button
                            style={{ marginTop: '8px' }}
                            variant="light" 
                            onClick={props.handleActivityLevel}
                            name="physicalActivity"
                            value="sedentary"
                            >
                            Sedentary
                        </Button>
                        <Button
                            style={{ marginTop: '15px' }}
                            variant="light" 
                            onClick={props.handleActivityLevel}
                            name="physicalActivity"
                            value="moderate"
                        >
                            Moderate
                        </Button>
                    </Col>
                    <Col className='d-flex flex-column'>
                        <Button
                            style={{ marginTop: '8px' }}
                            variant="light"
                            onClick={props.handleActivityLevel}
                            name="physicalActivity"
                            value="light"
                            >
                            Light
                        </Button>
                        <Button
                            style={{ marginTop: '15px' }}
                            variant="light" 
                            onClick={props.handleActivityLevel}
                            name="physicalActivity"
                            value="vigorous"
                            >
                            Vigorous
                        </Button>
                    </Col>
                </Col>
            </Card.Body>
        </Card>
    );
}

export default PhysicalAct;