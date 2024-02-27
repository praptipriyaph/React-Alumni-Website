import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
            <div className='container my-5'>
                <div className='form-container'>
                    
                    <Form id='contact-form' onSubmit={handleSubmit}>
                        <Form.Label>Roll Number</Form.Label>
                        <Form.Control
                            type='text'
                            name='rollNumber'
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder='Enter your roll number'
                            style={{ marginBottom: '10px' }}
                        />

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email address'
                            style={{ marginBottom: '10px' }}
                        />

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

                        <Button variant="danger btn-lg" type='submit' style={{ marginTop: '15px' }}>Sign In</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Sign;
