import React from "react";

const About = () => {
  return (


    <section id="about-section" className="  overflow-visible bg-green-700 p-14">

      <div style = {{backgroundColor: '#0D1821'}} className="bg-gray-800 rounded-2xl h-[800px] px-8 group ">



        <h1 className='justify-center  text-3xl flex font-light text-gray-200'>Projects</h1>

        <div className=" w-full h-1/4 mt-4 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12  transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className="font-semibold flex justify-center text-3xl ">Project-1</h1>
        
        </div>
        <div className=" w-full h-1/4 mt-2 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className="font-semibold flex justify-center text-3xl ">Project-2</h1>


        </div>
        <div className=" w-full h-1/4 mt-2 p-7 rounded-2xl hover:bg-gray-800 bg-slate-500 hover:text-white mb-12 transition-all duration-300 ease-in-out transform hover:translate-y-[-10px]">
          <h1 className="font-semibold flex justify-center text-3xl ">Project-3</h1>


        </div>
        


      </div> 

      <div className="border-2 h-64">

      </div>

    </section>

  )
}

export default About