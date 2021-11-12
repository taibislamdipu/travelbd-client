import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';


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
                                        Dhaka,Bangladesh, 1206 Dhaka                                   </p>
                                    <p><strong>Phone:</strong> 01743-389153 (10AM-5PM)</p>
                                    <p><strong>Email:</strong> in2travel87@gmail.com</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Find Us</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Became a member</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Feedback</a></li>
                                    {/* <li><i className="fas fa-check"></i> <a href="#">Services</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Privacy policy</a></li> */}
                                </ul>
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
                                <h4 className="text-uppercase fw-bold">Our Newsletter</h4>
                                <p>Subscribe to our newsletter to receive latest updates</p>
                                <form action="" method=""><input type="email" name="email" /><input type="submit" value="Subscribe" /></form>

                                <div className="social-links mt-3">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
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