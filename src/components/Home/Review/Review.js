import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Slider from "react-slick";

const Review = () => {

    const [userReview, setUserReview] = useState([]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('../reviews.json');
                results = await results.json();
                setUserReview(results);
                console.log(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="container my-5 text-center">
            <h2 className="text-center">Review</h2>
            <div className="my-5">

                <Slider {...settings}>
                    {
                        userReview.map(rv => <div >
                            <h4 className="fw-bold text-uppercase ">Lalaine</h4>
                            <div className="star-rating">
                                <Rating
                                    initialRating={rv?.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly
                                />
                            </div>
                            <p className="fs-5 col-md-6 mx-auto review">
                                {rv?.review}
                            </p>
                        </div>)
                    }



                </Slider>
            </div>
        </div>
    );
};

export default Review;