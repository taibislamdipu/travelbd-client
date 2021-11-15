import React from 'react';
import './Vlog.css';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";



const Vlog = () => {

    return (
        <div className="container " id="vlog">
            <Bounce bottom cascade>
                <h2 className="display-4 fw-bold text-center my-5">Vlog</h2>
            </Bounce>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <Fade left>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-sm rounded">
                            <iframe style={{ height: 200 }} title="video" src="https://www.youtube.com/embed/G0_JNPrhOpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Mostofa Sarwar Farooki & Banglar Gonji</h5>
                                <p class="card-text text-secondary mt-4">
                                    Mustafa Sarwar Farooqi wished the 4th anniversary of Bengal Ganji.
                                    <br />
                                    Video Production: Zahid Hossain Rafin
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-sm rounded">
                            <iframe style={{ height: 200 }} title="video2" src="https://www.youtube.com/embed/3NS8MKQNIIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Dam Diye Kinechi Bangla</h5>
                                <p class="card-text text-secondary mt-4">
                                    Legendary lyricist and composer Abdul Latif wrote and composed the song "Dam Diye Kinechi Bangla". The song played an unforgettable role in our great war of independence.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div class="col">
                        <div class="card h-100 border-0 shadow-sm rounded">
                            <iframe style={{ height: 200 }} title="video3" src="https://www.youtube.com/embed/WErZpDhIAUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">
                                    Flattery</h5>
                                <p class="card-text text-secondary mt-4">
                                    Think of the many familiar-strangers around, near-far, friends, well-wishers. Those who match the identity of the opportunity.
                                </p>
                                <p className="text-secondary">® Copyrighted design of Banglar Gonji</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Vlog;