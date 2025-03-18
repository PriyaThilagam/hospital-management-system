import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import "./App.css"
import HomePageComponent from './assets/components/HomePageComponent/HomePageComponent'
import ServicePageComponent from './assets/components/ServicePageComponent/ServicePageComponent'
import AboutPageComponent from './assets/components/AboutPageComponent/AboutPageComponent'
import BookingPageComponent from './assets/components/BookingPageComponent/BookingPageComponent'
import LoginPageComponent from './assets/components/LoginPageComponent/LoginPageComponent'
import logo from "./images/logonew.png"
import SeeBookingComponent from './assets/components/SeeBookingComponent/SeeBookingComponent'



const App = () => {
  return (
    <BrowserRouter>
      <header>
        <div className='header'>
          <a href="/" class="logo"><img src={logo} title="AJP HMS" alt="AJP HMS logo" height="50" width="50" align="center"/>HMS</a>
          <nav class="navbar">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/book">Book</Link>
              <Link to="/bookings">Bookings</Link>
              <Link to="/login">Login</Link>
          </nav>
        </div>

          <Routes>
            <Route exact path ='/' element={<HomePageComponent/>}></Route>
            <Route path='/services' element={<ServicePageComponent/>}></Route>
            <Route path='/about' element={<AboutPageComponent/>}></Route>
            <Route path='/book' element={<BookingPageComponent/>}></Route>
            <Route path='/bookings' element={<SeeBookingComponent/>}></Route>
            <Route path='/login' element={<LoginPageComponent/>}></Route>
          </Routes>
        </header>
    </BrowserRouter>
  )
}

export default App