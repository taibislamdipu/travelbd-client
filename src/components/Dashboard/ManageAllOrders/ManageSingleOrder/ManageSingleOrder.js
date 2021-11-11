import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ManageSingleOrder = (props) => {

    const { _id, image, productName, price, address, status, phone, email } = props.singleOrder;

    // const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [newStatus, setNewStatus] = useState("");
    const [orderId, setOrderId] = useState("");


    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://fierce-lake-75301.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount === 1) {
                    alert('status updated successfully');
                }
            });
    };


    const handleDelete = () => {
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

                const url = `http://localhost:5000/allOrders/${_id}`
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
                        }
                        window.location.reload()
                    })



            }

        })
    }


    return (
        <tbody>
            <tr>
                {/* <td>{e}</td> */}
                <td>
                    <img src={image} height={100} alt="" />
                </td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>
                    <p>{address}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </td>
                {/* <td>{status}</td> */}
                <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                            onClick={() => handleOrderId(_id)}
                            {...register("newStatus")}
                        >
                            <option value={status}>{status}</option>
                            <option value="Approve">Approve</option>
                            <option value="Done">Done</option>
                        </select>
                        <input type="submit" />
                    </form>
                </td>
                <td>
                    <button className="btn " onClick={() => handleDelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default ManageSingleOrder;