import React from "react";
import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

import {  Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import ContactForm from "./pages/Contact-Form";



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
      
      <ContactForm/>

      <Footer/>


    </div>

    
  )
}

export default App
