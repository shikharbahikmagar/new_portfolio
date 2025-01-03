// Hero.js
import React from 'react';
import p1 from '../assets/p1.png';
import { TypeAnimation } from 'react-type-animation';
import overlay from '../assets/overlay.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section className="md:m-20 lg:m-16 h-auto md:mt-4 flex flex-col sm:flex-row justify-around text-white p-10" 
    style={{
      backgroundImage: `url(${overlay})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: '10%',
      backgroundPositionY: '80%',
      backgroundSize: 'cover',

    }}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: .4, type: 'spring', stiffness: 100 }}>
      <div className="mt-12 text-center sm:text-left sm:ml-5">
        <p className='text-gray-400 mb-4'>Hello Everyone</p>
      <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm Shikhar Bahik Magar",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "A Passionate Web Developer.",
        1500,
      ]}
      wrapper="span"
      className='text-inline text-xl text-center md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
      speed={50}
      style={{ }}
      repeat={Infinity}
    />
      </div>
       <div className='sm:w-[66%] mt-4 md:mt-6'>
        <p className="text-gray-400 text-xs sm:mt-6 mb-6">
        "I'm a web developer focused on building user-friendly web applications.
          I transform concepts into beautiful, functional websites.
          Check out my projects and get in touch!"
          </p>
       </div>
      </div>
       <motion.div 
               className="w-full md:w-1/2 flex justify-center"
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
             >
               <div className="relative group">
                 <div className="relative -inset-1 bg-gradient-to-br from-sky-950 via-indigo-100 to-gray-800 rounded-full blur opacity-30 
                   group-hover:opacity-60 transition duration-500"></div>
                 <motion.div
                   animate={{
                     y: [0, -10, 0],
                   }}
                   transition={{
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                   className="relative"
                 >
                   <img 
                     src={p1} 
                     alt="profile" 
                     className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full 
                       shadow-2xl transform group-hover:scale-105 transition duration-500"
                   />
                 </motion.div>
               </div>
             </motion.div>
    </motion.section>
  );
};

export default Hero;
