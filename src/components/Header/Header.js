import React from 'react';
import './Header.css';
import { faListUl, faLocationArrow, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo3.png';

const Header = () => {

    const { user, logout } = useAuth();
    const { photoURL, displayName, email } = user;

    console.log('user', user);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <div>
                            <img src={logo} alt="..." />
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link cool-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/shop"} className="nav-link cool-link text-white">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <HashLink to={"/home#review"} className="nav-link cool-link text-white">
                                    Review
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to={"/home#vlog"} className="nav-link cool-link text-white">
                                    Vlog
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink to={"/home#contactUs"} className="nav-link cool-link text-white">
                                    Contact Us
                                </HashLink>
                            </li>
                            {
                                user.email &&

                                <li className="nav-item">
                                    <Link to={"/dashboard"} className="nav-link cool-link text-white">
                                        Dashboard
                                    </Link>
                                </li>
                            }

                        </ul>



                        <ul className="d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
                            {user.email ?
                                <li className="nav-item dropdown ">
                                    <Link to="" className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>
                                            <>
                                                <img className="user-image rounded-circle " src={photoURL} alt="..." height={50} />
                                                <span className=" ps-2 ">{displayName}</span>
                                            </>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu w-100 border-0 shadow" aria-labelledby="navbarDropdown">
                                        <li className="text-center">
                                            <div className="mx-2">
                                                <img className="user-image rounded-circle " src={photoURL} alt="..." height={80} />
                                            </div>
                                            <div>

                                            </div>
                                            <div className="fw-light text-lowercase">
                                                <p>
                                                    <span className="text-capitalize ">
                                                        {displayName}
                                                    </span>
                                                    <br />

                                                    <small className="text-secondary">
                                                        {email}
                                                    </small>

                                                </p>
                                            </div>
                                        </li>

                                        <li><hr className="dropdown-divider" /></li>

                                        <li className="nav-item fw-bold menu-bg">
                                            <Link to="/" className="nav-link text-secondary " onClick={logout}>
                                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                            </Link>
                                        </li>

                                    </ul>
                                </li>

                                :

                                <Link to="/login" className="nav-link cool-link text-white">LOGIN</Link>


                            }



                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;