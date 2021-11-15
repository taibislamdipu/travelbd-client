import { faExclamationCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';

const MyOrder = () => {

    const { user, userPhoneNumber } = useAuth();
    const { email } = user;

    const [myOrder, setMyOrder] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [isDelete, setIsDelete] = useState(false);





    useEffect(() => {
        try {
            async function callApi() {
                let result = await fetch(`https://fierce-lake-75301.herokuapp.com/myOrders?email=${email}`);
                result = await result.json();
                setMyOrder(result)
                setIsLoading(false)
            }
            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [email, isDelete])


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

                const url = `https://fierce-lake-75301.herokuapp.com/allOrders/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your Order has been Canceled.',
                                'success'
                            )

                            const remainingOrder = myOrder.filter(order => order._id !== id);
                            setMyOrder(remainingOrder);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false);
                        }
                    })



            }

        })
    }

    const getColor = (status) => {
        if (status === 'Shipped') return 'Green';
        if (status === 'Pending') return '#fc5e03';
        return '';
    };



    return (
        <div className="container px-0">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <p className="mt-2 fw-bold">My Order</p>
                <hr />

                <div className="d-flex justify-content-between">
                    <div>
                        <p>You order {myOrder?.length} items.</p>
                    </div>
                    <div>
                        <p>Phone: {userPhoneNumber}</p>
                    </div>
                    <div>
                        <p>Email: {email}</p>
                    </div>
                </div>



                <div className="table-responsive">

                    {
                        isLoading ?

                            <Loading></Loading>

                            :

                            <div>
                                {
                                    myOrder.length === 0 ?

                                        <p className="mt-5 text-center">
                                            <FontAwesomeIcon icon={faExclamationCircle} className="text-warning" /> No Data Available!
                                        </p>

                                        :

                                        <table className="table table-hover table-bordered">
                                            <thead className="table-dark ">
                                                <tr className="">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Shipping Address</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            {
                                                myOrder.map((singleOrder, index) => <tbody>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img src={singleOrder?.image} height={100} alt="" />
                                                        </td>
                                                        <td>{singleOrder?.productName}</td>
                                                        <td>{singleOrder?.price}</td>
                                                        <td>{singleOrder?.address}</td>
                                                        <td style={{ color: getColor(singleOrder?.status) }}
                                                        >{singleOrder?.status}</td>
                                                        <td>
                                                            <button className="btn " onClick={() => handleDelete(singleOrder?._id)}>
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
        </div>
    );
};

export default MyOrder;