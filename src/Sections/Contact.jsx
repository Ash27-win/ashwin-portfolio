import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const isTextInView = useInView(textRef, { once: false, margin: "-30px" });
    const isImageInView = useInView(imageRef, { once: false, margin: "-30px" });

    const textVariants = {
        hiddem: { y: 20, opacity: 0 },
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
    }

    const lineVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10, delay: i * 0.1, duration: 0.25 },
        }),
    }

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.25 },
        },
    };

    const contactImage = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8"
    >
        {/* Text Section */}
        <motion.div
            ref={textRef}
            className="w-full md:w-full flex flex-col justify-center ml-16"
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? 'visible' : 'hidden'}
        >
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>Get In Touch</h1>
            <motion.div
                className="w-16 h-1 bg-gray-700 mb-2"
                variants={lineVariants}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
            />
            <motion.div 
                className="w-16 h-1 bg-gray-700 mb-8 ml-8"
                variants={lineVariants}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
            />
            <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-4'>
                Feel free to reach out for collaborations, inquiriese, or just a friendly chat! I'm always open to new opportunities and ideas.
            </p>
            <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-6 cursor-pointer'>
                <a href="mailto:">ashwing624@gmail.com</a>
            </p>

            {/* Social Media Icon */}
            <div className='flex gap-4 mt-6'>
                <a href="mailto:ashwing624@gmail.com" className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors'>
                    <FaEnvelope size={20} />
                </a>
                <a href="https://github.com/Ash27-win" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors'>
                    <FaGithub size={20} />
                </a>
                <a href="https://instagram.com/ashiwn_villain" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors'>
                    <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ashwin-g-570a39285/" target='_blank' rel='noopener noreferrer' className='w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors'>
                    <FaLinkedin size={20} />
                </a>
            </div>
        </motion.div>

        {/* Image Section */}

        <motion.div
            ref={imageRef}
            className="w-full md:w-1/2 flex justify-center"
        >
            <motion.div
                className="bg-white rounded-ld shadow-lg overflow-hidden"
                style={{ width: "400px", height: "300px", filter: "grayscale(100%)" }}
                variants={imageVariants}
                initial="hidden"    
                animate={isImageInView ? 'visible' : 'hidden'}
            >
                <img src={contactImage} alt="Workspace" className='w-full h-full object-cover'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Contact