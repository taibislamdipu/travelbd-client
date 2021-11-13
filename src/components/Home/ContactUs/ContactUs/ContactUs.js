import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMobileAlt, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import MyForm from '../MyForm/MyForm';
import GoogleMap from '../GoogleMap/GoogleMap';

const ContactUs = () => {


    return (
        <div className="container my-5" id="contactUs">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="d-flex flex-column page-title-container justify-content-center align-items-center" >
                    <div className="text-center my-5" data-aos="fade-down">
                        <h2 className="fw-bold page-title display-4 fw-bold text-uppercase ">Need custom t-shirt?</h2>
                        <p>Please feel free to contact us. We will get back to you as soon as possible.</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row gy-5">
                        <div className="col-md-6">
                            <div className="text-dark">
                                <h3>IN2TRAVEL.INC</h3>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 01952-777999</p>
                                <p><FontAwesomeIcon icon={faMobileAlt} /> 0777 909 6223</p>
                                <p><FontAwesomeIcon icon={faFax} /> 0208 390 6311</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> E-Mail: in2travel87@gmail.com</p>
                                <hr />
                            </div>

                            <div className="">
                                <h5>In2Travels</h5>
                                <GoogleMap></GoogleMap>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h4>Send a Message</h4>

                            <div className="bg-light p-3">
                                <MyForm></MyForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;