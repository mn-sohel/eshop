import React from 'react'
import Container from './commonLayouts/Container'
import SamsungBrand from '../icons/SamsungBrand'
import AiBrand from '../icons/AiBrand'
import AmazonBrand from '../icons/AmazonBrand'
import TencentBrand from '../icons/TencentBrand'
import SpotifyBrand from '../icons/SpotifyBrand'
const Brand = () => {
  return (
    <div className='my-25'>
        <Container>
            <div className='flex justify-between'>
                <SamsungBrand/> 
                <AiBrand/> 
                <AmazonBrand/> 
                <TencentBrand/> 
                <SpotifyBrand/>
            </div>
        </Container>
    </div>
  )
}

export default Brand