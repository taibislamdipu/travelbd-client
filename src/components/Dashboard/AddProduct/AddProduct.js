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

                    let timerInterval
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product has been added successfully!',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })

                    reset();
                }
            })
    };


    return (
        <div className="container px-0">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <p className="mt-2 fw-bold">Add Product</p>
                <hr />
                <div className="col-md-6">
                    <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                {...register("name")}
                                placeholder="Name"
                                required
                                maxLength="60"
                            />
                            <label>Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                className="form-control \"
                                {...register("price")}
                                placeholder="Price"
                                required
                                type="number"
                            />
                            <label>Price</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                {...register("description")}
                                placeholder="Description"
                                maxLength="500"
                                required
                            />
                            <label>Description</label>
                        </div>


                        <div className="form-floating mb-3">
                            <input className="form-control"  {...register("image")} placeholder="Image" required />
                            <label>Product Image</label>
                            <p className="text-secondary">
                                <small>
                                    * Copy any image url from internet and paste it here.
                                    <br />
                                    example: https://i.ibb.co/qJGVFzG/teeshirt6.jpg
                                </small>
                            </p>
                        </div>


                        <button type="submit" className="btn custom-black-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;