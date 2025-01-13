import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if Navbar is located elsewhere
import Home from './components/Home'; // Adjust path if Home is located elsewhere
import LoginPage from './components/LoginPage';
import DonorSignUpPage from './components/DonorSignUp';
import OrganizationSignUpPage from './components/OrganizationSignUp';
import ContactUs from './components/Contact'; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar outside of specific routes */}
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />

        {/* Contact Us route */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;