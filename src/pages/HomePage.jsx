import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeaturedProduct from '../components/FeaturedProduct'
import OfferSection from '../components/OfferSection'
import NewProduct from '../components/NewProduct'
import BestSeller from '../components/BestSeller'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Facility/>
      <FeaturedProduct/>
      <OfferSection/>
      <NewProduct/>
      <BestSeller/>
    </>
  )
}

export default HomePage