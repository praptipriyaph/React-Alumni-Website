import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Sign.css'; // Import the CSS file

function Sign() {
    const [formData, setFormData] = useState({
        rollNumber: '',
        email: '',
        loginAs: 'student' // Default login as student
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission (e.g., sending credentials to the backend)
        console.log(formData);
    };

    return (
        <div className='sign-container'>
            <header className='sign-header'>
                
            </header>
            <div className='container my-5'>
                <div className='form-container'>
                    <h2>Login</h2>
                    <Form id='contact-form' onSubmit={handleSubmit}>
                        <Row className='mb-3 field'>
                            <Form.Label>Roll Number</Form.Label>
                            <Form.Control
                                type='text'
                                name='rollNumber'
                                value={formData.rollNumber}
                                onChange={handleChange}
                                placeholder='Enter your roll number'
                            />
                        </Row>
                        <Row className='mb-3 field'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Enter your email address'
                            />
                        </Row>

                        <Form.Group className='mb-3'>
                            <Form.Label>Login As</Form.Label>
                            <Form.Select
                                name='loginAs'
                                value={formData.loginAs}
                                onChange={handleChange}
                            >
                                <option value='student'>Student</option>
                                <option value='alumni'>Alumni</option>
                                <option value='admin'>Admin</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="danger btn-lg" type='submit'>Log In</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Sign;
