import React from "react";
import { Card, Button, Col } from 'react-bootstrap';

function GenderCard (props) {
    return (
            <Card border='warning' className='mt-4'>
                <Card.Body style={{ width: '18rem', height: '200px' }}>
                    <Card.Title className='text-center'>
                        {props.title}
                    </Card.Title>
                    <Col className='d-flex justify-content-center'>
                        <Button
                            style={{ marginRight: '20px', marginTop: '25px' }}
                            variant='light' 
                            name="gender" 
                            value="male" 
                            onClick={props.handleChangeGender} 
                            className={props.currentGenderSelected === "male" ? 'active' : null} >
                                Male
                        </Button>
                        <Button
                            style={{ marginLeft: '20px', marginTop: '25px' }}
                            variant='light' 
                            name="gender" 
                            value="female" 
                            onClick={props.handleChangeGender} 
                            className={props.currentGenderSelected === "female" ? 'active' : null}>
                                Female
                        </Button>
                    </Col>
                </Card.Body>
            </Card>
    );
}

export default GenderCard