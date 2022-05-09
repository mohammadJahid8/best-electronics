import React from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';
import useInventory from '../../hooks/useInventory';
import Loading from '../../Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [items] = useInventory();


    return (
        <>
            <div className='mb-5 pb-5'>
                <div className="line-style mt-5 mb-5" >
                    <h1>Inventory Items</h1>
                </div>

                {
                    items.length === 0 ? <Loading /> :
                        <div className="items-container container">
                            {
                                items.slice(0, 6).map(item =>
                                    <InventoryItem key={item._id} item={item} />

                                )
                            }
                        </div>
                }
                <div className='text-center mb-5 mt-5'>
                    <p>
                        <Link to='/manageinventory' className='button-53 w-25 text-decoration-none'>Manage Inventory
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Inventory;