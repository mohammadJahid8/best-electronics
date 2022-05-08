
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <header>
                <div className="overlay">
                    <h1>Simply The Best</h1>
                    <h3>Reasons for Choosing US</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                    <br />
                    <button className='banner-btn'>READ MORE</button>
                </div>
            </header>
        </div>
    );
};

export default Banner;