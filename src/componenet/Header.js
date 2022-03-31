import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/image/gyclogo.png"
function Header() {
    const [hidenav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const handleNavbar = () => {
        if (lastScroll < window.scrollY) {
            setHideNav(true)
            setLastScroll(window.scrollY)
        } else {
            setHideNav(false)
            setLastScroll(window.scrollY)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleNavbar)
        return () => {
            window.removeEventListener("scroll", handleNavbar)
        }
    }, [hidenav, lastScroll])

    return (
        <div className={`wrapper ${hidenav && "hide-navbar"}`}>
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
                <div className="content">
                    <div className="logo"><Link to="/"><img src={logo} /></Link></div>
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>
                            <Link to="/college" className="desktop-link dropdown-toggle">Colleges </Link>
                            <input type="checkbox" id="show-features" />
                            <label htmlFor="show-features">Colleges</label>
                            <ul>
                                <li>
                                    <Link to="/" className="desktop-link dropdown-toggle">UG </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">UG</label>
                                    <ul>
                                        <li><Link to="/">B.sc</Link></li>
                                        <li><Link to="/">B.com</Link></li>
                                        <li><Link to="/">B.Tech</Link></li>
                                    </ul>
                                </li>    <li>
                                    <Link to="/" className="desktop-link dropdown-toggle">PG </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">PG</label>
                                    <ul>
                                        <li><Link to="/">M.B.A</Link></li>
                                        <li><Link to="/">M.C.A</Link></li>
                                        <li><Link to="/">M.Tech</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/exams" className="desktop-link dropdown-toggle">Exams </Link>
                            <input type="checkbox" id="show-services" />
                            <label htmlFor="show-services">Exams</label>
                            <ul>
                                <li>
                                    <Link to="/" className="desktop-link dropdown-toggle"> Items </Link>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">Items</label>
                                    <ul>
                                        <li><Link to="/">Sub Menu 1</Link></li>
                                        <li><Link to="/">Sub Menu 2</Link></li>
                                        <li><Link to="/">Sub Menu 3</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/gdpi" className="desktop-link dropdown-toggle">GDPI  </Link>
                            <input type="checkbox" id="show-gdpi" />
                            <label htmlFor="show-gdpi">GDPI</label>
                            <ul>
                                <li><Link to="/">GD</Link></li>
                                <li><Link to="/">PI</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        {/* <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Privacy policy</Link></li>
                        <li><Link to="/">Terms</Link></li> */}
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><i className="fas fa-search" /></label>
                <form action="#" className="search-box">
                    <input type="text" placeholder="Type Something to Search..." required />
                    <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right" /></button>
                </form>
            </nav>
        </div>
    )
}

export default Header