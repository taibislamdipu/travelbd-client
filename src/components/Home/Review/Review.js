import React, { useEffect, useState } from "react";
import "./Review.css";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Loading from "../../Loading/Loading";
import Bounce from "react-reveal/Bounce";
import avatar from "../../../images/avatar.png";

const Review = () => {
  const [userReview, setUserReview] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // var settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  // };

  useEffect(() => {
    try {
      async function callApi() {
        let results = await fetch(
          "https://fierce-lake-75301.herokuapp.com/reviews"
        );
        results = await results.json();
        setUserReview(results);
        setIsLoading(false);
      }
      callApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container-fluid text-center px-0" id="review">
      <Bounce bottom cascade>
        <h2 className="text-center display-4 fw-bold my-5 ">Customer Review</h2>
      </Bounce>
      <div className="review-section ">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          // <Swiper
          //     spaceBetween={50}
          //     slidesPerView={2}
          //     centeredSlides
          //     onSlideChange={() => console.log("slide change")}
          //     onSwiper={swiper => console.log(swiper)}
          // >
          //     {
          //         userReview.map(review => <SwiperSlide>

          //             <div className="">
          //                 <img src={review?.photoURL} className="mt-5 text-center review-img rounded-circle" alt="" />
          //                 <div className="shadow  bg-white rounded py-5 review-container">
          //                     <h6 className="fw-bold">{review?.name}</h6>
          //                     <div className="star-rating">
          //                         <Rating
          //                             initialRating={review?.rating}
          //                             emptySymbol="far fa-star"
          //                             fullSymbol="fas fa-star"
          //                             readonly
          //                         />
          //                     </div>
          //                     <p className="fs-5 px-4 review">
          //                         <small>
          //                             {review?.review}
          //                         </small>
          //                     </p>
          //                 </div>
          //             </div>

          //         </SwiperSlide>
          //         )
          //     }
          // </Swiper>

          <Swiper
            loop={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
          >
            {userReview.map((review) => {
              return (
                <SwiperSlide key={review._id}>
                  <div className="mx-3 pb-5">
                    <img
                      src={review?.photoURL || avatar}
                      className="mt-5 text-center review-img rounded-circle"
                      alt=""
                    />
                    <div className="shadow-lg bg-white rounded py-5 review-container">
                      <h6 className="fw-bold mt-2">{review?.name}</h6>
                      <div className="star-rating">
                        <Rating
                          initialRating={review?.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        />
                      </div>
                      <p className="fs-5 px-4 review">
                        <small>{review?.review.slice(0, 120)}</small>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Review;
