import React, { useEffect, useState } from 'react';
import validator from "validator";


const JobForm = () => {
    const initialValues = {
        fullname: "",
        phone: "",
        email: "",
        resume: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
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
        if (!values.resume) {
            errors.resume = "Please upload resume"
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
                    <h1 className='main-heading my-2'>Candidate Details</h1>
                    <div className="form-container row">
                        <div className="col-lg-12">
                            <div className='p-lg-4 my-lg-4 shadow-lg'>
                                <h2 className='sub-heading mt-2'>Job Application</h2>
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

                                        <input type="file" id='file'
                                            accept=".doc,.pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                            placeholder='Upload your resume'
                                            name='resume'
                                            value={formValues.resume}
                                            onChange={handleChange}
                                            className={formErrors.resume && "input-error"}
                                        />
                                        {formErrors.resume && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.resume}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className='btn btn-outline-success submit-button '>Apply Now </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default JobForm