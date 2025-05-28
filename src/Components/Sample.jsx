// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion';
// import AshwinPassport from '../assets/Ashwin passport.jpg';
// import coverbg from '../assets/cover_bg.jpg';
// import welcome from '../assets/welcome.jpg'

// const Header = () => {
//   const [showWelcome, setShowWelcome] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowWelcome(false);
//     }, 2500); // slightly longer for full animation
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <header
//       className="flex items-center justify-center w-full h-[100vh] bg-cover bg-center bg-no-repeat relative"
//       style={{
//         backgroundImage: `linear-gradient(rgba(255,145,0,0.9), rgba(255,90,0,0.9)), url(${coverbg})`
//       }}
//     >
//       {/* Welcome Animation */}
//       <AnimatePresence>
//         {showWelcome && (
//           <motion.div
//             className="absolute z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Sparkle Emoji */}
//             <motion.div
//               className="text-white text-5xl mb-3"
//               initial={{ scale: 0 }}
//               animate={{ scale: [0, 1.4, 1] }}
//               transition={{ duration: 0.6 }}
//             >
//               ✨
//             </motion.div>

//             {/* Welcome Image with pulse */}
//             <motion.img
//               src={welcome}
//               alt='Welcome to My Portfolio'
//               className='max-w-[40%] max-h-[40%] object-contain rounded-full mb-4 shadow-2xl'
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//             />

//             {/* Typewriter effect for text */}
//             <motion.h1
//               className='text-white text-4xl md:text-5xl font-bold drop-shadow-lg text-center font-mono tracking-wider'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 1 }}
//             >
//               {'Welcome to My Portfolio'.split('').map((char, index) => (
//                 <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.04 * index }}>
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             {/* Short Developer Motto */}
//             <motion.p
//               className='text-orange-400 text-lg mt-3 italic font-medium'
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.5 }}
//             >
//               "Building elegant solutions with clean code."
//             </motion.p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Header Content */}
//       <motion.div
//         className='flex flex-col items-center z-0'
//         initial={{ opacity: 0 }}
//         animate={{ opacity: showWelcome ? 0 : 1 }}
//         transition={{ duration: 1, delay: showWelcome ? 0 : 0.5 }}
//       >
//         <img src={AshwinPassport} alt="Ashwin" className='rounded-full w-52 h-48 shadow-xl' />
//         <h2 className='text-center mt-4 text-white text-4xl font-semibold'>
//           Aꜱʜᴡɪɴ G
//           <p className='text-xl mt-2 font-light'>Software Developer / Web Developer</p>
//         </h2>
//       </motion.div>
//     </header>
//   )
// }

// export default Header;


import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import AshwinPassport from '../assets/Ashwin passport.jpg';
import coverbg from '../assets/cover_bg.jpg';
import welcome from '../assets/welcome.jpg';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

const Header = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Hide welcome animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Particle background initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Animation variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      ref={headerRef}
      className="relative flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,145,0,0.85), rgba(255,90,0,0.85)), url(${coverbg})`,
        opacity,
        scale,
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 120,
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Welcome Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="absolute z-20 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-60 backdrop-blur-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Sparkle Icon */}
            <motion.div
              className="text-6xl mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 10 }}
              role="img"
              aria-label="Sparkle"
            >
              ✨
            </motion.div>

            {/* Welcome Image */}
            <motion.img
              src={welcome}
              alt="Welcome to My Portfolio"
              className="max-w-[35%] max-h-[35%] object-contain rounded-full shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 100 }}
            />

            {/* Terminal-like Typing Effect */}
            <motion.h1
              className="text-white text-4xl md:text-6xl font-mono font-bold drop-shadow-lg text-center mt-6"
              variants={itemVariants}
            >
              {'$> Welcome to My Portfolio'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Motto with Gradient */}
            <motion.p
              className="text-lg md:text-xl mt-4 font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
              variants={itemVariants}
            >
              "Crafting elegant solutions with code."
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header Content */}
      <motion.div
        className="flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 50 : 0 }}
        transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.5 }}
      >
        <motion.img
          src={AshwinPassport}
          alt="Ashwin G"
          className="rounded-full w-56 h-56 shadow-2xl border-4 border-orange-300"
          whileHover={{ scale: 1.1, rotate: 5, borderColor: '#f97316' }}
          transition={{ type: 'spring', stiffness: 120 }}
          loading="lazy"
        />
        <motion.h2
          className="text-center mt-6 text-white text-5xl font-bold tracking-tight"
          variants={itemVariants}
        >
          Ashwin G
          <motion.p
            className="text-xl mt-3 font-light text-orange-200"
            variants={itemVariants}
          >
            Software Developer | Web Architect
          </motion.p>
        </motion.h2>

        {/* Call-to-Action Button */}
        <motion.a
          href="#projects"
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </motion.header>
  );
};

export default React.memo(Header);