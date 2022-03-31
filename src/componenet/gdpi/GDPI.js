import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import FAQ from './FAQ'
import GdpiHeroBanner from './GdpiHeroBanner'

function GDPI() {
  return (
    <>
      <Header />
      <GdpiHeroBanner />
      <h1 className="main-heading">GD Hot Topics</h1>
      <FAQ />
      <Footer />
    </>
  )
}

export default GDPI