import React from 'react';
import './RunningOrder.css';
import useInventory from '../../hooks/useInventory';

const RunningOrder = () => {
    const [items] = useInventory();

    return (
        <div className='order-body container mt-5'>
            <h2 className='all-titles mt-2 pt-2'>Running Order Tracking</h2>
            <div className="order-container">
                <article className="card">
                    <header className="card-header">Customers Orders Tracking </header>
                    <div className="card-body">
                        <h6>Order ID: OD45345345435</h6>
                        <article className="card">
                            <div className="card-body row">
                                <div className="col"> <strong>Estimated Delivery time:</strong> <br />29 May 2022 </div>
                                <div className="col"> <strong>Ordered BY:</strong> <br /> Akkas Ali, | <i className="fa fa-phone"></i> +01598675986 </div>
                                <div className="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                <div className="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                            </div>
                        </article>
                        <div className="track">
                            <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                            <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                            <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                            <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                        </div>
                        <hr />
                        <ul className="row">
                            {
                                items.slice(0, 3).map(item =>
                                    <li className="col-md-4">
                                        <figure className="itemside mb-3">
                                            <div className="aside"><img src={item.image} className="img-sm border" alt="" /></div>
                                            <figcaption className="info align-self-center">
                                                <p className="title">{item.name} <br />ID: {item._id}</p> <span className="text-muted">${item.price} </span>
                                            </figcaption>
                                        </figure>
                                    </li>
                                )
                            }

                        </ul>

                        <hr />
                        <button className="btn btn-primary" > <i className="fa fa-chevron-left"></i> See all orders</button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default RunningOrder;