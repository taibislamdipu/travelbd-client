import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeroSection = () => {
    return (
        <div>
            <div className="container-fluid hero-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 text-white hero-section-inner">
                            <Fade left>
                                <p>Keep Traveling</p>
                            </Fade>
                            <Fade right>
                                <h1 className="display-3">
                                    Travel T-shirt
                                </h1>
                            </Fade>
                            <Fade left>
                                <p>
                                    Get a faster travel T-Shirt on every tour, hiking or surfing, for any travel activities. In2 Travel delivers innovative travel products, experiences, and services to inspire travelers around the world.
                                </p>
                            </Fade>
                            <Link to="/shop" >
                                <button className="btn custom-black-btn">
                                    <FontAwesomeIcon icon={faShoppingCart} />  Shop
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;