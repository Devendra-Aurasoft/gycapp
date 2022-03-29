
import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import img1 from "../../assets/image/colleges/collegelist1.jpeg"
import img2 from "../../assets/image/colleges/collegelist2.jpeg"
import img3 from "../../assets/image/colleges/collegelist3.jpeg"
import BlogCard from "./BlogCard"
const BlogSlider = () => {
    const blogsSettings = {
        centerPadding: "60px",
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <>
            <section className="blogs-slider bg-white p-4">
                <div className='container'>
                    <h1 className='main-heading m-4'>Our Blogs</h1>
                    <Slider {...blogsSettings}>
                        <Link to={"/blog/post"}>

                            <BlogCard collegeImage={img1} />
                        </Link>
                        <Link to={"/blog/post"}>

                            <BlogCard collegeImage={img2} />
                        </Link>
                        <Link to={"/blog/post"}>

                            <BlogCard collegeImage={img3} />
                        </Link>
                        <Link to={"/blog/post"}>

                            <BlogCard collegeImage={img1} />
                        </Link>
                        <Link to={"/blog/post"}>

                            <BlogCard collegeImage={img2} />
                        </Link>
                    </Slider>
                </div>
            </section >
        </>
    )
}

export default BlogSlider

