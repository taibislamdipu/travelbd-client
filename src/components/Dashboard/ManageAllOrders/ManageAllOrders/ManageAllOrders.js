import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../../Loading/Loading';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {


    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/allOrders');
                results = await results.json();
                setAllOrders(results)
            }
            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="container px-0">
            <div className="bg-white px-2 px-md-4 py-md-3 shadow-sm rounded">
                <p className="mt-2 fw-bold">Manage All Orders: {allOrders.length}</p>
                <hr />

                <div className="table-responsive">

                    {
                        allOrders.length === 0 ?

                            <Loading></Loading>

                            :

                            <table className="table table-hover table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        {/* <th scope="col">Name</th> */}
                                        {/* <th scope="col">No.</th> */}
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
                                    >

                                    </ManageSingleOrder>)
                                }






                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;