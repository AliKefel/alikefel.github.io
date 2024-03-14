import React from "react";
import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

import {  Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'



function App() {
  
  return (

    <div>

     <Navbar/>

     {/* <div className=''>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/#about' element={<About/>} id="home-section"  />
          <Route path='/#contact' element={<Contact/>} />
          
        </Routes>

      </div> */}

      <Home/>
      <About/>
      <Contact/>

      <Footer/>


    </div>

    
  )
}

export default App
