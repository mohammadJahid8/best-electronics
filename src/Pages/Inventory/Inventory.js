import React from 'react';

import useInventory from '../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [items] = useInventory();

    return (
        <div >
            <h2>this is in the inventory</h2>
            <div className='row container mx-auto'>
                {
                    items.map(item => <InventoryItem key={item._id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Inventory;