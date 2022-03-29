import React, { useState, useEffect } from 'react'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)

        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    }, [visible])

    return (
        <>
            {visible && <span className='scroll-to-top' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></span>}


        </>
    )
}

export default ScrollButton