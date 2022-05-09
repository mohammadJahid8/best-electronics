import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './MyItem.css';


const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const navigateToItemDetails = ItemId => {
        navigate(`/inventory/${ItemId}`);
    }

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;

            try {
                const { data } = await axios.get(`https://guarded-reef-79088.herokuapp.com/item?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });

                setMyItems(data);
            } catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItems();
    }, [])

    // delete a item
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            fetch(`https://guarded-reef-79088.herokuapp.com/items/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    
                    const remainingItems = myItems.filter(myItem => myItem._id !== id)
                    setMyItems(remainingItems);
                    
                })
        }
    };
    return (
        <>
            <div>
                {
                    myItems.length > 0 ?
                        <div className="mt-5 pt-3 container mb-5 pb-5">
                            <h2 className='text-center mt-4'>My Total Items: {myItems.length}</h2>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Supplier</th>
                                        <th>Qauntity</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myItems.map((myItem) =>
                                            <tr key={myItem._id}>
                                                <td>
                                                    <img className='item-img' src={myItem.image} alt="" />
                                                </td>
                                                <td>{myItem.name}</td>
                                                <td>{myItem.supplier}</td>
                                                <td>{myItem.quantity}</td>
                                                <td>${myItem.price}</td>
                                                <td>{myItem.description}</td>
                                                <td className='td'>
                                                    <i className='pe-2'> <button className="btn btn-danger" onClick={() => handleDeleteItem(myItem._id)}>Delete</button></i>
                                                    <button className='btn btn-primary' onClick={() => navigateToItemDetails(myItem._id)}>Update</button>
                                                </td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        :
                        <div className='container mb-5 mt-5 pt-5 '>
                            <h2 className='all-titles text-center mt-5'>You dont have any Items! Please Add Some Items</h2>
                            <div className="d-flex justify-content-center pb-5 pe-2">
                                <Link to='/additem' className="add-button mt-5">Add New Item</Link>
                            </div>
                        </div>
                }
            </div>

        </>
    );
};

export default MyItem;