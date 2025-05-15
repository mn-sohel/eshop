import React from 'react'
import Container from './commonLayouts/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mt-8 mb-20'>
        <Container>
            <Link to="/"><img src="images/banner.png" alt="banner_image" /></Link>
        </Container>
    </div>
  )
}

export default Banner