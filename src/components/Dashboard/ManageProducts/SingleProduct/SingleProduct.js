import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const SingleProduct = (props) => {
    const { _id, name, description, price, image } = props.product;
    const { itemNo } = props;


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

                const url = `https://fierce-lake-75301.herokuapp.com/products/${_id}`
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
                        }
                        window.location.reload()
                    })



            }

        })
    }


    return (
        <tbody>
            <tr>
                <td>{itemNo + 1}</td>
                <td>
                    <img src={image} height={100} alt="" />
                </td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{description.slice(0, 30)}...</td>
                <td>
                    <button className="btn " onClick={() => handleDelete()}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default SingleProduct;