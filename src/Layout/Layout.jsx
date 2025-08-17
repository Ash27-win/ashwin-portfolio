// // Sections/Home.js
// import React, { useState, useEffect } from 'react';
// import Header from '../Sections/Header';
// import About from '../Sections/About';
// import Navbar from '../Components/NavBar';
// import SideBar from '../Components/SideBar';

// const Home = ({ showDetailed, setShowDetailed }) => {
//   const [showWelcome, setShowWelcome] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowWelcome(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative">
//       <SideBar />
//       {!showWelcome && <Navbar showDetailed={showDetailed} setShowDetailed={setShowDetailed} />}
//       <Header />
//       {/* <About /> */}
//       {/* Add more sections here: <Projects />, <Contact /> */}
//     </div>
//   );
// };

// export default Home;  

import React, { useState, useEffect } from 'react';
import Header from '../Sections/Header';
import About from '../Sections/About';
import AboutDetails from '../Sections/AboutDetails';
import Navbar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Project from '../Sections/Project';
import ProjectDetails from '../Sections/ProjectDetails';
import Contact from '../Sections/Contact';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showDetailed, setShowDetailed] = useState(false); // Manage state locally

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <SideBar />
      {!showWelcome && <Navbar showDetailed={showDetailed} setShowDetailed={setShowDetailed} />}
      {/* Home Section (Header) */}
      <Header />
      {/* About Section */}
      {/* <section id="about-section" className="min-h-screen flex items-center justify-center bg-gray-100">
        {showDetailed ? (
          <AboutDetails setShowDetailed={setShowDetailed} />
        ) : (
          <About setShowDetailed={setShowDetailed} />
        )}
      </section> */}

      {/* About Section */}
      <section id="about-section" className="min-h-screen flex items-center justify-center bg-gray-100">
        <About />
      </section>

      <section id='projects-section' className='min-h-screen flex items-center justify-center bg-gray-100'>
        {showDetailed ? (
          <ProjectDetails setShowDetailed={setShowDetailed} />
        ) : (
          <Project setShowDetaild={setShowDetailed} />
        )}
      </section>

      <Contact />
      {/* Add more sections here: <Projects />, <Contact /> */}
    </div>
  );
};

export default Home;