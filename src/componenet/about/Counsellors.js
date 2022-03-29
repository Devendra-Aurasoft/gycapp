import React from 'react';
import img1 from '../../assets/image/about/counsller1.jpg';
import img2 from '../../assets/image/about/counsller2.jpg';
function Counsellors() {
    return (
        <section>
            <div className='container AboutDirectors px-3'>
                <h1 className='text-center'>Counsellors</h1>
                <div className='row justify-content-around'>
                    <div data-aos="fade-up" data-aos-duration="3000" className='  p-lg-4 px-md-5 px-sm-2 px-5 col-lg-4 col-md-6  col-sm-6  my-3'>
                        <div className="card " >
                            <div className="card-img">
                                <img className="card-img-top" src={img1} alt="Card image cap" />
                            </div>
                            <div className="card-text">
                                {/* <h5 className="card-heading"><i className="fa-solid fa-graduation-cap"></i><br /> Please Write <br /> College Name </h5> */}
                                <p>Senior psychologist and Counsellor A postgraduate in psychology from the Devi Ahilya Vishwavidyalaya, Indore, She is also a Certified Psychometric Test professional from ME consultants in collaboration with CAMI, USA, she has been offering counseling to children , adolescent teens and adults for the past several years. She has played an important role in shaping the lives of number of students by giving them the right direction in careers, through her career counseling sessions.</p>
                            </div>
                        </div>
                        <div className="card_bio">
                            <h5>Counsellor Name</h5>
                            <p>Position</p>
                            <h4>
                                <ul>
                                    <li>  <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-facebook"></i></a> </li>
                                    <li> <a href="#"><i className="fa-brands fa-linkedin"></i></a> </li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='  p-lg-4 px-md-5 px-sm-2 px-5 col-lg-4 col-md-6  col-sm-6  my-3'>
                        <div className="card " >
                            <div className="card-img">
                                <img className="card-img-top" src={img2} alt="Card image cap" />
                            </div>
                            <div className="card-text">
                                {/* <h5 className="card-heading"><i className="fa-solid fa-graduation-cap"></i><br /> Please Write <br /> College Name </h5> */}
                                <p>Senior psychologist and Counsellor A postgraduate in psychology from the Devi Ahilya Vishwavidyalaya, Indore, She is also a Certified Psychometric Test professional from ME consultants in collaboration with CAMI, USA, she has been offering counseling to children , adolescent teens and adults for the past several years. She has played an important role in shaping the lives of number of students by giving them the right direction in careers, through her career counseling sessions.</p>
                            </div>
                        </div>
                        <div className="card_bio">
                            <h5>Counsellor Name</h5>
                            <p>Position</p>
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
        </section>
    )
}

export default Counsellors