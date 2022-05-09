
import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-body'>
            <header className="header">
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Best Electronics</span>
                        <span className="heading-primary-sub">A new destination for Gadget Lovers</span>
                    </h1>
                    <Link to="/about" className="banner-btn banner-btn-white banner-btn-animated">Know More</Link>
                </div>
            </header>
        </div>
    );
};

export default Banner;