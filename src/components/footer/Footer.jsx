
const Footer = () => {
  return (

    <div className='fixed bottom-0 w-full flex-wrap'>

        <footer style ={{backgroundColor: '#0D1821'}} className="bg-white mx-auto shadow mr-0 ">

                <div className="w-screen text-nowrap mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">

                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> © 2023 <a href="https://flowbite.com/" className="hover:underline"> Ali Kefel™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact"  className="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>

            </div>
  )
}

export default Footer