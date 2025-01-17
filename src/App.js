import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import SelectRole from './components/SelectRole';
import Login from './components/Login';
import Register from './components/Register';
import VetProfile from './components/VetProfile';
import PetProfile from './components/PetProfile';
import { fetchStatus } from './api';
import './App.css';

const App = () => {
  const [status, setStatus] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const data = await fetchStatus();
        setStatus(data.message || 'Status fetched successfully');
      } catch (error) {
        setStatus('Failed to fetch status');
      }
    };

    getStatus();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Additional logout logic such as clearing tokens
  };

  return (
    <Router>
      <div className="App">
        <h1>App Status: {status}</h1>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
        <nav>
          <Link to="/">Home</Link> | <Link to="/select-role">Select Role</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/login/:role" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register/:role" element={<Register />} />
          <Route path="/vet-profile" element={isAuthenticated ? <VetProfile /> : <Navigate to="/" />} />
          <Route path="/pet-profile" element={isAuthenticated ? <PetProfile /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

