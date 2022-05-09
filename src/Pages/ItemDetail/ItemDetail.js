import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import './ItemDetail.css'

const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item, setItem] = useItemDetail(inventoryId);
    // const [sold, setSold] = useState(0);
    const { quantity, sold } = item;
    // console.log(quantity);

    //update quantity
    const handleUpdateQuantity = () => {
        let newQuantity = quantity - 1;
        let newSold = sold + 1;
        const newItem = { ...item, quantity: newQuantity, sold: newSold };
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
            <h1 className="text-center">Update Your Product</h1>
            <div className="d-flex mb-5 mt-3 container justify-content-center">
                <div className="scd-card-container">
                    <div className='d-flex'>
                        <img src={item?.image} alt="" className=" w-100" />
                    </div>
                    <div className="">
                        <h2 className="card-titles">{item?.name}</h2>
                        <span className="card-description subtle">{item?.description}</span>
                        <p>Supplier: {item?.supplier}</p>

                        <p>Sold: {sold}</p>
                        <p>
                            Quantity:
                            {quantity > 0 ?
                                quantity
                                :
                                'Stock out'
                            }
                        </p>

                        {/* {item?.quantity > 0 ?
                            < p > Quantity: {item?.quantity}</p>
                            :
                            <p>Quantity: Stock Out</p>
                        } */}
                        <input type="button" value="Delivered" className='restock-button mb-3' onClick={handleUpdateQuantity} disabled={quantity <= 0} />

                        <form className="input-container " onSubmit={hanldeRestockItem}>
                            <input type="number" name="number" className="restock-field field-full align-none" placeholder="Quantity" />
                            <input type="submit" value="Restock" className='restock-button' />
                        </form>
                        {/* <div className="card-read">Read</div> */}

                    </div>

                </div>

            </div>







        </>
    );
};

export default ItemDetail;