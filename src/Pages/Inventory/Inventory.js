import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Inventory.css';
import useInventory from '../../hooks/useInventory';
import Loading from '../../Loading/Loading';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [items] = useInventory();


    return (
        <>

            <h2>this is in the inventory</h2>

            {
                items.length === 0 ? <Loading /> :
                    <div className="items-container container">
                        {
                            items.slice(0, 6).map(item => <InventoryItem key={item._id} item={item} />)
                        }
                    </div>
            }
            <div className='text-center mb-5 '>
                <Link to='/manageinventory' className='update-button w-25 text-decoration-none'>Manage Inventory</Link>

            </div>

        </>
    );
};

export default Inventory;