import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div>
            <h3 style={{ color: "white", fontSize: '1.25rem' }} className='pt-4 pb-3 text-center' >Follow Us</h3>
            <div className='social-container'>
                <a href="linkedin do André" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/artur-branco-fernandes-a42200166/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="linkedin da Filipa" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="linkedin da Inês" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <div style={{ marginTop: '65px', display: 'flex', justifyContent: 'center' }}>
                <Button variant='warning' style={{ padding: '20px', color: 'white', border: '3px solid white' }} className='btn-lg'>
                    Sign Up Now
                </Button>
            </div>
        </div>
    )
}

export default SocialMedia
