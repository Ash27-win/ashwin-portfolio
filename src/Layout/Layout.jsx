// Sections/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../Sections/Header';
import About from '../Sections/About';
import Navbar from '../Components/NavBar';
import SideBar from '../Components/SideBar';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <SideBar />
      {!showWelcome && <Navbar />}
      <Header />
      <About />
      {/* Add more sections here: <Projects />, <Contact /> */}
    </div>
  );
};

export default Home;
