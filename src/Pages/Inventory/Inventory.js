import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import useInventory from '../../hooks/useInventory';
import Loading from '../../Loading/Loading';
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
                {
                    items.length === 0 ? <Loading /> :
                        <div className='row container mx-auto'>
                            {
                                items.slice(0, 6).map(item => <InventoryItem key={item._id} item={item} />)
                            }
                        </div>
                }
                <Link to='/manageinventory' className='d-flex justify-content-center mb-5'>Manage Inventory</Link>
            </div>
            <Footer />
        </>
    );
};

export default Inventory;