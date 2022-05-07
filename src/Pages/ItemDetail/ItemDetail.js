import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';

const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useItemDetail(inventoryId);
    const { quantity } = item;
    // console.log(quantity);

    //update quantity
    const handleUpdateQuantity = () => {
        let newQuantity = quantity - 1;
        const newItem = { ...item, quantity: newQuantity };
        console.log(newItem);
        setItem(newItem)


        // send updated quantity to the server
        fetch(`https://guarded-reef-79088.herokuapp.com/items/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert('updated quantity');
            })


    }

    //restock quantity
    const hanldeRestockItem = (event) => {
        event.preventDefault();
        const inputQuantity = parseInt(event.target.number.value);
        const newQuantity = quantity + inputQuantity;
        const newItem = { ...item, quantity: newQuantity }
        setItem(newItem);

        // send restock quantity to the server
        fetch(`https://guarded-reef-79088.herokuapp.com/items/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert('updated quantity');
            })
        event.target.reset();

    }


    return (
        <>
            <Header />
            <div className="mx-auto w-25 mb-5 mt-4">
                <h2>Detail of:{inventoryId}</h2>
                <div className="card " >
                    <div className="card-body" >
                        <img className='w-100 ' src={item?.image} alt="" />
                        <h5 className="card-title">{item?.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item?.description}</h6>
                        <p className="card-text">Quantity:{item?.quantity}</p>
                        <button onClick={handleUpdateQuantity}>Delivered</button>

                    </div>
                </div>
                <div className='mt-4'>
                    <form className="row g-3" onSubmit={hanldeRestockItem}>
                        <div className="col-auto">

                            <input type="number" name="number" className="form-control" id="inputnumber" placeholder="Restock Quantity" />
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary mb-3 w-25 d-block">Restock</button>

                    </form>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ItemDetail;