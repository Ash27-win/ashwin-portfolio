import React, { useState } from 'react';
import { motion, AnimatePresence, easeInOut, delay } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the full-screen menu
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, easeInOut } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.6, // Delayed to start after both wings are open
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the name and senior level
  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.3, // Starts after the left wing begins to open
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full p-4 flex justify-between items-center backdrop-blur-sm z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Brand Logo */}
      <motion.div
        className="text-xl ml-20 font-bold text-white"
        whileHover={{ scale: 1.05 }}
      >
        Ashwin
      </motion.div>

      {/* Menu Icon */}
      <motion.div
        className="text-white mr-16 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
      >
        <Menu className="w-8 h-8" />
      </motion.div>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          
          <motion.div
            className="fixed inset-0 h-screen w-screen bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute top-4 left-24 text-white"
              variants={nameVariants}
            >
              <h3 className="text-lg font-semibold">Ashwin</h3>
            </motion.div>
            {/* Close Button */}
            <motion.div
              className="absolute top-4 right-20 text-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
            >
              <X className="w-8 h-8" />
            </motion.div>

            {/* Menu Title */}
            <motion.h2
              className="text-4xl font-bold text-white mb-10"
              variants={itemVariants}
            >
              Menu
            </motion.h2>

            {/* Navigation Links */}
            <motion.ul className="flex flex-col items-center space-y-6 text-white">
              {[
                { name: 'Home', to: '/home' },
                { name: 'About', to: '/about' },
                { name: 'Projects', to: '/projects' }, // Add route in App.js if needed
                { name: 'Contact', to: '/contact' },   // Add route in App.js if needed
              ].map((section, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                  className="text-2xl cursor-pointer"
                >
                  <Link
                    to={section.to}
                    onClick={toggleMenu}
                    className="focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {section.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;