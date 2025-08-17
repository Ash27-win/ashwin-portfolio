// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const AboutDetails = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate('/about');
//   };

//   return (
//     <div className="p-12 max-w-3xl mx-auto bg-white">
//       <button
//         className="bg-gray-700 text-white px-6 py-2 rounded-full text-base hover:bg-gray-800 transition-colors mb-6"
//         onClick={handleBack}
//       >
//         Back
//       </button>
//       <h1 className="text-5xl font-bold text-black mb-4">About Me</h1>
//       <div className="w-12 h-1 bg-black mb-6"></div>
//       <p className="text-base text-gray-700 leading-6 mb-4">
//         Hi, I'm [Your Name]! I'm passionate about [your interest, e.g., photography, technology, or art]. I love spending my time exploring new ideas, creating meaningful projects, and connecting with inspiring people.
//       </p>
//       <p className="text-base text-gray-700 leading-6 mb-4">
//         In my free time, you can find me [your hobbies, e.g., walking by the beach, reading books, or experimenting with new recipes]. I believe in lifelong learning and constantly strive to grow both personally and professionally.
//       </p>
//       <h2 className="text-2xl font-bold text-black mt-8 mb-4">My Interests</h2>
//       <ul className="list-disc pl-5">
//         <li className="text-base text-gray-700 mb-2">Photography - Capturing moments in black and white.</li>
//         <li className="text-base text-gray-700 mb-2">Travel - Exploring new cultures and landscapes.</li>
//         <li className="text-base text-gray-700 mb-2">Technology - Building innovative solutions.</li>
//         <li className="text-base text-gray-700 mb-2">Music - Playing the guitar and discovering new artists.</li>
//       </ul>
//     </div>
//   );
// };

// export default AboutDetails;

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// const AboutDetails = ({ onBack }) => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const isTextInView = useInView(textRef, { once: false, margin: '-30px' });
//   const isImageInView = useInView(imageRef, { once: false, margin: '-30px' });

//   // Animation variants for text with jump effect
//   const textVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.3 },
//     },
//   };

//   // Animation variants for image with jump effect
//   const imageVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.25 },
//     },
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 relative"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       {/* Back Icon in Top-Left Corner */}
//       <motion.button
//         onClick={onBack}
//         className="absolute top-4 left-4 text-gray-800 hover:text-gray-600"
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         transition={{ duration: 0.15 }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </motion.button>

//       {/* Text Section */}
//       <motion.div
//         ref={textRef}
//         className="md:w-1/2 flex flex-col items-start justify-center p-6 md:pl-12"
//         variants={textVariants}
//         initial="hidden"
//         animate={isTextInView ? 'visible' : 'hidden'}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">More About Me</h2>
//         <p className="text-gray-600 text-lg mb-4">
//           I’m a passionate individual with a keen interest in technology, design, and innovation. Over the years, I’ve worked on various projects that blend creativity with technical expertise, aiming to create meaningful and impactful solutions.
//         </p>
//         <p className="text-gray-600 text-lg mb-4">
//           When I’m not working, you can find me exploring nature, capturing moments through photography, or diving into a good book. I believe in continuous learning and always strive to grow both personally and professionally.
//         </p>
//       </motion.div>

//       {/* Single Image Section */}
//       <motion.div
//         ref={imageRef}
//         className="md:w-1/2 p-6"
//         variants={imageVariants}
//         initial="hidden"
//         animate={isImageInView ? 'visible' : 'hidden'}
//       >
//         <div className="bg-gray-300 h-96 w-full flex items-center justify-center rounded-lg overflow-hidden">
//           <span className="text-gray-500">[Your Detailed Image Here]</span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutDetails;

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const AboutDetails = () => {
//   const navigate = useNavigate();
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const isTextInView = useInView(textRef, { once: false, margin: '-30px' });
//   const isImageInView = useInView(imageRef, { once: false, margin: '-30px' });

//   const textVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.3 },
//     },
//   };

//   const imageVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.25 },
//     },
//   };

//   const handleBack = () => {
//     console.log('Back button clicked'); // Debug log
//     navigate('/about'); // Navigate to /about
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 relative overflow-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       <motion.button
//         onClick={handleBack}
//         className="absolute top-4 left-4 text-gray-800 hover:text-gray-600 z-10"
//         style={{ pointerEvents: 'auto' }}
//         whileHover={{ scale: 1.2 }}
//         whileTap={{ scale: 0.9 }}
//         transition={{ duration: 0.15 }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </motion.button>
//       <motion.div
//         ref={textRef}
//         className="md:w-1/2 flex flex-col items-start justify-center p-6 md:pl-12"
//         variants={textVariants}
//         initial="hidden"
//         animate={isTextInView ? 'visible' : 'hidden'}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">More About Me</h2>
//         <p className="text-gray-600 text-lg mb-4">
//           I’m a passionate individual with a keen interest in technology, design, and innovation. Over the years, I’ve worked on various projects that blend creativity with technical expertise, aiming to create meaningful and impactful solutions.
//         </p>
//         <p className="text-gray-600 text-lg mb-4">
//           When I’m not working, you can find me exploring nature, capturing moments through photography, or diving into a good book. I believe in continuous learning and always strive to grow both personally and professionally.
//         </p>
//       </motion.div>
//       <motion.div
//         ref={imageRef}
//         className="md:w-1/2 p-6"
//         variants={imageVariants}
//         initial="hidden"
//         animate={isImageInView ? 'visible' : 'hidden'}
//       >
//         <div className="bg-gray-300 h-96 w-full flex items-center justify-center rounded-lg overflow-hidden">
//           <span className="text-gray-500">[Your Detailed Image Here]</span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutDetails;

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavBar';

const AboutDetails = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const isTextInView = useInView(textRef, { once: false, margin: '-30px' });
  const isImageInView = useInView(imageRef, { once: false, margin: '-30px' });

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.25 },
    },
  };

  // const handleBack = () => {
  //   navigate('/'); // Navigate back to Home
  // };

  const aboutImage =
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-9 md:px-24 py-18 gap-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Navbar />
      <motion.div
        ref={textRef}
        className="w-full md:w-full flex flex-col justify-center"
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? 'visible' : 'hidden'}
      >
        {/* <button
          onClick={handleBack}
          className="w-36 py-2 text-base bg-gray-700 text-white rounded-2xl border-2 border-transparent hover:bg-gray-200 hover:text-gray-600 hover:border-gray-600 transition-colors mb-4"
        >
          Back
        </button> */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 mt-36">About Me</h1>
        <motion.div
          className="w-20 h-1 bg-gray-700 mb-3 rounded-full"
          variants={textVariants}
          custom={0}
          initial="hidden"
          animate={isTextInView ? 'visible' : 'hidden'}
        />
        <motion.div
          className="w-20 h-1 bg-gray-700 mb-12 ml-10 rounded-full"
          variants={textVariants}
          custom={1}
          initial="hidden"
          animate={isTextInView ? 'visible' : 'hidden'}
        />
        <p className="text-gray-800 text-2xl md:text-xl leading-relaxed mb-6">
          A brief introduction about me and my interest
        </p>
        <motion.button
          className="w-36 py-2 text-base bg-gray-700 text-white rounded-2xl border-2 border-transparent hover:bg-gray-200 hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          Scroll Down
        </motion.button>
      </motion.div>
      <motion.div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-end"
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ width: '400px', height: '300px', filter: 'grayscale(100%)' }}
          variants={imageVariants}
          initial="hidden"
          animate={isImageInView ? 'visible' : 'hidden'}
        >
          <img src={aboutImage} alt="About Me" className="w-full h-full object-cover" />
          <span className="text-gray-500">[Your Detailed Image Here]</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutDetails;