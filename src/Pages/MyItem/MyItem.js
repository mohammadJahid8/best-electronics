import React, { useEffect, useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import ShowMyItem from '../ShowMyItem/ShowMyItem';
import useInventory from '../../hooks/useInventory';
import { Table } from 'react-bootstrap';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [items, setItems] = useInventory();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            console.log(email);
            try {
                const { data } = await axios.get(`https://guarded-reef-79088.herokuapp.com/item?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                console.log(data);
                setMyItems(data);
            } catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItems();
    }, [user])




    // delete a item
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            fetch(`https://guarded-reef-79088.herokuapp.com/items/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount) {
                        const remainingItems = myItems.filter(myItem => myItem._id !== id)
                        setMyItems(remainingItems);
                        // setItems(remainingItems);
                    }
                })
        }
    }
    return (
        <>

            <div>
                <h2 className='text-center mt-4'>My Total Items: {myItems.length}</h2>

                <div className="mt-3 container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Qauntity</th>
                                <th>Price</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myItems.map((myItem) =>
                                    <tr key={myItem._id}>
                                        <td>{myItem.name}</td>
                                        <td>{myItem.quantity}</td>
                                        <td>${myItem.price}</td>
                                        <td>{myItem.description}</td>
                                        <td>
                                            <button className="" onClick={() => handleDeleteItem(myItem._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </div>
                )

            </div>

        </>
    );
};

export default MyItem;