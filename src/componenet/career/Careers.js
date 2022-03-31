import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
// import "./career.css";
import PopupCreater from '../PopupCreater';
import JobForm from './JobForm';
const Careers = () => {
  const [open, setOpen] = useState(false);
  const onOpenModel = () => {
    setOpen(true)
  }
  const onCloseModel = () => {
    setOpen(false)
  }
  return (
    <>
      <Header />
      <section className='career-banner py-3'>
        <div className="container">
          <h1 className='main-heading'>Join With Us</h1>
        </div>
      </section>
      <section className='job-board py-3'>
        <div className="container">
          <h1 className='main-heading'>New Requirements</h1>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="job-cards">
                <p className='sub-heading'>Job Title</p>
                <div className='job-details py-2'>
                  <div><i className="fa-solid fa-clock"></i><small>1 minute ago</small></div>
                  <div><i className="fa-solid fa-briefcase"></i><small>fulltime</small></div>
                  <div><i className="fa-solid fa-location-dot"></i><small>Indore</small></div>
                </div>
                <div className='job-disc'>
                  <h6 >Job Description :-</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem corporis porro mollitia vitae omnis, facilis explicabo nemo blanditiis magni.</p>
                  <h6>Required skills :-</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem corporis porro mollitia vitae omnis, facilis explicabo nemo blanditiis magni.</p>
                </div>
                <div className='button'>
                  <button className='applynow-btn' onClick={onOpenModel}>Apply Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="job-cards">
                <p className='sub-heading'>Job Title</p>
                <div className='job-details py-2'>
                  <div><i className="fa-solid fa-clock"></i><small>1 minute ago</small></div>
                  <div><i className="fa-solid fa-briefcase"></i><small>fulltime</small></div>
                  <div><i className="fa-solid fa-location-dot"></i><small>Indore</small></div>
                </div>
                <div className='job-disc'>
                  <h6>Job Description :-</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem corporis porro mollitia vitae omnis, facilis explicabo nemo blanditiis magni.</p>
                  <h6>Required skills :-</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem corporis porro mollitia vitae omnis, facilis explicabo nemo blanditiis magni.</p>
                </div>
                <div className='button'>
                  <button className='applynow-btn' onClick={onOpenModel}>Apply Now</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <PopupCreater open={open} onCloseModel={onCloseModel} FormData={JobForm} />


    </>
  )
}

export default Careers