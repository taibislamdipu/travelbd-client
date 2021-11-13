import React from 'react';
import Latest from '../../Shop/Latest/Latest';
import HeroSection from '../HeroSection/HeroSection';
import quotesImg from '../../../images/qoutes-img.png'
import Review from '../Review/Review';
import ContactUs from '../ContactUs/ContactUs/ContactUs';
import SummerSale from '../SummerSale/SummerSale';
import Vlog from '../Vlog/Vlog';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Latest></Latest>
            <div className="container-fluid py-5 px-0">
                <div>
                    <img src={quotesImg} className="img-fluid" alt="" />
                </div>
            </div>
            <SummerSale></SummerSale>
            <Review></Review>
            <Vlog></Vlog>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;