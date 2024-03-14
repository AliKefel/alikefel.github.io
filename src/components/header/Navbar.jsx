import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../../assets/Letter-A.png';
import { useState } from "react";
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>

        <nav style = {{backgroundColor: '#0D1821'}} className="justify-items-end bg-green-700 content-center p-2  w-screen">

    
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">

                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ali Kefel</span>
                </a>

                <div 
                    onClick ={()=>setOpen(!open)} 
                    className="text-3xl text-green-900 hover:text-slate-500 md:hidden absolute right-6 top-8 cursor-pointer ">
                    <ion-icon name={open ? "close" : "grid"}></ion-icon>
                </div>

                <div className="justify-end right-4 top-24 md:right-0 md:top-1 md:mt-0 flex w-21 absolute md:relative flex-row-reverse content-end md:block md:w-auto  self-center " id="navbar-default" >

                    <ul 
                        style ={{backgroundColor: '#0D1821'}} 
                        className={`rounded-md transition-all md:static duration-500 ease-in font-medium flex flex-col md:flex-row md:space-x-8 ${open ? 'top-20' : 'hidden md:flex'}
                        `}>

                        <li><ScrollLink to="home-section" activeClass="active" 
                            className="text-white block hover:cursor-pointer rounded py-2 px-3 w-56 text-center md:w-full hover:bg-green-700 md:bg-transparent transition ease-in-out delay-0 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300">
                                Home
                            </ScrollLink>
                        </li>
        
                        <li>
                            <ScrollLink to='about-section' activeClass="active" 
                            className="text-white block hover:cursor-pointer rounded py-2 px-3 w-56 text-center md:w-full hover:bg-slate-500 md:bg-transparent transition ease-in-out delay-0 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300">
                                About
                            </ScrollLink>
                        </li>

                        <li><ScrollLink activeClass="active" to="contact-section"  >
                                <div>
                                    <button type="button" className="text-white w-56 md:w-full justify-center bg-green-8000 hover:bg-slate-500  focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-green-800 dark:hover:bg-black-500 dark:focus:ring-blue-800 transition ease-in-out delay-0 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300">
                                        Contact
                                    </button>
                                </div>
                            </ScrollLink>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar