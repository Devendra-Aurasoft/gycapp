import React, { useEffect, useState } from 'react';
import img from "../../assets/image/colleges/collegelist3.jpeg"

import validator from "validator";


const StudentDetailsForm = () => {
    const initialValues = {
        fullname: "",
        phone: "",
        email: "",
        date: "",
        course: "",
        college: "",
        city: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const cityRegex = /^[a-zA-Z',.\s-]{1,25}$/
        if (!values.fullname) {
            errors.fullname = "Full name is required";
        } else if (!nameRegex.test(values.fullname.trim())) {
            errors.fullname = "Please enter valid name";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!validator.isMobilePhone(values.phone)) {
            errors.phone = "Please enter valid phone number";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!validator.isEmail(values.email)) {
            errors.email = "Please enter valid email address";
        }
        if (!values.date) {
            errors.date = "Date is required";
        }
        if (!values.course) {
            errors.course = "Course is required";
        }

        if (!values.college) {
            errors.college = "College  is required";
        }

        if (!values.city) {
            errors.city = "City is required";
        } else if (!cityRegex.test(values.city)) {
            errors.city = "Please enter valid city name";
        }
        return errors;
    }

    const submitForm = () => {
        console.log(formValues)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors])
    return (

        <>

            <section className='bg-white py-lg-4'>
                <div className="container ">
                    <h1 className='main-heading my-2'>Student Details</h1>
                    <div className="form-container row">
                        <div className="col-lg-6">
                            <div className='p-lg-4 my-lg-4 shadow-lg'>
                                <h2 className='sub-heading mt-2'>Fill The Form</h2>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="input-field">
                                        <input
                                            type="text "
                                            placeholder='Enter Your Full Name'
                                            id='fullname'
                                            name='fullname'
                                            value={formValues.fullname}
                                            onChange={handleChange}
                                            className={formErrors.fullname && "input-error"}
                                        />
                                        {formErrors.fullname && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.fullname}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">

                                        <input type="text" id='phone'
                                            placeholder='Enter Your Phone Number'
                                            name='phone'
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            className={formErrors.phone && "input-error"}
                                        />
                                        {formErrors.phone && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.phone}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">

                                        <input type="email" id='email'
                                            placeholder='Enter Your Email'
                                            name='email'
                                            value={formValues.email}
                                            onChange={handleChange}
                                            className={formErrors.email && "input-error"}
                                        />
                                        {formErrors.email && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.email}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">
                                        <input type="date" id='date' name='date'
                                            placeholder="Choose Date"
                                            value={formValues.date}
                                            onChange={handleChange}
                                            className={formErrors.date && "input-error"}
                                        />
                                        {formErrors.date && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.date}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">
                                        <select name='course'
                                            value={formValues.course}
                                            onChange={handleChange}
                                            className={formErrors.course && "input-error"}
                                        >
                                            <option value={""} className='text-gray'>Select Course</option>
                                            <option value="BBA" >BBA</option>
                                            <option value="BCOM">BCOM</option>
                                            <option value="BSC">BSC</option>
                                        </select>

                                        {formErrors.course && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.course}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">
                                        <select name='college'
                                            value={formValues.college}
                                            onChange={handleChange}
                                            className={formErrors.college && "input-error"}
                                        >
                                            <option value={""} >select college</option>
                                            <option value="MNDC" >MNDC</option>
                                            <option value="MRSC">MRSC</option>
                                            <option value="RGPV">RGPV</option>
                                        </select>
                                        {formErrors.college && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.college}</small>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <input type="text" id='city' name='city'
                                            placeholder='Enter Your City'
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className={formErrors.city && "input-error"} />
                                        {formErrors.city && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.city}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className='btn btn-outline-success submit-button '>Apply Now </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-6 text-center m-auto'>
                            <div className='college-image'>
                                <img src={img} alt="" className='w-100' />
                            </div>
                            <div className='shadow-lg'>
                                <div className='sub-heading mb-lg-2 my-2'>Devi Ahilya Vishwavidhyalaya</div>
                                <div className='sub-heading pb-3'>Indore</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default StudentDetailsForm