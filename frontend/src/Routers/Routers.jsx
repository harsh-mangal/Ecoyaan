import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from 'react-router-dom';
import Home from "../Pages/Home";
import AboutUs from '../Pages/AboutUs';

const AppRouter = () => {
  return (
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
   
   
  );
}

export default AppRouter;
