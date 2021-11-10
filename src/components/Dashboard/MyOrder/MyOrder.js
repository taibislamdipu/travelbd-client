import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {

    const { user } = useAuth();
    const { email } = user;

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let result = await fetch(`http://localhost:5000/myOrder?email=${email}`);
                result = await result.json();
                setMyOrder(result)
                console.log('myOrder', myOrder);
            }
            callApi();

        } catch (error) {
            console.log(error);
        }
    }, [email, myOrder])

    return (
        <div>
            <h1>My Order</h1>
            <p>user {email} have {myOrder.length} order</p>
            <p>Phone Number</p>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            {/* <th scope="col">Name</th> */}
                            <th scope="col">No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shipping Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    {
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
                                    <button className="btn " onClick={() => "handleDelete()"}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrder;