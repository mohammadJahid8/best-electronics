import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const InventoryItem = ({ item }) => {
    const { _id, title, image } = item;

    const navigate = useNavigate();

    const navigateToItemDetails = ItemId => {
        navigate(`/inventory/${ItemId}`);
    }
    return (
        <>
            <div className='col-4 g-4 mb-5' >
                <div className="card" >
                    <div className="card-body" >
                        <img className='w-100' src={image} alt="" />
                        <h5 className="card-title">Items</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">{title}</p>

                        <button onClick={() => navigateToItemDetails(_id)}>Update</button>

                    </div>
                </div >
            </div>
            
        </>
    );
};

export default InventoryItem;