import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Counsellors from './Counsellors'
import Director from './Director'
import Testimonials from '../home/Testimonials '
import img from '../../assets/image/home/slider3.jpg'
function About() {
    return (
        <div>
            <Header />

            <div className="About_Top">
                <div className="background-container">
                    <div className="bg-1" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"></div>
                    <div className="bg-2" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"></div>
                </div>
                <div className="about-container" data-aos="flip-up" data-aos-duration="10000">
                    <div className="image-container">
                        <img src={img} alt="" />
                    </div>
                    <div className="text-container">
                        <h1>About us</h1>
                        <p>Lorem ipsum dolor,Hello sit amet consectetur adipisicing elit. Eligendi porro rerum cupiditate expedita <br /> distinctio nisi nulla ipsum libero molestiae minima Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,ipsum libero molestiae</p>
                        <button className=" Home_btn">Apply Now</button>
                    </div>
                </div>
            </div>
            <Director />
            <Counsellors />
            <Testimonials />
            <Footer />

        </div>
    )
}

export default About
