import React from 'react'
import Filter from '../Filter'
import Carousel from '../Home/Corousel'
import Recommended from './Recommended/index'
import Choose from './Choose/index'
import Category  from './Category/index'
import Vermont from './Vermont/index'
import Properties from './Properties/index'
import Testimonials from './Testimonials/index'
import Footer from '../Footer/index'


const Home = () => {
  return (
    <div>
        <Filter/>
        <Carousel/>
        <Recommended/>
        <Choose/>
        <Category/>
        <Vermont/>
        <Properties/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home