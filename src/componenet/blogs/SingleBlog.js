import React from 'react';
import blogImage from "../../assets/image/colleges/collegelist1.jpeg"
import avatar from "../../assets/image/home/testimonial.jpeg"
import BlogCard from '../home/BlogCard';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const SingleBlog = () => {
    return (<>
        <Header />
        <section className='sigle-blog bg-light py-3'>
            <div className="container">

                <h1 className='main-heading my-2'>post Title</h1>

                <div className="row">
                    <div className="col-12">
                        <div className="post-header">
                            <div className="author">
                                <img src={avatar} alt="author" />
                                <div className="authorDetails">
                                    <div className="name">Alexander Gilmanov</div>
                                    <div className="position">CEO, SaaS specialist</div>
                                </div>
                            </div>
                            <span className="divider">|</span>
                            <p><span >9 min</span> read</p>
                            <span className="divider">|</span>
                            <p>24 February 2021</p>
                        </div>
                        <div className="blog-images my-2">
                            <img src={blogImage} alt="" width={"100%"} />
                        </div>
                        <div className="PostContent">
                            <p>To understand what nearshoring is, first it’s necessary to understand what offshoring is. Offshoring is a common practice nowadays.<span id="more-3738"></span></p>
                            <p>It is when a company moves its operations or manufacturing to a lower landed cost country. That is a country where it costs less for the company to operate and manufacture products.</p>
                            <p>In recent years, nearshoring has become more and more common. Most companies and business owners have heard of it.</p>
                            <p>There’s no question as to why it’s so popular. It is very commonly used to perform difficult, expensive, and time-consuming tasks.</p>
                            <p>The software development industry is an example of this.</p>
                            <p>So, what is IT nearshoring, and why it is so common? What are the pros and cons of using nearshoring?</p>
                            <p>These topics will be reviewed in this article.</p>
                            <h2>Comparison With Other Business Approaches</h2>
                            <h3>Nearshoring vs Outsourcing</h3>
                            <p><a href="https://tms-outsource.com/blog/posts/outsourcing-to-serbia/">Outsourcing</a> is closely linked to nearshoring. So it’s essential to know what it involves.</p>
                            <p>Outsourcing refers to the <strong>hiring of a contractor who works outside of the business</strong>. They may even be in another country.</p>
                            <p>They can complete work and tasks for your company on a daily basis.</p>
                            <p>Nearshoring has a more specific connotation. Outsourcing, on the other hand, is a much broader term.</p>
                            <p>Outsourcing involves a contract or agreement between one company and another. This means that one company hires another.</p>
                            <p>It performs tasks and activities that were previously handled by the original company. These are activities that could be handled in-house.</p>
                            <p><strong>Onshoring, offshoring, and nearshoring are all types of outsourcing</strong>. Though each means something different and meets a specific need.</p>
                            <p>Outsourcing has many benefits, one of the most notable being cost reduction. This is one of many reasons that outsourcing has gained so much popularity over recent years.</p>
                            <p>The cost benefits that it offers companies continue to make it a popular option.</p>
                            <h3>Nearshoring vs Offshoring</h3>
                            <p>Offshoring and nearshoring are very similar in many ways. The contractor’s location is the only noticeable difference between them.</p>
                            <p>For the most part, <strong>an offshore company is a large distance away from the hiring company</strong>. Sometimes it is on a completely different continent.</p>
                            <p>With nearshoring, <strong>the contracted person or company is closer to the hiring company’s physical location</strong>.</p>
                            <p>Due to distance and time zone differences, offshoring can involve significant lag time. This may cause problems because of a lack of control.</p>
                            <p>Lags can sometimes be up to 12 hours. This may have a detrimental effect on important deadlines.</p>
                            <p>Offshore teams have a high turnover rate and could slow down software development. This is because most team members live in areas with lower life quality levels.</p>
                            <p>Yet, nearshoring can solve and fix many of these problems.</p>
                            <p>By using nearshoring <strong>businesses can benefit from increased profits due to lower costs</strong>. At the same time, they avoid all the problems and difficulties listed above.</p>
                            <p>Companies that work and deal with data protection laws often hire outsourced contractors in other places. This is so that they don’t have any difficulties with these laws.</p>
                            <p>Nearshoring would be a good option for these kinds of companies.</p>
                            <h3>Nearshoring vs Onshoring</h3>
                            <p>Onshoring is a much closer form of outsourcing. In general, onshoring is outsourcing to a company in the same country, but in another city.</p>
                            <p>This can help a company avoid several problems. Such problems include foreign tax policies and cultural differences.</p>
                            <p>In the process, it allows the company to invest in its own country and economy. Yet, this means that the company may have to deal with higher costs.</p>
                            <p>Consider, for example, an Amsterdam based consulting company.</p>
                            <p>With the onshore outsourcing model, the company can work with an IT or tech company outside of the Randstad area. Wages are lower outside the urbanized Randstad area.</p>
                            <p>To illustrate outsourcing in a simpler way:</p>
                            <ul>
                                <li>If a French company outsources to India, that’s offshoring.</li>
                                <li>If a French company outsources to Germany, that’s nearshoring.</li>
                                <li>If a French company from Paris outsources to Lyon, that’s onshoring.</li>
                            </ul><h2>Ending thoughts on nearshoring and how you can benefit from it</h2>
                            <p>Which outsourcing model to use depends much on what the business is hoping to achieve. If the focus is on keeping costs low and getting the job done, offshoring is most likely the best option.</p>
                            <p>Nearshoring is fast becoming the most popular and most liked outsourcing model. It’s a great model for most companies and it offers many opportunities.</p>
                            <p>Other benefits to nearshoring include more control and better access to the project. It is also less impacted by time, cultural, and language barriers.</p>
                            <p>Nearshoring does have its disadvantages, but the advantages greatly outweigh them. For companies wanting to begin outsourcing, nearshoring is the best option.</p>
                        </div>
                        <div className='ShareBlock'>
                            <div className='Content'>
                                <div className="row">
                                    <div className='col-3 sharetext'>
                                        <span className="Title">Share:</span>
                                    </div>
                                    <div className='col-9 col-md-6 socialicons'>
                                        <a href="" className='facebook'>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="" className='twitter'>
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a href="" className='linkedin' >
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                        <a href="" className='whatsapp'>
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h6 className="main-heading text-start">You may also like</h6>
                    <div className="col-md-4" data-aos="fade-right">
                        <Link to={'/blog/post'}>
                            <BlogCard collegeImage={blogImage} />
                        </Link>

                    </div>
                    <div className="col-md-4" data-aos="flip-left">
                        <Link to={'/blog/post'}>

                            <BlogCard collegeImage={blogImage} />
                        </Link>

                    </div>
                    <div className="col-md-4 " data-aos="fade-right ">
                        <Link to={'/blog/post'}>

                            <BlogCard collegeImage={blogImage} />
                        </Link>

                    </div>
                </div>

            </div>

        </section>
        <Footer />
    </>
    )
}

export default SingleBlog