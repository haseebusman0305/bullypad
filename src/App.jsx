  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import Sidebar from './common/Sidebar';
  import Navigation from './common/Navigation';
  import Navbar from './common/Navbar';

  function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <Router>
        <div className="flex flex-wrap">
          <Sidebar/>  
          <Navigation isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`flex-1 bg-customGray text-white transition-all duration-300`}>
            <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

  export default App;
