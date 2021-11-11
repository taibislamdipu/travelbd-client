import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json()
                setAllProducts(results)
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>
            <h1>Manage Products: {allProducts.length} </h1>

            <div className="table-responsive">

                {
                    allProducts.length === 0 ?

                        <Loading></Loading>

                        :

                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    {/* <th scope="col">Status</th> */}
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            {
                                allProducts.map(product => <SingleProduct product={product}>

                                </SingleProduct>)
                            }






                        </table>
                }
            </div>
        </div>
    );
};

export default ManageProducts;