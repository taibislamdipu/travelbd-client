import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth();
    const { displayName, email } = user;

    const [rating, setRating] = useState(0);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        data.photoURL = user.photoURL;
        data.rating = rating;
        axios.post('https://fierce-lake-75301.herokuapp.com/addReview', data)
            .then(res => {
                if (res.data.insertedId) {

                    let timerInterval
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thanks for your feedback!',
                        timer: 5000,
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
                    setRating(0);
                }
            })
    };



    return (
        <div className="container px-0">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <p className="mt-2 fw-bold">Add a Review</p>
                <hr />
                <div className="row mb-5">
                    <div className="col-md-6">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <textarea className="form-control"
                                    rows="3"
                                    name="review"
                                    maxLength="250"
                                    {...register("review")}
                                    placeholder="Review"
                                    required
                                >
                                </textarea>
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

                            <div className="mb-3 border rounded">
                                <div className="p-2">
                                    <p>Your rating</p>
                                    <div className="star-rating">
                                        <Rating
                                            initialRating={rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            fractions={2}
                                            // readonly
                                            onChange={(rate) => setRating(rate)}

                                        />
                                    </div>

                                    <div className="d-inline">
                                        <small style={{ fontSize: 15 }}>
                                            <p className="d-inline me-5">Bad</p>
                                            <p className="d-inline">Very Good</p>
                                        </small>
                                    </div>


                                </div>
                            </div>

                            <button type="submit" className="btn custom-black-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Submit
                            </button>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Your email address will not be published.
                            <br />
                            After submit, your review will be show on home page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;