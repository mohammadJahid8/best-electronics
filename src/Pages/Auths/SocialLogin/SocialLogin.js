import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import Loading from '../../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    //redirecting the user after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    useEffect(() => {
        if (error) {
            toast.error(error.code);
        }
    }, [error]);

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    if (loading) {
        return <Loading />
    }


    return (
        <div>
            <div className='d-flex align-items-center mt-2'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-secondary w-50 mx-auto d-block my-2 input'>
                    <img style={{ width: '22px' }} src={google} alt="" />
                    <span className='px-1'> Google Log In</span></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;