import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [info] = useInventory();

    return (
        <div >
            <h2>this is in the inventory</h2>
            <div className='row container mx-auto'>
                {
                    info.map(item => <InventoryItem key={item.id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Inventory;