import React from 'react';
import './Stats.css';

const Stats = () => {


    return (
        <div className='container mb-5'>
            <div className="stat-container">

                <div className="row">

                    <div className="four col-md-3">
                        <div className="counter-box colored">
                            <i className="fa fa-thumbs-up"></i>
                            <span className="counter">2147</span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa fa-users"></i>
                            <span className="counter">3275</span>
                            <p>Total Sellers</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa  fa-shopping-cart"></i>
                            <span className="counter">289</span>
                            <p>Available Products</p>
                        </div>
                    </div>
                    <div className="four col-md-3">
                        <div className="counter-box">
                            <i className="fa-solid fa-handshake"></i>
                            <span className="counter">40</span>
                            <p>Supplier</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;