import React from 'react';
import { Link } from 'react-router-dom';

import useInventory from '../../hooks/useInventory';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [items] = useInventory();

    return (
        <>
            <Header />
            <div>
                <h2>this is in the inventory</h2>
                <div className='row container mx-auto'>
                    {
                        items.slice(0, 6).map(item => <InventoryItem key={item._id} item={item} />)
                    }
                </div>
                <Link to='/manageinventory' className='d-flex justify-content-center mb-5'>Manage Inventory</Link>
            </div>
            <Footer />
        </>
    );
};

export default Inventory;