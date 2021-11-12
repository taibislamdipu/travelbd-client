import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth();
    const { displayName, email } = user;


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        data.photoURL = user.photoURL;
        axios.post('https://fierce-lake-75301.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    console.log(data);

                    reset();
                }
            })
    };

    return (
        <div className="container">
            <div>
                <h1>Add review</h1>

                <div className="col-md-6">
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-floating mb-3">
                            <textarea className="form-control" rows="3"  {...register("review")} placeholder="Review" required ></textarea>
                            <label>Your review</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" value={displayName}  {...register("name")} placeholder="Name" required />
                            <label>Your Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" value={email}  {...register("email")} placeholder="Email" required />
                            <label>Your Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" type="number"  {...register("rating")} placeholder="Rating" required />
                            <label>Your rating out 0-5</label>
                        </div>

                        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Post Review
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;