import React from "react";
import IconButton from "../components/IconButton";

import {FaGithub} from "react-icons/fa"



const About = () => {
  return (


    <section id="about-section" className=" overflow-visible bg-green-700 p-14  ">

      <div style = {{backgroundColor: '#0D1821'}} className="bg-gray-800 rounded-2xl px-8 py-3 group ">

        <h1 className='justify-center  text-3xl flex font-light text-white'>Projects</h1>

        <div className=" w-full h-1/4 mt-4 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12  transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className=" flex justify-center text-2xl "> Blackjack Java Game</h1>

          <div className="w-3/4 h-1/2 flex flex-col">
            <p>
            - Developed a graphical Blackjack game in Java, utilizing object-oriented programming principles.
            </p>
            <p>
            - Implemented a user-friendly graphical interface using Java's Swing and AWT libraries to create a graphical user interface.
            </p>
          </div>

          <a href="https://github.com/AliKefel" className="flex justify-end">
              <IconButton text="AliKefel" >
                  <FaGithub size={40} />
              </IconButton>
          </a>
        </div>

        <div className=" w-full h-1/4 mt-2 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className=" flex justify-center text-2xl ">Fine Motor Skills Project:</h1>

          <div className="w-3/4 h-1/2 flex flex-col">
            <p>
            - Designed a game specifically targeted at improving fine motor skills. These games were developed with the intent of aiding toddlers and stroke patients in their recovery and development process.
            </p>
            <p>
            - Leveraged the p5.js library and JavaScript to create interactive games.
            </p>
          </div>

          <a href="https://github.com/AliKefel" className="flex justify-end">
              <IconButton text="AliKefel" >
                  <FaGithub size={40} />
              </IconButton>
          </a>
        </div>



        <div className=" w-full h-1/4 mt-2 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className=" flex justify-center text-2xl "> Twenty Questions C</h1>

          <div className="w-3/4 h-1/2 flex flex-col">
            <p>
            - Developed an interactive console-based guessing game in C.
            </p>
            <p>
            - The game uses a binary search tree (BST) to guide the flow of the game, asking the user a series of yes/no questions. Utilized dynamic memory allocation to create new nodes in the BST.
            </p>
          </div>

          <a href="https://github.com/AliKefel" className="flex justify-end">
              <IconButton text="AliKefel" >
                  <FaGithub size={40} />
              </IconButton>
          </a>
        </div>

        <div className=" w-full h-1/4 mt-2 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className=" flex justify-center text-2xl "> Personal Portfolio Website:</h1>
         



          <div className="w-3/4 h-1/2 flex flex-col">
            <p>
            - Developed a dynamic and responsive personal portfolio page using React.
            </p>
            <p>
            - Integrated Tailwind CSS for styling, creating a design with a focus on responsiveness and accessibility.
            </p>
            <p>
            - Adopted a component-based architecture, promoting reusability and maintainability of code. Each section of the portfolio was developed as a separate, reusable React component.
            </p>
          </div>

          <a href="https://github.com/AliKefel" className="flex justify-end">
              <IconButton text="AliKefel" >
                  <FaGithub size={40} />
              </IconButton>
          </a>
        </div>


      </div> 

    </section>


   

  )
}

export default About