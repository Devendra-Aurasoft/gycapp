import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import HomeSlider from './HomeSlider';
import VideoSlider from './VideoSlider';
import BlogSlider from './BlogSlider';
import Testimonials from './Testimonials ';
import AssociatedCollegeLogo from './AssociatedCollegeLogo';

function Home() {
    return (
        <div >
            <Header />
            <HomeSlider />
            <VideoSlider />
            <BlogSlider />
            <Testimonials />
            <AssociatedCollegeLogo />
            <Footer />

        </div>
    )
}

export default Home