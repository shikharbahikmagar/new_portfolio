import React from 'react'
import Hero from './Hero'
import{ motion} from 'framer-motion'

const Navbar = () => {
  return (
    <>
<div className='bg-gradient-to-br from-sky-950 via-gray-900 to-sky-950'>
<motion.nav className="p-4"
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: .1, type: 'spring', stiffness: 100 }}>
      <div className="container mx-auto flex justify-between items-center mt-4">
        <div className="text-white text-lg md:ml-20 font-bold">Logo</div>
        <div className="hidden md:flex gap-8 sm:block space-x-8 md:mr-40">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">About Me</a>
          <a href="#" className="text-gray-300 hover:text-white">Services</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="sm:hidden flex items-center">
          <button className="text-gray-300 hover:text-white">
            {/* Add a hamburger icon here */}
            ☰
          </button>
        </div>
        <div className='hidden mr-20'>
            <h4 className='text-white'>Prashanna</h4>
        </div>
      </div>
    </motion.nav>
    <Hero />
</div>
    </>
  )
}

export default Navbar
