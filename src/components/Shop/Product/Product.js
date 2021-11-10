import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Product = () => {

    const { productId } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])


    return (
        <div className="container">
            <h2 className="text-center py-5">Place Order of {productId}</h2>

            <div className="row my-5">
                <div className="col-md-6">
                    <div>
                        <img src={products?.image} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>{products?.name}</h2>
                    <h4>$ {products?.price}</h4>
                    <Link to={`/placeOrder/${productId}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
            <div>
                <h2>Description</h2>
                <p>
                    {products?.desc}
                </p>
            </div>

        </div>
    );
};

export default Product;