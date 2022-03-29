import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from "../../assets/image/home/slider1.jpg"
import slider2 from "../../assets/image/home/slider2.jpg"
const Testimonials = () => {
    const testimonialsSettings = {
        // centerMode: true,
        centerPadding: "60px",
        // infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <>
            <section className='testimonial-slider bg-light p-4'>
                <div className="container" data-aos="zoom-in">
                    <h1 className='main-heading m-4'>Testimonials</h1>
                    <Slider {...testimonialsSettings}>
                        <div className="testimonialSlider text-center bg-white d-flex  align-items-center justify-content-center  shadow-lg mx-auto my-4"  >
                            <div className="row d-flex  align-items-center justify-content-center  mx-auto">
                                <div className="col-md-4">
                                    <div className='left-content '>
                                        <div className='testimonial-image mx-auto'>
                                            <img src={slider1} className="card-img-top img-fluid  shadow-lg" alt="..." />
                                        </div>
                                        <h5 className="text-success my-4 fw-bold">low wam</h5>
                                        <h6 className="text-success mt-2">Business Developer</h6>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className='right-content px-lg-4 '>
                                        <div className='quote-left  text-start'><i className="fa-solid fa-quote-left"></i></div>
                                        <div className='p-lg-4'>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam culpa deserunt maiores id accusamus non nulla quos. Dolore odio vitae aut quos totam quo fugit veniam, expedita molestiae neque dignissimos nemo? Iure ipsum optio deleniti voluptatibus saepe et omnis.</p>
                                        </div>
                                        <div className='quote-right  text-end mb-2 '><i className="fa-solid fa-quote-right "></i></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="testimonialSlider text-center bg-white d-flex  align-items-center justify-content-center  shadow-lg mx-auto my-4"  >
                            <div className="row d-flex  align-items-center justify-content-center  mx-auto">
                                <div className="col-md-4">
                                    <div className='left-content '>
                                        <div className='testimonial-image mx-auto'>
                                            <img src={slider2} className="card-img-top img-fluid  shadow-lg" alt="..." />
                                        </div>
                                        <h5 className="text-success my-4 fw-bold">low wam</h5>
                                        <h6 className="text-success mt-2">Business Developer</h6>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className='right-content px-lg-4 '>
                                        <div className='quote-left  text-start'><i className="fa-solid fa-quote-left"></i></div>
                                        <div className='p-lg-4'>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam culpa deserunt maiores id accusamus non nulla quos. Dolore odio vitae aut quos totam quo fugit veniam, expedita molestiae neque dignissimos nemo? Iure ipsum optio deleniti voluptatibus saepe et omnis.</p>
                                        </div>
                                        <div className='quote-right  text-end mb-2 '><i className="fa-solid fa-quote-right "></i></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="testimonialSlider text-center bg-white d-flex  align-items-center justify-content-center  shadow-lg mx-auto my-4"  >
                            <div className="row d-flex  align-items-center justify-content-center  mx-auto">
                                <div className="col-md-4">
                                    <div className='left-content '>
                                        <div className='testimonial-image mx-auto'>
                                            <img src={slider1} className="card-img-top img-fluid  shadow-lg" alt="..." />
                                        </div>
                                        <h5 className="text-success my-4 fw-bold">low wam</h5>
                                        <h6 className="text-success mt-2">Business Developer</h6>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className='right-content px-lg-4 '>
                                        <div className='quote-left  text-start'><i className="fa-solid fa-quote-left"></i></div>
                                        <div className='p-lg-4'>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam culpa deserunt maiores id accusamus non nulla quos. Dolore odio vitae aut quos totam quo fugit veniam, expedita molestiae neque dignissimos nemo? Iure ipsum optio deleniti voluptatibus saepe et omnis.</p>
                                        </div>
                                        <div className='quote-right  text-end mb-2 '><i className="fa-solid fa-quote-right "></i></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Slider>
                </div>
            </section>

        </>
    )
}


export default Testimonials
