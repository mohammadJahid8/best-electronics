import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'


const InventoryItem = ({ item }) => {
    const { _id, name, image, price, supplier, quantity, description } = item;


    const navigate = useNavigate();

    const navigateToItemDetails = ItemId => {
        navigate(`/inventory/${ItemId}`);
    }
    return (
        <>
            <div>
                <div className="snip1418">
                    <img src={image} alt="sample85" />

                    <figcaption>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p className='mt-1'><span className='fw-bold'>Supplier:</span>{supplier}</p>
                        <p><span className='fw-bold'>Available:</span>{quantity}</p>
                        <div className="price">
                            ${price}
                        </div>
                        <div className="d-flex justify-content-center">
                            <div>
                                <button className="button-51" onClick={() => navigateToItemDetails(_id)}> <span>Update</span></button>

                            </div>
                        </div>
                    </figcaption>


                </div>
            </div>
        </>
    );
};

export default InventoryItem;