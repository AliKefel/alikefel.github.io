
import React from "react";

const Contact = () => {
  return (

    <section id="contact-section" className="  bg-green-700 w-screen h-screen p-14  ">  


      <div style = {{backgroundColor: '#0D1821'}} className="bg-gray-800 rounded-2xl h-5/6 px-8  ">
        <h1 className='justify-center text-3xl flex font-light text-gray-200 pt-4'>Contact</h1>

        <div class="container mx-auto h-5/6 mt-8">
          <div class=" bg-sky-950 rounded-lg p-8 flex  flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-white text-lg mb-1 font-medium title-font">Contact</h2>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-white">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-white">Message</label>
              <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <p class="text-xs text-white mt-3"> lorem ipsen random text </p>
          </div>

        </div>
      </div> 

    </section>

  )
}

export default Contact


