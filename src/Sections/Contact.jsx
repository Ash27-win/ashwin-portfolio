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
        className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-between px-9 md:px-24 py-18 gap-12"
    >
        {/* Text Section */}
        <motion.div
            ref={textRef}
            className="w-full md:w-full flex flex-col justify-center ml-24"
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? 'visible' : 'hidden'}
        >
            <h1 className='text-6xl md:text-8xl font-bold text-gray-900 mb-4 mt-64'>Get In Touch</h1>
            <motion.div
                className="w-20 h-1 bg-gray-700 mb-3 rounded-full"
                variants={lineVariants}
                custom={0}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
            />
            <motion.div 
                className="w-20 h-1 bg-gray-700 mb-12 ml-10 rounded-full"
                variants={lineVariants}
                custom={1}
                initial="hidden"
                animate={isTextInView ? 'visible' : 'hidden'}
            />
            <p className='text-gray-500 text-2xl md:text-xl leading-relaxed mb-6'>
                Feel free to reach out for collaborations, inquiriese, or just a friendly chat! I'm always open to new opportunities and ideas.
            </p>
            <p className='text-gray-500 text-md md:text-xl leading-relaxed mb-9 mt-1 cursor-pointer'>
                <a href="mailto:">ashwing624@gmail.com</a>
            </p>

            {/* Social Media Icon */}
            <div className='flex gap-6 -mt-4'>
                <a href="mailto:ashwing624@gmail.com" className='w-[60px] h-[60px] flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-500 transition-colors'>
                    <FaEnvelope size={32} />
                </a>
                <a href="https://github.com/Ash27-win" target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-500 transition-colors'>
                    <FaGithub size={32} />
                </a>
                <a href="https://instagram.com/ashiwn_villain" target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-500 transition-colors'>
                    <FaInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com/in/ashwin-g-570a39285/" target='_blank' rel='noopener noreferrer' className='w-[60px] h-[60px] flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-500 transition-colors'>
                    <FaLinkedin size={32} />
                </a>
            </div>
        </motion.div>

        {/* Image Section */}

        <motion.div
            ref={imageRef}
            className="w-full md:w-1/2 flex justify-center"
        >
            <motion.div
                className="rounded-lg shadow-lg overflow-hidden"
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