import p1 from '../assets/p1.png';
import { TypeAnimation } from 'react-type-animation';
import overlay from '../assets/overlay.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={overlay} 
          alt="overlay" 
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        {/* Left Content - Text */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
              transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-600/30">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full 
              hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-1 bg-blue-600 rounded-full"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;