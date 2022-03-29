import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSlider = () => {
    const settings = {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };
    return (
        <>
            <section className="video-slider bg-light p-4">
                <div className="container">
                    <h1 className='main-heading m-4'>Video</h1>
                    <Slider {...settings} className="shadow-lg">
                        <div className='video-container'>
                            <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='video-container'>
                            <iframe className='video' src="https://www.youtube.com/embed/9G03WWGCDVA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='video-container'>
                            <iframe className='video' src="https://www.youtube.com/embed/9G03WWGCDVA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='video-container'>
                            <iframe className='video' src="https://www.youtube.com/embed/9G03WWGCDVA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                    </Slider>
                </div>
            </section >
        </>
    )
}

export default VideoSlider;
