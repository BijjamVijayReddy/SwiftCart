import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from '../pages/dashboard/DashBoard';
import AboutUs from '../pages/aboutUs/AboutUs';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes
