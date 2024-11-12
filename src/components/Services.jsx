import React from 'react'
import Lottie from 'lottie-react'
import designer from '../assets/lotiie/designer.json'
import { motion } from 'framer-motion'


const Services = () => {
  return (

    <div className='md:-mt-20 bg-gradient-to-bl flex items-center justify-center from-sky-950 via-gray-900 to-sky-950'>
      <div className='h-[600px] bg-[#141C33] md:ml-32 md:mr-32 rounded-2xl sm:ml-16 sm:mr-16 min-w-64 min-h-96 min-w-40' >
      <div className='grid grid-cols-3 m-8'>
      <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8'
             initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
         <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8' 
            initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
         <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8' 
            initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
         <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8' 
            initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
         <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8' 
            initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
         <div className='min-h-64 min-w-40 hover:shadow-2xl hover:scale-110 hover:rounded-2xl transition-all ease-in-out delay-400 duration-500 hover:bg-[#263B57]'>
            <motion.div className='m-8' 
            initial={{ x: 100,
              opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              transition={{ delay: .1, type: 'spring', stiffness: 50 }}>
                <Lottie className='w-[100px] h-[100px] mr-60' animationData={designer} loop={true} />
            <h1 className='text-left text-white text-xl'>Motion & Web Graphy</h1>
            <p className='text-left text-gray-400 text-xs mt-4 hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo dolore adipisci ipsum doloribus voluptatem est cum inventore ipsa? Voluptatum, veniam veritatis modi alias fugiat ad eligendi dolore autem iure.</p>
            </motion.div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Services
