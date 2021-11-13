import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center py-5 ">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-whit shadow-sm rounded not-found-container">
                <div className="py-5 text-white">
                    <p>404 error! </p>
                    <h2 className="display-4 fw-bold">This page d💔esn't seem to exist.</h2>
                    <Link to={'/'}>
                        <button className="btn custom-black-btn mt-5">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;