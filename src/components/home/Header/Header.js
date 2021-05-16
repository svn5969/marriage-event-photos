import React from 'react';
import './Header.css';
// import profile2 from '../../../images/profile.png';
import TextEffect from './TextEffect/TextEffect';
import Slider from './Slider/Slider';
import white from '../../../images/white one.png'
// import data from '../../../Resume/Resume.pdf';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Header = () => {
    return (
        <div className="header-area">
            <div className="slider-area">
                <Slider></Slider>
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 text-area d-flex align-items-center">
                            <div className="">
                                <h2 className="font-weight-bold green-color">Welcome To, <br /><strong>প্রজাপতি ওয়েডিং এন্ড ইভেন্ট</strong></h2>
                                <div className="animation">
                                    <TextEffect></TextEffect>
                                </div>
                                <div>
                                    {/* <a className="btn btn-outline-danger text-white mt-3 px-3" href={data} download="(CV) Web Developer Kaushik Biswas">Download CV</a> */}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 img-area text-center">
                            <img src={white} className="" style={{ width: '90%', }} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;