// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// const About = () => {
//   const location = useLocation();
//   console.log(location, 'Location in About Component');
  

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      
//       {/* Text Section */}
//       <motion.div
//         className="md:w-1/2 flex flex-col items-start justify-center p-6 ml-36 -mt-36"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         key={location.pathname} // Forces re-animation on re-entry
//       >
//         <h1 className="text-6xl font-bold text-black mb-2">About Me</h1>

//         {/* First line (static) */}
//         <div className="w-16 h-1 bg-gray-700 mb-4"></div>

//         {/* Second line (animated from right) */}
//         <motion.div
//           className="w-16 h-1 bg-gray-700 mb-4 ml-8 -mt-2"
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
//         />

//         <p className="text-gray-600 mb-6 text-2xl">
//           A brief introduction about me and my interest
//         </p>
//         <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
//           Learn More
//         </button>
//       </motion.div>

//       {/* Image Section */}
//       <div className="md:w-1/2 grid grid-cols-2 gap-2 p-6">
//         <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
//           <span className="text-gray-500">[Image 1]</span>
//         </div>
//         <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
//           <span className="text-gray-500">[Image 2]</span>
//         </div>
//         <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
//           <span className="text-gray-500">[Image 3]</span>
//         </div>
//         <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
//           <span className="text-gray-500">[Image 4]</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AboutDetails from './AboutDetails';

const About = () => {
  const location = useLocation();
  const textRef = useRef(null);
  const gridRef = useRef(null);
  const isTextInView = useInView(textRef, { once: false, margin: '-30px' });
  const isGridInView = useInView(gridRef, { once: false, margin: '-30px' });
  const [aboutDetails, setAboutDetails] = useState(false);

  // Animation variants for text section with jump effect
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.3 },
    },
  };

  // Animation variants for lines with jump effect
  const lineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: i * 0.1, duration: 0.25 },
    }),
  };

  // Animation variants for image grid with jump effect
  const imageVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: i * 0.05, duration: 0.25 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AnimatePresence mode="wait">
        {!aboutDetails ? (
          // Initial About Content with Four Images
          <motion.div
            key="initial-about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6"
          >
            {/* Text Section */}
            <motion.div
              ref={textRef}
              className="md:w-1/2 flex flex-col items-start justify-center p-6 md:pl-12"
              variants={textVariants}
              initial="hidden"
              animate={isTextInView ? 'visible' : 'hidden'}
            >
              <h1 className="text Dona text-5xl md:text-6xl font-bold text-black mb-4">About Me</h1>

              {/* Decorative Lines */}
              <motion.div
                className="w-16 h-1 bg-gray-700 mb-4"
                variants={lineVariants}
                custom={0}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
              />
              <motion.div
                className="w-16 h-1 bg-gray-700 mb-4 ml-8"
                variants={lineVariants}
                custom={1}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
              />

              <p className="text-gray-600 mb-6 text-lg md:text-2xl max-w-lg">
                A brief introduction about me and my interest.
              </p>
              <motion.button
                onClick={() => setAboutDetails(true)}
                className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Image Grid Section (Four Images) */}
            <motion.div
              ref={gridRef}
              className="md:w-1/2 grid grid-cols-2 gap-4 p-6"
              initial="hidden"
              animate={isGridInView ? 'visible' : 'hidden'}
            >
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-300 h-48 w-full flex items-center justify-center rounded-lg overflow-hidden"
                  variants={imageVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-gray-500">[Image {index + 1}]</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          // Detailed About Content
          <AboutDetails key="brief-about" onBack={() => setAboutDetails(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;