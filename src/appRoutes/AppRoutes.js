import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from '../pages/dashboard/DashBoard';
import AboutUs from '../pages/aboutUs/AboutUs';
import Cart from '../pages/cart/Cart';
import SignUp from '../pages/signUp/SignUp';
import Login from '../pages/login/Login';


function AppRoutes() {


    return (
        <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart-Page" element={<Cart />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    )
}

export default AppRoutes
