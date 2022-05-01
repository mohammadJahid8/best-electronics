import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    


    return (
        <>
            <div className="container w-50 mx-auto login-form">
                <h2 className=' text-center mt-3 mb-4 title'>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' type="password" placeholder="Password" />
                    </Form.Group>

                    <p>Forget Password? <Link to='/login' className="text-primary">Reset</Link></p>
                    <p>Don't have any account? <Link to='/register' className="text-primary">PLease Register</Link></p>
                    <Button variant="dark w-50 mx-auto d-block " type="submit" className='input'>
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;