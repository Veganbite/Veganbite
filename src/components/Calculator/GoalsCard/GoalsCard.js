import React from "react";
import { Card, Button, Col } from 'react-bootstrap';

function GoalsCard (props) {
    return (
            <Card className='mt-4' border='warning' style={{ width: '28rem', height: '12rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        {props.title}
                    </Card.Title>
                    <Col className='d-flex justify-content-center'>
                        <Button
                            style={{marginTop: '25px' }}
                            variant="light"
                            onClick={props.handleGoals}
                            name='goals'
                            value='lose'
                            className={props.currentGenderSelected === "lose" ? 'active' : null}>
                            Lose Weight
                        </Button>
                        <Button
                            style={{marginRight: '20px', marginLeft: '20px' ,marginTop: '25px' }}
                            variant="light"
                            onClick={props.handleGoals}
                            name='goals'
                            value='maintain'
                            className={props.currentGenderSelected === "maintain" ? 'active' : null}>
                            Maintain
                        </Button>
                        <Button
                            style={{ marginTop: '25px' }}
                            variant="light"
                            onClick={props.handleGoals}
                            name='goals'
                            value='gain'
                            className={props.currentGenderSelected === "gain" ? 'active' : null}>
                            Gain Weight
                        </Button>
                    </Col>
                </Card.Body>
            </Card>
    );
}

export default GoalsCard