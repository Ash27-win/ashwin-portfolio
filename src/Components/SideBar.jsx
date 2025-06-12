// import React from 'react'
// import { Home, User, Folder, Mail } from 'lucide-react';
// import { Navigate } from 'react-router-dom';
// import Header from '../Sections/Header';

// const SideBar = () => {
//       return (
//         <div className="fixed left-0 top-52 h-96 w-16 bg-gray-800 flex flex-col items-center py-14 rounded-r-2xl shadow-lg z-20">
//           <button className="mb-8 p-3 rounded-full bg-gray-600 hover:bg-gray-500 transition" onClick={() => Navigate('/')}> 
//             <Home className="w-6 h-6 text-white" />
//           </button>
//           <button className="mb-8 p-3 hover:bg-gray-700 rounded-full transition">
//             <User className="w-6 h-6 text-white" />
//           </button>
//           <button className="mb-8 p-3 hover:bg-gray-700 rounded-full transition">
//             <Folder className="w-6 h-6 text-white" />
//           </button>
//           <button className="p-3 hover:bg-gray-700 rounded-full transition">
//             <Mail className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       );
//     };

// export default SideBar

import React from 'react';
import { Home, User, Folder, Mail } from 'lucide-react';

const SideBar = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUserClick = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFolderClick = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  return (
    <div className="fixed left-0 top-52 h-96 w-16 bg-gray-800 flex flex-col items-center py-14 rounded-r-2xl shadow-lg z-20">
      <button className="mb-8 p-3 rounded-full bg-gray-600 hover:bg-gray-500 transition" onClick={handleHomeClick}>
        <Home className="w-6 h-6 text-white" />
      </button>
      <button className="mb-8 p-3 hover:bg-gray-700 rounded-full transition" onClick={handleUserClick}>
        <User className="w-6 h-6 text-white" />
      </button>
      <button className="mb-8 p-3 hover:bg-gray-700 rounded-full transition" onClick={handleFolderClick}>
        <Folder className="w-6 h-6 text-white" />
      </button>
      <button className="p-3 hover:bg-gray-700 rounded-full transition" onClick={handleMailClick}>
        <Mail className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default SideBar;