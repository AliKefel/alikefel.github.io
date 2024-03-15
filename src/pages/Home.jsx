import React from "react";
import IconButton from "../components/IconButton";

import {FaGithub} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";



const Home = () => {
  return (
    
    <section id="home-section" className='bg-green-700 w-screen h-screen flex-row md:items-center items-start pt-64'>

        <div className="w-1/2  ml-6 ">

            <div className="flex flex-col h-full gap-1 md:gap-2 " >

                <span className="font-bold tracking-normal text-ellipsis md:text-3xl text-2xl text-white">Hello, </span>

                <span className="font-bold tracking-normal text-nowrap text-ellipsis text-5xl md:text-7xl text-white" >I'm, <span style={{color: '#0D1821'}}className=" text-gray-800">Ali Kefel</span ></span>
                
                <h1 className="text-slate-100 text-2xl md:text-4xl text-ellipsis ">
                    Undergraduate Computer Science Student @ASU
                </h1>
            </div>

        </div>

        <div className=" ml-6 flex justify-start">

            <div className=" flex items-center w-full flex-row mb-36 md:ml-0 md:flex-row justify-start gap-4 pt-5">
                <a href="https://github.com/AliKefel">
                    <IconButton text="AliKefel" >
                        <FaGithub size={40} />
                    </IconButton>
                </a>

                <a href="https://www.linkedin.com/in/ali-kefel">
                    <IconButton text="ali-kefel" color="bg-blue-600">
                    <BsLinkedin size={40} />
                    </IconButton>
                </a>

                <a href="https://www.hackerrank.com/alikefel114">
                    <IconButton text="ali-kefel" color="bg-gray-500" > 
                        <FaHackerrank  size={40} />
                    </IconButton>
                </a>
                
                <a href="https://leetcode.com/ali_kefel/">
                    <IconButton text="LeetCode" color="bg-orange-400">
                        <SiLeetcode size = {40} />
                    </IconButton>
                </a>

                <a href="https://app.joinhandshake.com/stu/users/46595477">
                    <IconButton text="@Ali-Kefel" color="bg-black">
                        <SiHandshake size={40} />
                    </IconButton>
                </a>
                
        </div>


        </div>

    
   
    </section>
    
  )
}

export default Home