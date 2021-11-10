import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Latest = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        try {

            async function callApi() {
                let result = await fetch('http://localhost:5000/products')
                result = await result.json()
                setProduct(result.slice(0, 6));
            }


            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="container">
            <h2 className="text-center my-5">The Latest</h2>

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    products.map(pd => <div class="col">
                        <div class="card h-100">
                            <img src={pd?.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{pd?.name}</h5>
                                <p>${pd?.price}</p>
                                <div className="card-footer">
                                    <Link to={`/product/${pd?._id}`}>
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default Latest;