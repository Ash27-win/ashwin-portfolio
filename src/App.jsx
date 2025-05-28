
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

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Layout/Layout';
import About from './Sections/About'; // Import About component directly from Sections
// Remove separate About import

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* If you want external routing, keep below. Otherwise, delete */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
