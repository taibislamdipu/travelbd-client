import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SummerSale = () => {
    return (
        <div className="container-fluid bg-info my-5">


            <div className="row">
                <div className="col-md-6 bg-info d-flex justify-content-center align-items-center">
                    <div className="text-white">
                        <h2 className="display-2 fw-bold text-uppercase">Summer Sale</h2>
                        <h3>On Summer Collections</h3>
                        <p className="display-4 fw-bold">50% or more off</p>

                        <Link to={'/shop'}>
                            <button className="btn custom-black-btn">
                                <FontAwesomeIcon icon={faShoppingCart} /> Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 px-0">
                    <div>
                        <img src="https://i.ibb.co/s32M1Ry/happy-Client.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SummerSale;