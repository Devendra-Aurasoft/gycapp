import React, { useState } from 'react'
import img1 from "../../assets/image/colleges/collegelist1.jpeg";
import img2 from "../../assets/image/colleges/collegelist2.jpeg";
import img3 from "../../assets/image/colleges/collegelist3.jpeg";
import StudentDetailForm from './StudentDetailForm';
import PopupCreater from "../PopupCreater";
function AkClgList() {
    const [open, setOpen] = useState(false);
    const onOpenModel = () => {
        setOpen(true)
    }
    const onCloseModel = () => {
        setOpen(false)
    }
    return (<>
        <section className='college-list'>
            <div className="container">
                <h1 className='main-heading my-4'>College List</h1>
                <div className="row mx-auto justify-content-around">
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img3} alt="college list" />
                                </div>
                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel}>Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img2} alt="college list" />
                                </div>

                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel}>Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img1} alt="college list" />
                                </div>

                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel}>Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img3} alt="college list" />
                                </div>

                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel}>Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img2} alt="college list" />
                                </div>

                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel} >Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='college-card col-lg-3 p-3 p-3 col-md-4 pt-3' data-aos="zoom-in-down">
                        <div className='Clg_list_card'>
                            <h6 className="college-name">College Name</h6>
                            <div className="college-details ">
                                <div className='college-image'>
                                    <img src={img1} alt="college list" />
                                </div>

                                <div className='card-content'>
                                    <p className='text-content'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus ducimus blanditiis alias in quis quidem aperiam tempora, sit nemo!</p>
                                    <div className='redirection'>
                                        <a href="#" className='readmore'><h6>Read More</h6> </a>
                                        <a href="#"><button type='button' className='btn btn-outline-success apply-btn shadow-lg' onClick={onOpenModel}>Apply Now</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        <PopupCreater open={open} onCloseModel={onCloseModel} FormData={StudentDetailForm} />
    </>
    )
}

export default AkClgList