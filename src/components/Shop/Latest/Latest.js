import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';

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
                <h2 className="text-center my-5 display-4 fw-bold">The Latest</h2>

                {
                    isLoading ?

                        <Loading></Loading>

                        :

                        <div>

                            {
                                products.length === 0 ?

                                    <p className="mt-5 text-center">
                                        <FontAwesomeIcon icon={faExclamationCircle} className="text-warning" /> No Data Available!
                                    </p>

                                    :

                                    <div class="row row-cols-1 row-cols-md-3 g-4">

                                        {
                                            products.map(pd => <div class="col">
                                                <Link to={`/product/${pd?._id}`} className="react-hook-link">
                                                    <div class="card border-0 h-100 product">
                                                        <img src={pd?.image} class="card-img-top" alt="..." />
                                                        <div class="card-body">
                                                            <p class="card-title fw-bold">{pd?.name}</p>
                                                            <p className="item-price fw-bold">$ {pd?.price}</p>
                                                            <div className="">
                                                                <button className="btn custom-black-btn">
                                                                    Buy Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            )
                                        }

                                    </div>
                            }

                        </div>
                }
            </div>

        </div>
    );
};

export default Latest;