import React from 'react';
import avatar from "../../assets/image/home/testimonial.jpeg"

const BlogCard = (props) => {
    return (
        <>
            <div className='blogCard'>
                <div className="blogCard-header">
                    <img src={props.collegeImage} alt="blog card" />
                </div>
                <div className="blogCard-body">
                    <p className='category'>
                        Technology
                    </p>
                    <h4>What's New In 2022 Tech</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iste corrupti veniam maiores repellat excepturi quod cupiditate? Animi, accusamus nostrum.</p>
                </div>
                <div className="blogCard-footer">
                    <div className="postDetails">
                        <div className="author">
                            <img src={avatar} alt="author" />
                            <div className="authorDetails">
                                <div className="name">Alexander Gilmanov</div>
                                <div className="position">CEO, SaaS specialist</div>
                            </div>
                        </div>
                        <div className="timing">

                            <small><span >9 min</span> read</small>
                            <span className="divider">|</span>
                            <small>24 Feb 2021</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard