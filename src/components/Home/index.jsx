import React from 'react'
import Filter from '../Filter'
import Carousel from '../Home/Corousel'
import Recommended from './Recommended/index'
import Choose from './Choose/index'
import Category  from './Category/index'



const Home = () => {
  return (
    <div>
        <Filter/>
        <Carousel/>
        <Recommended/>
        <Choose/>
        <Category/>
    </div>
  )
}

export default Home