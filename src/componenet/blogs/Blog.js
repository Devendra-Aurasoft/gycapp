import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/image/colleges/collegelist1.jpeg"
import img2 from "../../assets/image/colleges/collegelist2.jpeg"
import img3 from "../../assets/image/colleges/collegelist3.jpeg"
import Footer from '../Footer'
import Header from '../Header'
// import "../components/videoblog.css"
import BlogCard from '../home/BlogCard'
function Blog() {
  return (
    <>
      <Header />
      <section className='video-list'>
        <div className="container ">
          <h1 className='main-heading'>Video Blog</h1>
          <div className="row mx-auto video-cards ">
            <div className='col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img1} />
              </Link>
            </div>
            <div className='col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img2} />
              </Link>

            </div>
            <div className=' col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img3} />
              </Link>

            </div>
            <div className='col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img1} />
              </Link>

            </div>
            <div className='col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img2} />
              </Link>

            </div>
            <div className='col-md-4 col-lg-3' data-aos="zoom-out-up">
              <Link to={'/blog/post'}>
                <BlogCard collegeImage={img3} />
              </Link>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>


  )
}

export default Blog