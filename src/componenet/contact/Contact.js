import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
      <Header />
      <ContactBanner />
      <section className='address-and-form'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 address bg-light">
              <div className='head-office'>
                <h6 className="main-heading text-start">Head Office</h6>
                <ul>
                  <li><i className="fa-solid fa-envelope"></i><span>admin@website.com</span></li>
                  <li><i className="fas fa-phone"></i><span>Phone: (123) 666-7777</span></li>
                  <li><i className="fas fa-map-marker-alt"></i><span>42 N Jane Doe Road
                    Somewhere, Texas 66066</span></li>
                </ul>
              </div>
              <div className='branch-office'>
                <h6 className="main-heading text-start">Branch Office</h6>
                <ul>
                  <li><i className="fa-solid fa-envelope"></i><span>admin@website.com</span></li>
                  <li><i className="fas fa-phone"></i><span>Phone: (123) 666-7777</span></li>
                  <li><i className="fas fa-map-marker-alt"></i><span>42 N Jane Doe Road
                    Somewhere, Texas 66066</span></li>
                </ul>

              </div>
            </div>
            <div className="col-lg-6 form">
              <h6 className="main-heading">Send Your Request</h6>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact