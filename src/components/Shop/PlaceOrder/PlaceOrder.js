import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {

    const { productId } = useParams();

    const [products, setProducts] = useState([])

    const { user } = useAuth();
    const { displayName, email } = user;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('https://fierce-lake-75301.herokuapp.com/products');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])




    return (
        <div className="container">

            <div className="row">
                <div className="col-md-6">
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-floating mb-3">
                            <input className="form-control" value={displayName} {...register("example")} />
                            <label>Your name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" value={email} {...register("example2")} />
                            <label>Email</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input class="form-control"  {...register("example6")} placeholder="Password a" />
                            <label>Phone Number</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control"  {...register("example6")} placeholder="Password a" />
                            <label>Address</label>
                        </div>


                        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="col-md-6">
                    <div>
                        <img src={products?.image} className="img-fluid" alt="" />
                    </div>
                    <div className="text-center">
                        <h2>{products?.name}</h2>
                        <h4>$ {products?.price}</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;