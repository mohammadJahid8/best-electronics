import React from 'react';
import useInventory from '../../hooks/useInventory';
import './ShowMyItem.css'

const ShowMyItem = ({ myItem }) => {
    const { name, quantity, price, image, description, _id } = myItem;
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
                    const remainingItems = items.filter(item => _id !== id)
                    setItems(remainingItems);
                })
        }
    }
    return (
        <div id="container">

            <div className="product-details">

                <h1>{name}</h1>


                <p className="information">{description}</p>



                <div className="control">

                    <button className="my-item-btn" onClick={() => handleDeleteItem(_id)}>
                        {/* <span className="price">${price}</span> */}
                        <span className="trash-can"><i className="fa fa-trash-can" aria-hidden="true"></i></span>
                        <span className="delete">Delete</span>
                    </button>

                </div>

            </div>

            <div className="product-image">

                <img src={image} alt="" />


                <div className="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Height : </strong>5 Ft </li>
                        <li><strong>Shade : </strong>Olive green</li>
                        <li><strong>Decoration: </strong>balls and bells</li>
                        <li><strong>Material: </strong>Eco-Friendly</li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ShowMyItem;