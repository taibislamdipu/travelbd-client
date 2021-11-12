import { faExclamationCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../Loading/Loading';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrder = () => {

    const { user, userPhoneNumber } = useAuth();
    const { email } = user;

    const [myOrder, setMyOrder] = useState([]);

    const [isLoading, setIsLoading] = useState(true)


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
    }, [email])

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
                                                myOrder.map((singleOrder) => <SingleOrder
                                                    singleOrder={singleOrder}

                                                >

                                                </SingleOrder>)
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