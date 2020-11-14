import React from "react";
import { Card, Col } from 'react-bootstrap';
import './InputCards.css';

function InputCard (props) {
    return (
        <Card className='mt-4' border='warning' style={{ width: '18rem', height: '12rem' }}>
            <Card.Body>
                <Card.Title className='text-center'>
                    {props.title}
                </Card.Title>
                <Col className='d-flex justify-content-center'>
                    <input
                        style={{ marginTop: '25px', width: '50px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', textAlign: 'center' }}
                        value={props.currentvalue}
                        onChange={props.handleChange}
                        name={props.name}
                        placeholder={props.unit}
                        />
                </Col>
            </Card.Body>
        </Card>
    );
}

export default InputCard