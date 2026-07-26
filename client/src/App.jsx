import React from 'react'
import Home from './pages/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Restaurants from './pages/Restaurants'
import Portal from './pages/Portal'
import Cart from './pages/Cart'
import Profile from './pages/profile'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurants' element={<Restaurants/>} />
        <Route path='/loginpage' element={<Portal/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/userprofile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App