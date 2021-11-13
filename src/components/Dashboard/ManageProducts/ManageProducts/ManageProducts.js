import { faExclamationCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import SingleProduct from '../SingleProduct/SingleProduct';
import Swal from 'sweetalert2';


const ManageProducts = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json()
                setAllProducts(results);
                setIsLoading(false);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [isDelete])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `https://fierce-lake-75301.herokuapp.com/products/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'This Product has been Deleted.',
                                'success'
                            )
                            const remainingProduct = allProducts.filter(product => product._id !== id);
                            setAllProducts(remainingProduct);
                            setIsDelete(true)

                        } else {
                            isDelete(false)
                        }

                    })



            }

        })
    }

    return (
        <div className="container">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <p className="mt-2 fw-bold">Manage Products: {allProducts.length} </p>
                <hr />
                <div className="table-responsive">

                    {

                        isLoading ?

                            <Loading></Loading>

                            :


                            <div>
                                {
                                    allProducts.length === 0 ?

                                        <p className="mt-5 text-center">
                                            <FontAwesomeIcon icon={faExclamationCircle} className="text-warning" />
                                            No Data Available!
                                        </p>

                                        :

                                        <table table className="table table-hover table-bordered">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Description</th>
                                                    {/* <th scope="col">Status</th> */}
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            {
                                                allProducts.map((product, index) => <tbody>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img src={product?.image} height={100} alt="" />
                                                        </td>
                                                        <td>{product?.name}</td>
                                                        <td>{product?.price}</td>
                                                        <td>{product?.description.slice(0, 30)}...</td>
                                                        <td>
                                                            <button className="btn " onClick={() => handleDelete(product?._id)}>
                                                                <FontAwesomeIcon icon={faTrashAlt} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                )
                                            }
                                        </table>
                                }
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default ManageProducts;