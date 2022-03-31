import React from 'react'

const GdpiHeroBanner = () => {
    return (
        <>
            <section className='gdpi'>
                <div className='hero-banner'>
                    <div className="container">
                        <div className='text-content'>
                            <h1 className='main-heading'>GDPI</h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam! Placeat eos necessitatibus cumque expedita ea! Dolores sunt ipsum nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pb-3 sample-video'>
                <div className="container">
                    <h1 className='main-heading'>Sample Video</h1>
                    <div className='video-container sample-video'>
                        <iframe className='video' src="https://www.youtube.com/embed/kT7KU1dM6Ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GdpiHeroBanner