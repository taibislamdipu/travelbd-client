import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://i.ibb.co/2tWssgC/google-play.png
// https://i.ibb.co/pfs99t8/payment-gateway.png

const Footer = () => {
    return (
        <div className="">
            <footer className="">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">in2travel.inc</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh, 1206.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> 01743-389153 (10AM-5PM)
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> in2travel87@gmail.com
                                    </p>
                                    <div className="my-5">
                                        <img src="https://i.ibb.co/2tWssgC/google-play.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Find Us</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Became a member</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Feedback</a></li>

                                </ul>
                                <div className="social-links mt-3">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Get Help</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Shipping and Delivery</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Order Status</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Returns</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Payment Options</HashLink></li>
                                    <li><i className="fas fa-check"></i> <HashLink as={HashLink} to="/home#allPackages">Contact Us</HashLink></li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <div>
                                    <img src="https://i.ibb.co/gypbwfM/payment-gateway.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p >
                                    Copyright &copy; <span id="currentYear"></span> Yellow Devs | Site designed by <a
                                        href="https://yellow-devs.netlify.app/" target="_blank" rel="noreferrer" title="Yellow Devs Website">
                                        <span className="text-white"  >Yellow Devs</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;