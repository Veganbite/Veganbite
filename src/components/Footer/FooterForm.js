import React from 'react';
import { Form, Button } from 'react-bootstrap';


const FooterForm = () => {
    return (
        <div>
            <Form>
                <div class="form-group" className='pt-3 text-center'>
                    <label for="exampleFormControlTextarea1" className='text-white' style={{ fontSize: '1.25rem' }}>Reach Us</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your message...'></textarea>
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-white'>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='text-white'>Email:</Form.Label>
                    <Form.Control type="email" placeholder="youremail@example.com" />
                </Form.Group>
                <div className='d-flex justify-content-end pb-3'>
                    <Button variant="warning" type="submit" className='text-white'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default FooterForm
