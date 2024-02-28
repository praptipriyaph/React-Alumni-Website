import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file

function SignIn() {
    const [roll_n, setRoll_n] = useState('');
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');
    const [login_as, setLogin_as] = useState('Student');
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if(roll_n.length === 0){
            alert("Roll No. can't left Blank!");
        }
        else if(email.length === 0){
            alert("Email can't be left Blank!");
        }
        else if(passw.length < 8){
            alert("Password should be atleast of 8 characters!");
        }
        else{
            const url = 'http://localhost:80/react-university-website-master/src/pages/Sign/SignIn.php';

            const frmData = new URLSearchParams();
            frmData.append('roll_n', roll_n);
            frmData.append('email', email);
            frmData.append('passw', passw);
            frmData.append('login_as', login_as);
            
            console.log(frmData);
            axios.post(url, frmData).then(response=> alert(response.data)).catch(error=> alert(error));
        };
              
        console.log('Form submitted:', {
          roll_n,
          email,
          passw,
          login_as,
        });
    
        setPassw('');
        setLogin_as('Student');
    
    };

    return (
        <div className='sign-container'>
            <div className='container my-5 '>
                <div className='form-container'>
                    
                    <Form id='contact-form' method='POST' action= 'Sign.php'  onSubmit={handleSubmit}>
                        <Form.Label>Roll Number</Form.Label>
                        <Form.Control
                            type='text'
                            id='roll_n'
                            name='roll_n'
                            value={roll_n}
                            onChange={(e) => setRoll_n(e.target.value)}
                            placeholder='Enter your roll number'
                            style={{ width: '33.157vw', marginBottom: '1vw' }}
                        />

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            style={{ width: '33.157vw', marginBottom: '1vw' }}
                        />

                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='text'
                            id='passw'
                            name='passw'
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                            placeholder='Enter Password'
                            style={{ width: '33.157vw', marginBottom: '1vw' }}
                        />

                        <Form.Label>Login As</Form.Label>
                        <Form.Select
                            id='login_as'
                            name='login_as'
                            value={login_as}
                            onChange={(e) => setLogin_as(e.target.value)}
                            style={{ width: '33.157vw', marginBottom: '1vw' }}
                        >
                            <option value='student'>Student</option>
                            <option value='alumni'>Alumni</option>
                            <option value='admin'>Admin</option>
                        </Form.Select>

                        <div style={{width: '33.157vw', marginBottom: '0vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <Button 
                                variant="danger btn-lg" 
                                type='submit' 
                                style={
                                    { width: '9.1vw', marginTop: '0.57vw', display: 'block'}
                                    }
                            >
                                Sign In
                            </Button>
                            <p
                                style={
                                    { marginTop: '0.57vw', fontSize: '1.3rem'}
                                }
                            >
                                If you do not have an account:
                            </p>
                            <Button 
                            variant="danger btn-lg" 
                            type='submit' 
                            style={
                                { width: '9.1vw', marginTop: '0.1vw', display: 'block'}
                                }
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Form>                    
                </div>
            </div>
        </div>
    );
}

export default SignIn;
