import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';

const ManageInventory = () => {
    const [items, setItems] = useInventory();


    //delete a item
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?')
        if (proceed) {
            fetch(`https://guarded-reef-79088.herokuapp.com/items/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = items.filter(item => item._id !== id)
                    setItems(remainingItems);
                })
        }
    }

    return (
        <>
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
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDeleteItem(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end pb-5 pe-2">
                    <Link to='/additem' className="">Add New Item</Link>
                </div>
            </div>


        </>
    );
};

export default ManageInventory;