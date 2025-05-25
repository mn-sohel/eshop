import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeaturedProduct from '../components/FeaturedProduct'
import OfferSection from '../components/OfferSection'
import NewProduct from '../components/NewProduct'
import BestSeller from '../components/BestSeller'
import Faq from '../components/faq/Faq'
import SpringSale from '../components/SpringSale'

const HomePage = () => {
  return (
    <>
      <Banner/>
      <Facility/>
      <FeaturedProduct/>
      <OfferSection/>
      <NewProduct/>
      <SpringSale/>
      <BestSeller/>
      <Faq/>
    </>
  )
}

export default HomePage