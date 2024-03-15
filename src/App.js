import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'; // Make sure the path is correct based on your file structure

// Import your page components
import HomePage from '../src/components/HomePage'; // Create this component
import AboutPage from '../src/components/AboutPage'; // Create this component
import ContactPage from '../src/components/ContactPage'; // Create this component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;