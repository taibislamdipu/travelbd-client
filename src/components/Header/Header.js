import { faListUl, faLocationArrow, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();
    const { photoURL, displayName, email } = user;

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                                <Link to={"/"}>
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/shop"}>
                                    <a class="nav-link">Shop</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"}>
                                    <a class="nav-link" >Review</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"}>
                                    <a class="nav-link" >Blog</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"}>
                                    <a class="nav-link" >Contact Us</a>
                                </Link>
                            </li>
                            {
                                user.email &&

                                <li class="nav-item">
                                    <Link to={"/dashboard"}>
                                        <a class="nav-link" >Dashboard</a>
                                    </Link>
                                </li>
                            }

                        </ul>

                        {/* <ul className=" d-flex align-items-center navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item fw-bold">
                                <span>
                                    {user.email &&

                                        <>
                                            <img className="user-image rounded-circle" src={photoURL} alt="" height={50} />
                                            <span className="pe-5 ps-2">{displayName}</span>
                                        </>


                                    }
                                </span>

                                {
                                    user.email ?
                                        <button className="btn btn-outline-secondary" onClick={logout}>
                                            <i className="fas fa-sign-out-alt"></i> LOGOUT
                                        </button>
                                        :
                                        <Link to="/login" className="nav-link cool-link">LOGIN</Link>
                                }

                            </li>
                        </ul> */}

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
                                        <li className="nav-item menu-bg mt-4">
                                            <Link to="/myBooking" className="react-router-link">
                                                <button type="button" className="btn nav-link text-secondary fw-bold position-relative">
                                                    <FontAwesomeIcon icon={faLocationArrow} /> My Order
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        {/* {myBooking?.length} */}
                                                    </span>
                                                </button>
                                            </Link>
                                        </li>

                                        <li className="nav-item menu-bg">
                                            <Link to="/addPackage" className="nav-link fw-bold">
                                                <FontAwesomeIcon icon={faPlus} /> Add Review
                                            </Link>
                                        </li>

                                        <li className="nav-item menu-bg">
                                            <Link to="/allBooking" className="react-router-link">
                                                <button className="btn nav-link text-secondary fw-bold position-relative">
                                                    <FontAwesomeIcon icon={faListUl} /> Add Payment
                                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        {/* {allBooking?.length} */}
                                                    </span>
                                                </button>
                                            </Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className="nav-item menu-bg fw-bold">

                                            <Link to="/" className="nav-link " onClick={logout}>
                                                {/* <button className="btn ms-3 btn-outline-secondary" onClick={logout}> */}
                                                <FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                                                {/* </button> */}
                                            </Link>

                                            {/* <Link to="/login" className="nav-link cool-link">LOGIN</Link> */}

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