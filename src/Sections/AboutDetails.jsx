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

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import About from './About';

const AboutDetails = ({ onBack }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-30px' });

  // Animation variants for the detailed content
  const briefVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100"
      variants={briefVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">More About Me</h2>
        <p className="text-gray-600 text-lg mb-4">
          I’m a passionate individual with a keen interest in technology, design, and innovation. Over the years, I’ve worked on various projects that blend creativity with technical expertise, aiming to create meaningful and impactful solutions.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          When I’m not working, you can find me exploring nature, capturing moments through photography, or diving into a good book. I believe in continuous learning and always strive to grow both personally and professionally.
        </p>
        <motion.button
          onClick={onBack} // Go back to initial content
          className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors mt-4"
          whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15 }}
        >
          Back
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AboutDetails;