import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrdwow");
  const [showPopup, setShowPopup] = useState(false); // Add this line

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      console.log("submitted");

    }
  }, [state.succeeded]);

  const handleSubmitWithPopup = async (e) => {
    event.preventDefault();
    await handleSubmit(e);
  
};

  return (
    <>
    <section className="  bg-green-700 w-screen h-screen p-14  ">
        <div style = {{backgroundColor: '#0D1821'}} className="bg-gray-800 rounded-2xl h-fit px-8 py-8  ">
            <h1 className='justify-center text-3xl flex font-light text-gray-200 pt-4'>Contact</h1>
            <div className="container mx-auto h-5/6 mt-8">
                <div className=" bg-sky-950 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative shadow-md">

                    <form onSubmit={handleSubmitWithPopup}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-white">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email" 
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />

                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={state.submitting}>
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </section>
    {showPopup && ( 
            <div className="bg-green-700 fixed inset-0 flex items-center justify-center w-screen h-screen p-14 " style={{zIndex: 10}}>
              <div className=" border-black bg-sky-950 border-4 border-solid p-8 rounded-lg shadow-lg">
                <p className="text-lg text-white">Thank you for your submission!</p>
                <button onClick={() => setShowPopup(false)} className="mt-4 bg-green-700 text-white px-4 py-2 rounded-md">Close</button>
              </div>
            </div>
    )}
    
    </>


  );
}

// function ContactForm() {
//   return (
//     <ContactForm />
//   );
// }


export default ContactForm;