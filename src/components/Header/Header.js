import { faListUl, faLocationArrow, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    const { photoURL, displayName, email } = user;

    console.log('user', user);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container">
                    <Link to={'/'} className="navbar-brand">
                        <div>
                            <img src={logo} alt="..." />
                        </div>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/shop"} className="nav-link">
                                    Shop
                                </Link>
                            </li>
                            <li class="nav-item" >
                                <HashLink to={"/home#review"} className="nav-link">
                                    Review
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"} className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"} className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                            {
                                user.email &&

                                <li class="nav-item">
                                    <Link to={"/dashboard"} className="nav-link">
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
                                        <li className=" text-center">
                                            <div className="mx-2">
                                                <img className="user-image rounded-circle " src={photoURL} alt="..." height={80} />
                                            </div>
                                            <div>

                                            </div>
                                            <div className=" fw-light text-lowercase">
                                                <p>
                                                    <span className="text-capitalize">
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
                                        <li className="nav-item menu-bg fw-bold">

                                            <Link to="/" className="nav-link " onClick={logout}>
                                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                            </Link>
                                        </li>

                                    </ul>
                                </li>

                                :

                                <Link to="/login" className="nav-link cool-link">LOGIN</Link>


                            }



                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;