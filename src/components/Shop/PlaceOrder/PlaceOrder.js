import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';


const PlaceOrder = () => {

    const { productId } = useParams();

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useAuth();
    const { displayName, email } = user;

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const history = useHistory();

    const onSubmit = data => {
        data.status = 'Pending';
        data.productName = products?.name;
        data.price = products?.price;
        data.image = products?.image;

        axios.post('https://fierce-lake-75301.herokuapp.com/addOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    let timerInterval
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thank you!',
                        text: 'Your order has been placed successfully',
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    })
                        .then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                history.push('/dashboard');
                                console.log('I was closed by the timer')
                            }
                        })
                    reset();
                }

            })
    };

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
                setIsLoading(false);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])




    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded ">
                <div className="row pb-5">
                    <div className="col-md-6 border-end">
                        <p className="fw-bold">Shopping Cart</p>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-floating mb-3">
                                {displayName && <input className="form-control" value={displayName} {...register("name")} required />}
                                <label>Your name</label>
                            </div>

                            <div className="form-floating mb-3">
                                {email && <input className="form-control" value={email} {...register("email")} required />}
                                <label>Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input className="form-control"  {...register("phone")} placeholder="Phone number" required />
                                <label>Phone number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control"  {...register("address")} placeholder="Address" required />
                                <label>Address</label>
                            </div>


                            <button type="submit" className="btn custom-black-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Place Order
                            </button>
                        </form>
                    </div>


                    <div className="col-md-6">
                        <p className="fw-bold">Your order</p>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    {
                                        isLoading ?

                                            <Loading></Loading>

                                            :

                                            <img src={products?.image} className="img-fluid rounded-start" alt="..." />
                                    }
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-title fw-bold">{products?.name}</p>
                                        <p className="card-text">
                                            $ {products?.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;