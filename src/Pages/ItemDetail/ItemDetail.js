import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useItemDetail(inventoryId);
    const { quantity } = item;
    // console.log(quantity);

    const handleUpdateQuantity = () => {
        let newQuantity = quantity - 1;
        const newItem = { ...item, quantity: newQuantity };
        console.log(newItem);
        setItem(newItem)
        

        // send updated quantity to the server
        fetch(`http://localhost:5000/items/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('updated quantity');
            })

    }

    return (
        <div>
            <h2>Detail of:{inventoryId}</h2>
            <div className="card mx-auto w-25 mb-5 mt-4" >
                <div className="card-body" >
                    <img className='w-100 ' src={item?.image} alt="" />
                    <h5 className="card-title">{item?.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item?.description}</h6>
                    <p className="card-text">Quantity:{item?.quantity}</p>
                    <button onClick={handleUpdateQuantity}>Delivered</button>

                </div>
            </div>
        </div>
    );
};

export default ItemDetail;