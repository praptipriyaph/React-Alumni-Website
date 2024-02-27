import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/tcs-intern.jpg';
import ManchesterLocationImg from '../../utils/images/amazon-intern.png';
import LiverpoolLocationImg from '../../utils/images/cognizant-intern.jpg';

function Contact() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light pt-13'>
                <h1 className='text-center fw-semibold mb-5'>Get In Touch With Us</h1>
                
                <p className='text-center w-75 mb-3'>At Tezpur University, we believe in the enduring power of connections. Every message you send, every word you share, is a bridge that spans the years, bringing us closer together.</p>
                <p className='text-center w-75 mb-3'>With heartfelt anticipation,</p>
                <p className='text-center w-75'>The Tezpur University Alumni Network Team</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Alumnus you want to Contact</Form.Label>
                    <Form.Control placeholder='Enter name of the Alumnus' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Reason of Approach</Form.Label>
                        <Form.Select defaultValue="Expressing Gratitude">
                            <option>Expressing Gratitude</option>
                            <option>Seeking Guidance</option>
                            <option>Pleading Referrals</option>
                            <option>Applying for Internships</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Did you Contact them earlier ?</Form.Label>
                        <Form.Select defaultValue="No">
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Announcements</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Campus Visit in TCS</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Interships at Amazon</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Internship at Cognizant</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;