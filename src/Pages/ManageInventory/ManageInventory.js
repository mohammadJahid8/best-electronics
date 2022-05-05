import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [items] = useInventory();
    return (
        <div className="mt-5 container">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Sl.</th>
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
                                <td>{item.sl}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div className="d-flex justify-content-end pb-5 pe-2">
                <Link to='/additem' className="btn btn-primary ">Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;