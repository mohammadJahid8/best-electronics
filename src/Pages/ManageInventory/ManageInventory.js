import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css';

const ManageInventory = () => {
    const [items, setItems] = useInventory();
    const navigate = useNavigate();


    const navigateToItemDetails = ItemId => {
        navigate(`/inventory/${ItemId}`);
    }

    //delete a item
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            fetch(`https://guarded-reef-79088.herokuapp.com/items/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    
                        const remainingItems = items.filter(item => item._id !== id)
                        setItems(remainingItems);
                    
                })
        }
    };

    return (
        <>
            <h1 className="text-center all-titles mt-5 pt-5">Manage Inventory</h1>
            <div className="mt-5 container">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Qauntity</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) =>
                                <tr key={item._id}>
                                    <td>
                                        <img className='item-img' src={item.image} alt="" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>{item.description}</td>
                                    <td className='td'>
                                        <i className='pe-2'> <button className="btn btn-danger" onClick={() => handleDeleteItem(item._id)}>Delete</button></i>
                                        <button className='btn btn-primary' onClick={() => navigateToItemDetails(item._id)}>Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end pb-5 pe-2">
                    <Link to='/additem' className="add-button">Add New Item</Link>
                </div>
            </div>


        </>
    );
};

export default ManageInventory;