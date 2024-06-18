import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Launches from './pages/Launches';
import Services from './pages/services/Services';
import Sidebar from './common/Sidebar';
import Navigation from './common/Navigation';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        <svg width={0} height={0}>
          <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d16ba5" />
            <stop offset="16.67%" stopColor="#ba83ca" />
            <stop offset="33.33%" stopColor="#9a9ae1" />
            <stop offset="50%" stopColor="#69bff8" />
            <stop offset="66.67%" stopColor="#52cffe" />
            <stop offset="83.33%" stopColor="#5ffbf1" />
          </linearGradient>
        </svg>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 bg-customGray text-white transition-all duration-300`}>
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
