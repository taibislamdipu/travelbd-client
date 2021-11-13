import React, { useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

import GoogleButton from 'react-google-button'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';


const Login = () => {

    const auth = getAuth();

    const { signInUsingGoogle, saveGoogleUser } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLogin, setIsLogin] = useState(false);

    const [formErrorMsg, setformErrorMsg] = useState('');

    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const [user, setUser] = useState({});

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                saveGoogleUser(user.email, user.displayName);
                history.push(redirect_url);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

            })
    }



    // user registration form start
    const handleRegistration = (event) => {
        console.log(email, password);
        event.preventDefault();

        if (password.length < 6) {
            setformErrorMsg('Weak Password: Password should be at least 6 characters.')
            return;
        }

        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setformErrorMsg('Password must contain two Uppercase letters');
        //     return;
        // }
        // if (!/(?=.*[0-9].*[0-9])/.test(password)) {
        //     setformErrorMsg('Password must contain two digits');
        //     return;
        // }

        isLogin ? processLogin(email, password) : createNewUser(email, password)

        event.target.reset();

        console.log(email, password);
    }
    // user registration form end

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setformErrorMsg('')
                history.push(redirect_url);
            })

            .catch((error) => {
                const errorMessage = error.message;
                setformErrorMsg(errorMessage)
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('createNewUser', user);
                setformErrorMsg('');

                const newUser = { email, displayName: name };

                // save user to the database
                saveUser(email, name);

                verifyEmail();
                setUserName();
                // alert('Your account has been created successfully. Redirecting to your destination page..');

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account has been created successfully.',
                    showConfirmButton: false,
                    timer: 3000
                })


                history.push(redirect_url);
            })

            .catch((error) => {
                const errorMessage = error.message;
                setformErrorMsg(errorMessage)
            });
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        setformErrorMsg('')
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setformErrorMsg('')
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setformErrorMsg('')
    }


    const toggleLogin = (event) => {
        setIsLogin(event.target.checked);
    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://fierce-lake-75301.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    return (
        <div className="container-fluid login-page py-5">

            <div className="row d-flex flex-column justify-content-center align-items-center">
                <div className="col-md-6">
                    <form className="login-form bg-white pb-5 pt-3 px-5 border" onSubmit={handleRegistration} >

                        <div className="text-center">
                            <img src={logo} alt="" />
                        </div>

                        <h5 className="mt-3 fw-bold">Please {isLogin ? 'Login' : 'Register'} </h5>

                        {!isLogin &&
                            <div className="mb-3">
                                <label for="InputName" className="form-label ">Name</label>

                                <input type="text" onBlur={handleNameChange} className="form-control" id="InputName" aria-describedby="nameHelp" />

                            </div>
                        }
                        <div className="mb-3">
                            <label for="InputEmail" className="form-label">Email address</label>

                            <input type="email" onBlur={handleEmailChange} className="form-control" id="InputEmail" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label">Password</label>

                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="InputPassword" />

                        </div>
                        <div className="form-check">
                            <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">
                                Already registered?
                            </label>
                        </div>

                        <div>
                            <p className="text-danger">{formErrorMsg}</p>
                        </div>

                        <button type="submit" className="btn btn-sm btn-success me-2">
                            {isLogin ? "Login" : "Register"}
                        </button>

                        <button className="btn btn-sm btn-secondary" onClick={handleResetPassword}>Reset Password</button>

                        <p className="py-3 mb-0 text-secondary">or</p>

                        <div className="">
                            <GoogleButton
                                onClick={() => handleGoogleLogin()}
                            />
                        </div>

                    </form>
                </div>
                <div className="col-md-6 text-center">
                    <div className="mt-3 mb-0 text-">
                        <div>
                            <FontAwesomeIcon icon={faAngleDoubleUp} />
                        </div>
                        <div>
                            <p className=" text-secondary ">
                                We don't store any of your account information.
                                <br />
                                You can create your own personal account by clicking <span className="fw-bold">Register</span> or Sign in with Google.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;