import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div>
            <div className="container-fluid hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white mt-5">
                            <p>Keep Traveling</p>
                            <h1>
                                Travel T-shirt
                            </h1>
                            <p>
                                Get a faster travel T-Shirt on every tour, hiking or surfing, for any travel activities.                        </p>
                            <Link to="/shop">
                                <button className="btn btn-primary">Shop</button>
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