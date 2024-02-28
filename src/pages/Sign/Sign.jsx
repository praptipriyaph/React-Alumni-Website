import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Sign.css'; // Import the CSS file

function Sign() {
    const [formData, setFormData] = useState({
        rollNumber: '',
        email: '',
        loginAs: 'student' 
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className='sign-container'>
            <div className='container my-5 '>
                <div className='form-container'>
                    
                    <Form id='contact-form' className='field' onSubmit={handleSubmit}>
                        <Form.Label>Roll Number</Form.Label>
                        <Form.Control
                            type='text'
                            name='rollNumber'
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder='Enter your roll number'
                            style={{ width: '33.157vw', marginBottom: '10px' }}
                        />

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email address'
                            style={{ width: '33.157vw', marginBottom: '10px' }}
                        />

                        <Form.Label>Login As</Form.Label>
                        <Form.Select
                            name='loginAs'
                            value={formData.loginAs}
                            onChange={handleChange}
                            style={{ width: '33.157vw', marginBottom: '10px' }}
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
