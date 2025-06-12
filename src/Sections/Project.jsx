import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

const Project = ({ setShowDetaild }) => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const isTextInView = useInView(textRef, { once: false, margin: "-30px" });
    const isImageInView = useInView(imageRef, { once: false, margin: "-30px" });

    const handleLearnMore = () => {
        setShowDetaild(true);
    }

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
        },
    };

    const lineVariants = {
        hidden: { y: 20, opacity: 0},
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10, delay: i * 0.1, duration: 0.25 },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.25 },
        },
    };

    const projectImage = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60";
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transitio: { duration: 0.3  } }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-8"
    >

        <motion.div
            ref={textRef}
            className='w-full md:w-full flex flex-col justify-center'
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
        >
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>My Projects</h1>
            <motion.div
                className='w-16 h-1 bg-gray-700 mb-2'
                variants={lineVariants}
                custom={0}
                initial="hidden"
                animate={isTextInView ? "visible" : "hidden"}
            />
            <motion.div 
                className='w-16 h-1 bg-gray-700 mb-6 ml-8'
                variants={lineVariants}
                custom={1}
                initial="hidden"
                animate={isTextInView ? "visible" : "hidden"}
            />
            <p className='text-gray-700 text-lg md:text-xl leading-relaxed mb-6'>
                This is some of my projects that I have done and currently working on.
            </p>
            <motion.button
                onClick={handleLearnMore}
                className='w-36 py-2 text-base bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
            >
                Learn More
            </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
            ref={imageRef}
            className='w-full md:w-1/2 flex justify-center'
        >
            <motion.div
                className='bg-white rounded-lg shadow-lg overflow-hidden'
                style={{ width: "300px", height: "200px", transform: "rotate(-5deg)", filter: "grayscale(100%)"}}
                variants={imageVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
            >
                <img src={projectImage} alt="My Project" className='w-full h-full object-cover' />
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default Project