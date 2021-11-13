import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';

const SingleOrder = (props) => {

    // console.log(props.singleOrder);

    const { _id, image, productName, price, address, status, phone } = props.singleOrder;

    // using context api for set user phone number
    const { setUserPhoneNumber } = useAuth();
    setUserPhoneNumber(phone);

    const [isDelete, setIsDelete] = useState(null);


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

                const url = `https://fierce-lake-75301.herokuapp.com/allOrders/${_id}`
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


                        // window.location.reload()
                    })



            }

        })
    }

    return (

        <tbody>
            <tr>
                <td>
                    <img src={image} height={100} alt="" />
                </td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{address}</td>
                <td>{status}</td>
                <td>
                    <button className="btn " onClick={() => handleDelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </td>
            </tr>
        </tbody>

    );
};

export default SingleOrder;