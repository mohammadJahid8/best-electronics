import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Footer from '../../HomePage/Footer/Footer';
import Header from '../../HomePage/Header/Header';


const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        generalError: '',
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    //get name
    const nameChange = event => {
        setUserInfo({ ...userInfo, name: event.target.value });
    }

    //get email
    const emailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: '' });
        } else {
            setErrors({ ...errors, emailError: 'Invalid Email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    };

    //get password
    const PasswordChange = (event) => {
        const passRegex = /.{6,}/;
        const validPass = passRegex.test(event.target.value);
        if (validPass) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, passwordError: '' })

        } else {
            setErrors({ ...errors, passwordError: 'Password must be at least 6 characters' })

        }
    };


    //signup auth
    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        if (user) {
            toast.success('Register Success')
        }
    }

    //showing error message in toast
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                default:
                    toast.error('something went wrong')
                    break;
            }
        }
    }, [hookError]);


    //redirecting the user after register
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])


    return (
        <>
            <Header />
            <div className="container w-50 mx-auto login-form">
                <h2 className=' text-center mt-3 mb-4 title'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='input' onChange={nameChange} name='name' type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' onChange={emailChange} name='email' type="email" placeholder="Enter email" required />
                        {errors?.emailError && <p className="error-msg">{errors.emailError}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' onChange={PasswordChange} name='password' type="password" placeholder="Password" required />

                        {
                            errors && <p className="error-msg">{errors.passwordError}</p>
                        }
                    </Form.Group>

                    <p>Already have an account? <Link to='/login' className="text-primary">Login Instead</Link></p>
                    <Button variant="dark w-50 mx-auto d-block " type="submit" className='input'>
                        Register
                    </Button>
                </Form>
                <ToastContainer />
                <SocialLogin />
            </div>
            <Footer />
        </>
    );
};

export default Register;