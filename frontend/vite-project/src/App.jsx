import { useState } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AppRouted from "./components/AppRouted";
import Nav from "./components/Nav";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            

    <BrowserRouter>
    {/* <Nav className="z-30"/> */}
      <AppRouted/>
      
    </BrowserRouter>
</div>
  )
}

export default App
