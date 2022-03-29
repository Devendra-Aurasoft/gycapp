import React from 'react';
import img1 from '../../assets/image/about/director1.jpg'
import img2 from '../../assets/image/about/director2.jpg'
function Director() {
    return (
        <div className='container-fluid p-md-5 Director'>
            <h1> Directors</h1>
            <div className="card container " >
                <div className="row g-0 my-4 f">
                    <div className="col-md-5 " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7 text d-flex  align-items-center" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="card-body p-0 m-auto ">
                            <h4 className="card-title">Director
                                Name</h4>
                            {/* <h5 className="card-title">Director Po</h5> */}
                            <p className="card-text">align-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            <h4>
                                <ul>
                                    <li>  <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-facebook"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card container " >
                <div className="row g-0">
                    <div className="col-md-7 d-flex  text align-items-center" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="card-body p-0 m-auto ">
                            <h4 className="card-title">Director Name</h4>
                            {/* <h5 className="card-title">Director Po</h5> */}
                            <p className="card-text">align-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centeralign-items-centerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                            <h4>
                                <ul>
                                    <li>  <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-facebook"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img2} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Director