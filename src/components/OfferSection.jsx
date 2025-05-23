import React from 'react'
import Container from './commonLayouts/Container'

const OfferSection = () => {
  return (
    <Container>
        <div className='flex justify-between mt-20'>
        <div>
            <img src="images/offerImg1.png" alt="Offer_one" />
        </div>
        <div>
            <img src="images/offerImg2.png" alt="Offer_one" />
        </div>
    </div>
    </Container>
  )
}

export default OfferSection