import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const AddProduct = () => {


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://fierce-lake-75301.herokuapp.com/addProduct', data)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    reset();
                }
            })
    };


    return (
        <div className="container">
            <h1>Add Product</h1>

            <div className="col-md-6">
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                        <input className="form-control"   {...register("name")} placeholder="Name" required />
                        <label>Product Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control"  {...register("price")} placeholder="Price" required />
                        <label>Price</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control"  {...register("description")} placeholder="Description" required />
                        <label>Description</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input className="form-control"  {...register("image")} placeholder="Image" required />
                        <label>Product Image</label>
                    </div>


                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;