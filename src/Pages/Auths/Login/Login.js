import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import SocialLogin from '../SocialLogin/SocialLogin';
import Footer from '../../HomePage/Footer/Footer';
import Header from '../../HomePage/Header/Header';
import axios from 'axios';
import Loading from '../../../Loading/Loading';




const Login = () => {
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
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);



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

    //login auth
    const handleLogin = async event => {
        event.preventDefault();
        const { email } = userInfo;
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        console.log(userInfo.email, userInfo.password);
        const { data } = await axios.post('http://localhost:5000/gettoken', { email })
        localStorage.setItem('accessToken', data)
        console.log(user, email, data);
    };




    //showing error message in toast
    useEffect(() => {
        // console.log(user);
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast.error('Invalid email')
                    break;
                case 'auth/wrong-password':
                    toast.error('invalid password')
                    break;
                case 'auth/user-not-found':
                    toast.error('user not found')
                    break;
                default:
                    toast.error('something went wrong')
                    break;
            }
        }
    }, [hookError])

    //redirecting the user after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (loading) {
        <Loading />
    }

    useEffect(() => {
        if (user) {
            toast.success('Login Success');
            setTimeout(() => {
                navigate(from);
            }, 1000);

        }
    }, [user])

    return (
        <>
            <Header />
            <div className="container w-50 mx-auto login-form">
                <h2 className=' text-center mt-3 mb-4 title'>Please Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' onChange={emailChange} type="email" placeholder="Enter email" required />
                        {errors?.emailError && <p className="error-msg">{errors.emailError}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' onChange={PasswordChange} type="password" placeholder="Password" required />
                        {
                            errors && <p className="error-msg">{errors.passwordError}</p>
                        }
                    </Form.Group>

                    <p>Forget Password? <Link to='/login' className="text-primary">Reset</Link></p>
                    <p>Don't have any account? <Link to='/register' className="text-primary">PLease Register</Link></p>
                    <Button variant="dark w-50 mx-auto d-block " type="submit" className='input'>
                        Login
                    </Button>
                </Form>
                <ToastContainer />
                <SocialLogin />
            </div>
            <Footer />
        </>
    );

};
export default Login;