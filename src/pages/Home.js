import React from 'react'
import FeatureProducts from '../components/FeatureProducts'
import HomeAbout from '../components/HomeAbout'
import Services from '../components/Services'
import TrustedCompanys from '../components/TrustedCompanys'

function Home() {
  return (
    <>
        <HomeAbout name="E - CART"/>
        <FeatureProducts />
        <Services />
        <TrustedCompanys />
    </>
  )
}

export default Home