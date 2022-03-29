import React from 'react'
import HomeSlider from './HomeSlider';
import VideoSlider from './VideoSlider';
import BlogSlider from './BlogSlider';
import Testimonials from './Testimonials ';
import AssociatedCollegeLogo from './AssociatedCollegeLogo';

function Home() {
    return (
        <div >
            <HomeSlider />
            <VideoSlider />
            <BlogSlider />
            <Testimonials />
            <AssociatedCollegeLogo />
        </div>
    )
}

export default Home