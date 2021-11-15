import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Bounce from "react-reveal/Bounce";

const Shop = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        try {

            async function callApi() {
                let result = await fetch('https://fierce-lake-75301.herokuapp.com/products')
                result = await result.json()
                setProduct(result);
            }


            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [])



    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div className="my-5 text-center">
                    <Bounce bottom cascade>
                        <h2 className="display-4 fw-bold">Shop</h2>
                    </Bounce>
                    <p className="text-secondary">
                        Welcome to the modern and aesthetic stores of In2travels.
                        <br />
                        Choose the product of your choice from an ample design collection.
                    </p>
                </div>

                {
                    products.length === 0 ?

                        <Loading></Loading>

                        :

                        <div className="row row-cols-1 row-cols-md-3 g-4">

                            {
                                products.map(pd => <div className="col">
                                    <Link to={`/product/${pd?._id}`} className="react-hook-link">
                                        <div className="card border-0 h-100 product">
                                            <img src={pd?.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-title fw-bold">{pd?.name}</p>
                                                <p className="item-price fw-bold">${pd?.price}</p>
                                                <div className="">
                                                    <button className="btn custom-black-btn buy-now-btn">
                                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>)
                            }


                        </div>
                }
            </div>

        </div>
    );
};

export default Shop;