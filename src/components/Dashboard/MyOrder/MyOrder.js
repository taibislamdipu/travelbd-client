import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';
import SingleOrder from './SingleOrder/SingleOrder';

const MyOrder = () => {

    const { user, userPhoneNumber } = useAuth();
    const { email } = user;

    const [myOrder, setMyOrder] = useState([]);



    useEffect(() => {
        try {
            async function callApi() {
                let result = await fetch(`https://fierce-lake-75301.herokuapp.com/allOrders?email=${email}`);
                result = await result.json();
                setMyOrder(result)
                console.log('myOrder', myOrder);
            }
            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [email])



    // const handleDelete = () => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             const url = `http://localhost:5000/allUserOrders/${myOrder?._id}`
    //             fetch(url, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Order has been Canceled.',
    //                             'success'
    //                         )
    //                     }
    //                 })



    //         }
    //     })
    // }

    return (
        <div>
            <h1>My Order</h1>
            <p>user {email} have {myOrder?.length} order</p>
            <p>Phone Number {userPhoneNumber}</p>

            <div className="table-responsive">

                {
                    myOrder.length === 0 ?

                        <Loading></Loading>

                        :

                        <table className="table table-hover">
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
                                myOrder.map((singleOrder, index) => <SingleOrder
                                    singleOrder={singleOrder}
                                    index={index}
                                >

                                </SingleOrder>)
                            }

                            {/* {
                                myOrder.map((item, index) => <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item?.image} height={100} alt="" />
                                        </td>
                                        <td>{item?.productName}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.address}</td>
                                        <td>{item?.status}</td>
                                        <td>
                                            <button className="btn " onClick={() => handleDelete()}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>

                                )
                            } */}



                        </table>
                }
            </div>
        </div>
    );
};

export default MyOrder;