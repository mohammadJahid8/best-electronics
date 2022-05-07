import React, { useEffect, useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            try {
                const { data } = await axios.get(`http://localhost:5000/item?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                setMyItems(data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        getMyItems();
    }, [user])

    return (
        <>
            <Header />
            <div>
                <h2>this is my item{myItems.length}</h2>
            </div>
            <Footer />
        </>
    );
};

export default MyItem;