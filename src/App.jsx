
// import './App.css'
// import Header from './Sections/Header'

// function App() {
  
//   return (
//    <div>
//     <Header />
//    </div>
//   )
// }

// export default App

// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './Layout/Layout';
// import About from './Sections/About'; // Import About component directly from Sections
// import AboutDetails from './Sections/AboutDetails';
// import { useState } from 'react';
//   // Remove separate About import

//   function App() {
//     const [showDetailed, setShowDetailed] = useState(false);
//     return (
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home showDetailed={showDetailed} setShowDetailed={setShowDetailed} />} />
//             <Route path="/home" element={<Navigate to="/" replace />} />

//             <Route 
//               path="/about" 
//               element={
//                 showDetailed ? (
//                   <AboutDetails setShowDetailed={setShowDetailed} />
//                 ) : (
//                   <About setShowDetailed={setShowDetailed} />
//                 )
//               } 
//             />
//             {/* <Route path='/about-details' element={<AboutDetails />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     );
//   }

//   export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Layout/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* Removed /about route since About is now a section in Home */}
          {/* <Route path="/about-details" element={<AboutDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
