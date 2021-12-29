import React from 'react';
import  Home  from './pages/Home';
import  Product  from './pages/Products';
// import { NavBar } from './components/Navbar';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Navigate } from 'react-router-dom';
import App from './App';
import Nav from './components/Navbar'
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import MerchantLogin from './pages/MerchantLogin';

export const NewRoutes = () => {
  return (
      <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>} />        
        <Route path="/register" element={<Register/>} />
        <Route path="/merchantlogin" element={<MerchantLogin/>} />
      </Routes>
      <Footer />
    </Router>
  );
};