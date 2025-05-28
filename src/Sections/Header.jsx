import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import AshwinProfile from '../assets/profile.jpg';
import coverbg from '../assets/cover_bg.jpg';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import Navbar from '../Components/NavBar';
import useTypingEffect from '../Components/TypingText';
import WelcomeScreen from './WelcomeScreen';
import SideBar from '../Components/SideBar';
import Resume from '../assets/Ashwin_G_CV.pdf.pdf'; // Import the resume file

const Header = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const headerRef = useRef(null);
  // const { scrollY } = useScroll();
  // const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  // const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const typedText = useTypingEffect(["Software Developer", "Web Developer"]);

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

  // Download CV function
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = Resume; // Use imported resume file
    link.download = 'Ashwin_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      ref={headerRef}
      className="relative flex items-center justify-center w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,145,0,0.95), rgba(255,90,0,0.95)), url(${coverbg})`,
        // opacity,
        // scale,
      }}
    >
      {/* <SideBar /> */}
      {/* Navbar */}
      {/* {!showWelcome && <Navbar />} */}

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
        {showWelcome && <WelcomeScreen />}
      </AnimatePresence>

      {/* Main Header Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 50 : 0 }}
        transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.5 }}
      >
        {/* Left Side: Text Content and Buttons */}
        <motion.div className="absolute left-24 top-72 flex-1 text-left md:pr-12" variants={containerVariants}>
          <motion.h2
            className="text-white text-2xl font-semibold tracking-tight"
            variants={itemVariants}
          >
            Aꜱʜᴡɪɴ G
          </motion.h2>
          <motion.p
            className="text-5xl mt-3 text-orange-200 font-bold"
            variants={itemVariants}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.p>
          <motion.p
            className="text-lg mt-4 font-thin text-orange-100 max-w-3xl"
            variants={itemVariants}
          >
            A passionate Java Full Stack Developer currently focused on building robust web applications.
            I’m also exploring Mobile App Development and Cloud Technologies to expand my skillset. 
            Eager to learn, grow, and contribute — always open to exciting opportunities and challenges.
          </motion.p>
          {/* Buttons */}
          <motion.div className="mt-6 flex space-x-4" variants={itemVariants}>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Download CV
            </button>
            <a
              href="mailto:your.email@example.com" // Replace with actual email
              className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div className="flex-1 flex justify-end mt-8 md:mt-0" variants={itemVariants}>
          <motion.img
            src={AshwinProfile}
            alt="Ashwin G"
            className="rounded-full w-[350px] h-[460px] shadow-2xl object-cover"
            transition={{ type: 'spring', stiffness: 120 }}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default React.memo(Header);