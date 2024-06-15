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
      <div className="flex flex-wrap ">
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
