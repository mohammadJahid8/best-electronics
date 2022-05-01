import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    ] = useCreateUserWithEmailAndPassword(auth);


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
    }
    

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast.error('invalid email')
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
    }, [hookError]);


    return (
        <>
            <div className="container w-50 mx-auto login-form">
                <h2 className=' text-center mt-3 mb-4 title'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='input' onChange={nameChange} name='name' type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input' onChange={emailChange} name='email' type="email" placeholder="Enter email" />
                        {errors?.emailError && <p className="error-msg">{errors.emailError}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input' onChange={PasswordChange} name='password' type="password" placeholder="Password" />

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
            </div>
        </>
    );
};

export default Register;