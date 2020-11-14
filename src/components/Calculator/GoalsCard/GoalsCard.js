import React from "react";
import { Card, Button, Col } from 'react-bootstrap';
import './GoalsCard.css'

function GoalsCard (props) {
    return (
            <Card className='mt-4' border='warning' style={{ width: '38rem', height: '200px' }}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        {props.title}
                    </Card.Title>
                    <Col className='d-flex justify-content-center battans'>
                        <Button
                            style={{ marginRight: '20px', marginTop: '25px' }}
                            variant="light"
                            onClick={props.handleGoals}
                            name='goals'
                            value='lose'
                            className={props.currentGenderSelected === "lose" ? 'active' : null}>
                            Lose Weight
                        </Button>
                        <Button
                            style={{ marginRight: '20px', marginTop: '25px' }}
                            variant="light"
                            onClick={props.handleGoals}
                            name='goals'
                            value='maintain'
                            className={props.currentGenderSelected === "maintain" ? 'active' : null}>
                            Maintain
                        </Button>
                        <Button
                            style={{ marginRight: '20px', marginTop: '25px' }}
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