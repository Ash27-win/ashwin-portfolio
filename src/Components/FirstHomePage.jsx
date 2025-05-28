import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import AshwinPassport from '../assets/Ashwin passport.jpg';
import coverbg from '../assets/cover_bg.jpg';
import welcome from '../assets/welcome.jpg'

const Header = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect (() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header 
      className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center bg-no-repeat relative" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(255,145,0,0.9), rgba(255,90,0,0.9)), url(${coverbg})` 
      }}
    >
      {/* Welcome Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="absolute flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-60 backdrop:-blue-md"
            initial= {{ opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome Image */}
            <motion.img
              src={welcome}
              alt='Welcome to My Portfolio'
              className='max-w-[35%] max-h-[35%] object-contain rounded-full shadow-2xl'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* Welcome Text */}
            <motion.h1
              className='text-white text-5xl font-bold drop-shadow-lg text-center'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0}}
              transition={{ duration: 0.5}}
            >
              Welcome to My Portfolio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Content */}
      <motion.div
        className='flex flex-col items-center z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showWelcome ? 0 : 1,  y: showWelcome ? 50 : 0}}
        transition={{ duration: 1, delay: showWelcome ? 0 : 0.5 }}
      >
        <img src={AshwinPassport} alt="Ashwin" className='rounded-full w-64 h-64 shadow-2xl' />
        <h2 className='text-center mt-6 text-white text-4xl font-bold tracking-tight'>
        Aꜱʜᴡɪɴ G
        <p className='text-xl mt-3 font-light text-orange-200'>Software Developer / Web Developer</p>
        </h2>
      </motion.div>
      {/* <div className='flex flex-col items-center'>
        <img src={AshwinPassport} alt="" className= 'rounded-full w-52 h-48 ' />
        <h2 className='text-center mt-4 text-white h-64 size-80'> Aꜱʜᴡɪɴ G 
          <p>Software Developer / Web Developer</p>
        </h2>
      </div> */}
      {/* <div className='mx-[500px] my-[300px]'>
        
      </div> */}
    </header>
  )
}

export default Header