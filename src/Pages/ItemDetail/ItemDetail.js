import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { inventoryId } = useParams();
    const [item] = useItemDetail(inventoryId);
    console.log(item);

    return (
        <div>
            <h2>Detail of:{inventoryId}</h2>
            <div className="card mx-auto w-25" >
                <div className="card-body" >
                    <img src={item?.thumbnailUrl} alt="" />
                    <h5 className="card-title">Items</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{item?.title}</p>
                    {/* <Link to={() => navigateToItemDetails(id)} className="card-link">Update</Link> */}
                    {/* <button onClick={() => navigateToItemDetails(id)}>Update</button> */}

                </div>
            </div>
        </div>
    );
};

export default ItemDetail;