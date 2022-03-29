import React from 'react';
import img1 from "../../assets/image/home/Sage_University_logo.png"
import img2 from "../../assets/image/home/malwa1.jpg"
import img3 from "../../assets/image/home/SLD.jpg"
import img4 from "../../assets/image/home/malwa2.jpg"
function AssociatedCollegeLogo() {
    return (
        <div>
            <section id="client-section">
                <div className='container-fluid'>
                    <h1 className="h-primary center">Associated College </h1>
                    <div id="clients">
                        <div className="client-item" data-aos="flip-left">
                            <img src={img1} alt="Our Client" />
                        </div>
                        <div className="client-item" data-aos="flip-left">
                            <img src={img2} alt="Our Client" />
                        </div>
                        <div className="client-item" data-aos="flip-left">
                            <img src={img3} alt="Our Client" />
                        </div>
                        <div className="client-item" data-aos="flip-left">
                            <img src={img4} alt="Our Client" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AssociatedCollegeLogo