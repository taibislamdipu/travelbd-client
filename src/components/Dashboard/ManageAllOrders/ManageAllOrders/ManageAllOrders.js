import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../../Loading/Loading';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {


    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [singleBooking, setSingleBooking] = useState('');

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/allOrders');
                results = await results.json();
                setAllOrders(results);
                setIsLoading(false);
            }
            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [singleBooking])

    // useEffect(() => {
    //     const restOrder = allOrders?.filter(order => order._id !== allOrders._id);
    //     setAllOrders(restOrder);
    // }, [allOrders])


    return (
        <div className="container px-0">
            <div className="bg-white px-2 px-md-4 py-md-3 shadow-sm rounded">
                <p className="mt-2 fw-bold">Manage All Orders: {allOrders.length}</p>
                <hr />

                <div className="table-responsive">

                    {
                        isLoading ?

                            <Loading></Loading>

                            :


                            <div>
                                {
                                    allOrders.length === 0 ?

                                        <p className="mt-5 text-center">
                                            <FontAwesomeIcon icon={faExclamationCircle} className="text-warning" />
                                            No Data Available!
                                        </p>

                                        :
                                        <table className="table table-hover table-bordered">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Shipping Address</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>

                                            {
                                                allOrders.map((singleOrder) => <ManageSingleOrder
                                                    singleOrder={singleOrder}
                                                    key={singleOrder._id}
                                                >

                                                </ManageSingleOrder>)
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

export default ManageAllOrders;