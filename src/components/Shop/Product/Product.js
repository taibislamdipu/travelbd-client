import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faExclamationCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";
import Heart from "react-animated-heart";


const Product = () => {

    const { productId } = useParams();

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
                setIsLoading(false);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])


    const handleMoreDetails = () => {
        Swal.fire({
            title: 'T-Shirt Size',
            imageUrl: 'https://i.ibb.co/Bj9hrSC/size-chart.jpg',
            imageAlt: 'Custom image',
            confirmButtonColor: 'black'
        })
    }

    // love button
    const [isClick, setClick] = useState(false);

    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                {

                    isLoading ?

                        <Loading></Loading>

                        :


                        <div className="row my-5">

                            <Bounce bottom cascade>
                                <h2 className="text-center display-4">
                                    {products?.name}
                                </h2>
                            </Bounce>

                            <div className="col-md-6 ">
                                <Fade >
                                    <div>
                                        <img src={products?.image} className="img-fluid" alt="" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6 mt-5">
                                <Fade >
                                    <h4 className="fw-bold display-6">$ {products?.price}</h4>
                                    <p className="fw-bold">{products?.name}</p>
                                    <p>
                                        {products?.description}
                                    </p>
                                </Fade>
                                <Link to={`/placeOrder/${productId}`}>
                                    <button className="btn custom-black-btn">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </button>

                                </Link>
                                <div>
                                    <p className="fw-bold mt-5">Color</p>
                                    <button className="btn btn-outline-dark ">Black</button>
                                    <button className="btn btn-outline-success ms-2">Green</button>
                                    <button className="btn btn-outline-info ms-2">Turquoise</button>
                                </div>


                                <div>
                                    <p className="fw-bold mt-5">T-Shirt size</p>
                                    <button className="btn btn-outline-secondary ">S/M</button>
                                    <button className="btn btn-outline-secondary ms-2">L</button>
                                    <button className="btn btn-outline-secondary ms-2">XL</button>
                                    <button className="btn btn-outline-secondary ms-2">XXL</button>
                                    <button className="btn btn-outline-secondary ms-2">XXXL</button>

                                </div>
                                <p className=" fw-bold d-flex align-items-center">
                                    Love this product:<Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                                </p>
                                <hr />


                                <p className="text-secondary col-md-8">
                                    <small>
                                        <FontAwesomeIcon icon={faCopyright} /> Copyright of this design is protected by in2travel.
                                        Unauthorized use or reproduction is punishable.
                                    </small>
                                </p>

                            </div>
                        </div>
                }
            </div>

            {/* t-shirt table */}
            <div className="mt-5 px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded ">
                <p className="mt-2 fw-bold text-center">
                    How to measure your T-Shirt size?
                </p>
                <div className="d-flex justify-content-center">

                    <table className="table table-bordered w-50 table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Size</th>
                                <th scope="col">Front Chest (Inch)</th>
                                <th scope="col">Height (Inch)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S/M</td>
                                <td>19</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>20</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>21</td>
                                <td>29</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>23</td>
                                <td>31</td>
                            </tr>
                            <tr>
                                <td>3XL</td>
                                <td>25</td>
                                <td>33</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="text-center ">
                    <button className="btn custom-black-btn" onClick={() => handleMoreDetails()}>
                        <FontAwesomeIcon icon={faExclamationCircle} />  More Details
                    </button>
                </div>

            </div>
        </div>


    );
};

export default Product;