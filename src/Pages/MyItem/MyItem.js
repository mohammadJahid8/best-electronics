import React, { useEffect, useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const { data } = await axios.get(`http://localhost:5000/item?email=${email}`);
            setMyItems(data);
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