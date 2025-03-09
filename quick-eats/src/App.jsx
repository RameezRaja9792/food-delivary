import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RestaurantPage from './components/RestaurantPage';
import PaymentsPage from './components/PaymentsPage';
import DeliveryStatusPage from './components/DeliveryStatusPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="/payments" element={<PaymentsPage />} /> {}
        <Route path="/delivery-status" element={<DeliveryStatusPage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
