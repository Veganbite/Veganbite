import React from "react";
import male from '../../../assets/male.png';
import female from '../../../assets/female.png';
import { Card, Button, Col } from 'react-bootstrap';

function GenderCard (props) {
    return (
            <Card border='warning' className='mt-4'>
                <Card.Body style={{ width: '18rem', height: '12rem' }}>
                    <Card.Title className='text-center'>
                        <h5>{props.title}</h5>
                    </Card.Title>
                    <Col className='d-flex justify-content-center'>
                        <Button
                            style={{ marginRight: '20px', marginTop: '25px', borderRadius: '50%', paddingTop: '10px', paddingBottom: '10px' }}
                            variant='outline-warning'
                            name="gender" 
                            value="male"
                            onClick={props.handleChangeGender}  
                            className={props.currentGenderSelected === "male" ? 'active' : null}>
                            <img src={male} alt='male' heigt='50px' width='50px' onClick={props.handleChangeGender}/>
                        </Button>
                        <Button
                            style={{ marginLeft: '20px', marginTop: '25px', borderRadius: '50%', paddingTop: '10px', paddingBottom: '10px' }}
                            variant='outline-warning'
                            name="gender" 
                            value="female" 
                            onClick={props.handleChangeGender} 
                            className={props.currentGenderSelected === "female" ? 'active' : null}>
                            <img src={female} atl='female' height='50px' width='50px' onClick={props.handleChangeGender}/>
                        </Button>
                    </Col>
                </Card.Body>
            </Card>
    );
}

export default GenderCard