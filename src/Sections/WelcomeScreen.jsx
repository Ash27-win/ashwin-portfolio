import React from 'react';
import { motion } from 'framer-motion';
import welcome from '../assets/welcome.jpg';

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

const WelcomeScreen = () => {
  return (
    <motion.div
      className="absolute z-20 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-60 backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Welcome Image */}
      <motion.img
        src={welcome}
        alt="Welcome to My Portfolio"
        className="max-w-[35%] max-h-[35%] object-contain rounded-full shadow-2xl"
        variants={itemVariants}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 100 }}
      />

      {/* Typing Header */}
      <motion.h1
        className="text-white text-4xl md:text-6xl font-mono font-bold drop-shadow-lg text-center mt-6"
        variants={itemVariants}
      >
        {'Welcome to My Portfolio'.split('').map((char, index) => (
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

      {/* Motto */}
      <motion.p
        className="text-lg md:text-xl mt-4 font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
        variants={itemVariants}
      >
        "Crafting elegant solutions with code."
      </motion.p>
    </motion.div>
  );
};

export default WelcomeScreen;
