import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/tcs-intern.jpg';
import ManchesterLocationImg from '../../utils/images/amazon-intern.png';
import LiverpoolLocationImg from '../../utils/images/cognizant-intern.jpg';

function Contact() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [alum_name, setAlum_name] = useState('');
    const [reason, setReason] = useState('Expressing Gratitude');
    const [history, setHistory] = useState('No');
    const [msg, setMsg] = useState('');
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if(first_name.length === 0){
            alert("Name can't left Blank!");
        }
        else if(email.length === 0){
            alert("Email can't be left Blank!");
        }
        else if(alum_name.length === 0){
            alert("Alumni Name can't be left Blank!");
        }
        else if(msg.length === 0){
            alert("Message can't be left Blank!");
        }
        else{
            // const url = 'http://localhost:80/react-university-website-master/src/pages/Contact/Contact.php';

            const frmData = new URLSearchParams();
            frmData.append('first_name', first_name);
            frmData.append('last_name', last_name);
            frmData.append('email', email);
            frmData.append('alum_name', alum_name);
            frmData.append('reason', reason);
            frmData.append('history', history);
            frmData.append('msg', msg);
            
            // console.log(frmData);
            // axios.post(url, frmData).then(response=> alert(response.data)).catch(error=> alert(error));

            fetch('http://localhost:80/react-university-website-master/src/pages/Contact/Contact.php', {
                method: 'POST',
                body: frmData
            }).then(response=> response.text()).then(data => {console.log('Fetch is executed!', data);}).catch(error => {console.error('Fetch Error!', error);});
            // const data = {
            //     first_name,
            //     last_name,
            //     email,
            //     alum_name,
            //     reason,
            //     history,
            //     msg
            // };

            // const submitrequest = {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(data)
            // };
        };
              
        console.log('Form submitted:', {
          first_name,
          last_name,
          email,
          alum_name,
          reason,
          history,
          msg,
        });
    
        // // Reset form fields if needed
        // setFirst_name('');
        // setLast_name('');
        // setEmail('');
        // setAlum_name('');
        // setReason('Expressing Gratitude');
        // setHistory('No');
        // setMsg('');
    };
 
    return (
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light pt-13'>
                    <h1 className='text-center fw-semibold mb-5'>Get In Touch With Us</h1>
                    
                    <p className='text-center w-75 mb-3'>At Tezput University, we believe in the enduring power of connections. Every message you send, every word you share, is a bridge that spans the years, bringing us closer together.</p>
                    <p className='text-center w-75 mb-3'>With heartfelt anticipation,</p>
                    <p className='text-center w-75'>The Tezpur University Alumni Network Team</p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' method='post' action= 'Contact.php' onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' id='first_name' name='first_name' placeholder='First_name' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' id='last_name' name='last_name' placeholder='Last name' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' id='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Alumnus you want to Contact</Form.Label>
                        <Form.Control type='text' name='alum_name' placeholder='Enter name of the Alumnus' value={alum_name} onChange={(e) => setAlum_name(e.target.value)} />
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Reason of Approach</Form.Label>
                            <Form.Select name='reason' value={reason} defaultValue="Expressing Gratitude" onChange={(e) => setReason(e.target.value)} >
                                <option>Expressing Gratitude</option>
                                <option>Seeking Guidance</option>
                                <option>Pleading Referrals</option>
                                <option>Applying for Internships</option>
                            </Form.Select>
                        </Col>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Did you Contact them earlier ?</Form.Label>
                            <Form.Select name='history' value={history} defaultValue="No" onChange={(e) => setHistory(e.target.value)}>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" name='msg' value={msg} rows={3} onChange={(e) => setMsg(e.target.value)} />
                    </Form.Group>

                    <Button variant="danger btn-lg" type='submit' onSubmit={handleSubmit}>Submit</Button>
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