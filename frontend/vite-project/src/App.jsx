import { useState } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AppRouted from "./components/AppRouted";
import axios from 'axios';
import Auth from './pages/Auth.jsx';
import Nav from "./components/Nav";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/auth', formData);
      console.log(response.data); // Log the response from the backend
      setIsAuthenticated(true); // Update the authentication status
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <Route path="/*" element={<AppRouted />} />
          ) : (
            <Route path="/" element={<Auth handleAuth={handleAuth} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;