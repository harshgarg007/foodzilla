import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div className=''>
    <Navbar/>
    <CategoryMenu/>
    <FoodItems/>
    <Cart/>
    </div>
  )
}

export default Home