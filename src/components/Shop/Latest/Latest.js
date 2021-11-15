import React, { useEffect, useState } from 'react';
import './Latest.css';
import { faExclamationCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";

const Latest = () => {

    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {

            async function callApi() {
                let result = await fetch('https://fierce-lake-75301.herokuapp.com/products')
                result = await result.json()
                // setProduct(result.slice(6, 12));
                setProduct(result.slice(0, 6));
                setIsLoading(false);
            }


            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [])



    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <Bounce bottom cascade>
                    <h2 className="text-center my-5 display-4 fw-bold">The Latest</h2>
                </Bounce>
                {
                    isLoading ?

                        <Loading></Loading>

                        :

                        <div className="pb-5">

                            {
                                products.length === 0 ?

                                    <p className="mt-5 text-center">
                                        <FontAwesomeIcon icon={faExclamationCircle} className="text-warning" /> No Data Available!
                                    </p>

                                    :
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <Fade bottom>

                                            {
                                                products.map(pd => <div className="col">
                                                    <Link to={`/product/${pd?._id}`} className="react-hook-link ">
                                                        <div className="card border-0 h-100 product">
                                                            {
                                                                !pd?.image ?
                                                                    <Loading></Loading>

                                                                    :

                                                                    <img src={pd?.image} className="card-img-top " alt="..." />
                                                            }
                                                            <div className="card-body ">
                                                                <p className="card-title fw-bold">{pd?.name}</p>
                                                                <p className="item-price fw-bold">$ {pd?.price}</p>
                                                                <div className="">
                                                                    <button className="btn custom-black-btn buy-now-btn">
                                                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                                                    </button>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                </div>
                                                )
                                            }

                                        </Fade>
                                    </div>
                            }


                        </div>
                }




            </div>
        </div>
    );
};

export default Latest;