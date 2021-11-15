import React from 'react';
import './SummerSale.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";


const SummerSale = () => {
    return (
        <div className="container-fluid my-5">


            <div className="row">

                <Fade left>
                    <div className="col-md-6 py-3 bg-info d-flex justify-content-center align-items-center summer-sale-container">
                        <div className="text-white">
                            <Bounce bottom cascade>
                                <h2 className="display-2 fw-bold text-uppercase">Summer Sale</h2>
                            </Bounce>
                            <h3>On Summer Collections</h3>
                            <p className="display-4 fw-bold">50% or more off</p>

                            <Link to={'/shop'}>
                                <button className="btn custom-black-btn">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Shop Now</button>
                            </Link>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="col-md-6 px-0">
                        <div>
                            <img src="https://i.ibb.co/s32M1Ry/happy-Client.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </Fade>

            </div>
        </div>


    );
};

export default SummerSale;