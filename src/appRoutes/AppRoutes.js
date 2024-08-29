import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from '../pages/dashboard/DashBoard';
import AboutUs from '../pages/aboutUs/AboutUs';
import Cart from '../pages/cart/Cart';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart-Page" element={<Cart />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes
