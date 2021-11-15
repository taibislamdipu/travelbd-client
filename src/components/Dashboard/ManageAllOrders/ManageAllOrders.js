import { faExclamationCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Loading/Loading';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';


const ManageAllOrders = () => {


    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isDelete, setIsDelete] = useState(false);

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
    }, [isDelete])

    const [orderId, setOrderId] = useState("");

    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    // const { register, handleSubmit } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data, orderId);
    //     fetch(`https://fierce-lake-75301.herokuapp.com/statusUpdate/${orderId}`, {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => res.json())
    //         .then((result) => {
    //             if (result.modifiedCount === 1) {
    //                 let timerInterval
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: 'Status updated successfully',
    //                     timer: 3000,
    //                     timerProgressBar: true,
    //                     didOpen: () => {
    //                         Swal.showLoading()
    //                     },
    //                     willClose: () => {
    //                         clearInterval(timerInterval)
    //                     }
    //                 }).then((result) => {
    //                     if (result.dismiss === Swal.DismissReason.timer) {
    //                         console.log('I was closed by the timer')
    //                     }
    //                 })
    //             }
    //         });
    // };

    const handleUpdate = (id) => {
        fetch(`https://fierce-lake-75301.herokuapp.com/statusUpdate/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // setAllOrders({})
                    // swal("Approved!", "Order status updated!", "success");
                    // alert("Approved!", "Order status updated");

                    let timerInterval
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Status updated successfully',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                        document.location.reload();
                    })

                }

            })

    }


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

                            const remainingOrder = allOrders.filter(order => order._id !== id);
                            setAllOrders(remainingOrder);
                            setIsDelete(true);
                        } else {
                            setIsDelete(false)
                        }

                    })



            }

        })
    }




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
                                                allOrders.map((singleOrder, index) => <tbody>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <img src={singleOrder?.image} height={100} alt="" />
                                                        </td>
                                                        <td>{singleOrder?.productName}</td>
                                                        <td>{singleOrder?.price}</td>
                                                        <td>
                                                            <p>{singleOrder?.address}</p>
                                                            <p>Email: {singleOrder?.email}</p>
                                                            <p>Phone: {singleOrder?.phone}</p>
                                                        </td>

                                                        {/* <td>
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <select
                                                                    onClick={() => handleOrderId(singleOrder?._id)}
                                                                    {...register("newStatus")}
                                                                >
                                                                    <option value={singleOrder?.status}>{singleOrder?.status}</option>
                                                                    <option value="Approved">Approved</option>
                                                                    <option value="Shipped">Shipped</option>
                                                                </select>

                                                                <button type="submit" className="btn custom-black-btn mt-3">Submit</button>
                                                            </form>
                                                        </td> */}

                                                        <td>
                                                            <button
                                                                className="btn btn-primary" onClick={() => handleUpdate(singleOrder?._id)}>{singleOrder.status}
                                                            </button>
                                                        </td>

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
        </div >
    );
};

export default ManageAllOrders;