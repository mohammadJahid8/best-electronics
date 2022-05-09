import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {

    return (
        <div className='body'>
            <div className="background">
                <div className="touch-container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>WITH THE CEO</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : +01633 909408</div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control btn-input" placeholder="NAME" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control btn-input" placeholder="EMAIL" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control btn-input" placeholder="CONTACT NO" />
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control btn-input" placeholder="MESSAGE" />
                                    </div>
                                    <div className="app-form-group buttons">

                                        <button className="app-form-button btn-input">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default GetInTouch;