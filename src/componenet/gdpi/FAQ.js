import React from 'react';
// import "./faq.css"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FAQ = () => {
    return (
        <>
            <section className='bg-light faq '>
                <div className="container">
                    <h1 className='main-heading'>FAQ's</h1>
                    <Accordion className='question-box'>
                        <AccordionSummary
                            expandIcon={<i className="fa-solid fa-angles-down"></i>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="sub-heading">Add Question </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="main-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis at quibusdam, eveniet expedita dolorum?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='question-box'>
                        <AccordionSummary
                            expandIcon={<i className="fa-solid fa-angles-down"></i>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className="sub-heading">Add Question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="main-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis at quibusdam, eveniet expedita dolorum?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='question-box'>
                        <AccordionSummary
                            expandIcon={<i className="fa-solid fa-angles-down"></i>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography className="sub-heading">Add Question</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="main-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis at quibusdam, eveniet expedita dolorum?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </section>

        </>
    )
}

export default FAQ