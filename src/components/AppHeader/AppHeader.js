import React, { useEffect, useState } from 'react';
import "./AppHeader.css";
import logo from "../../assests/logo.png";

const cartSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
);

const closeSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: "#fff" }} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const AppHeader = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);

    const nav_links = [
        { route: "Home", path: "./home" },
        { route: "Categories", path: "./categories" },
        { route: "About Us", path: "./about" },
        { route: "Contact Us", path: "./contact" }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='App-Header'>
            <div>
                <img src={logo} alt='logo' className='app-logo' />
            </div>

            {isMobile ? (
                <div className="mobile-menu-container">
                    <div onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", top: "10px" }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>

                    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                        <div className="close-icon" onClick={toggleMenu}>
                            {closeSvg}
                        </div>

                        {nav_links.map((item) => (
                            <a key={item.route} href={item.path} className='mobile-menu-link' onClick={toggleMenu}>
                                {item.route}
                            </a>
                        ))}


                        <div className='cart_btn'>
                            {cartSvg}<span className='icon'>0</span>
                            <button>Login</button>
                        </div>

                        <div>
                            <img src={logo} alt='logo' className='mob-log' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-wrap gap-6 cursor-pointer font-medium relative top-3 right-6'>
                    {nav_links.map((item) => (
                        <h5 key={item.route}>{item.route}</h5>
                    ))}
                    {cartSvg}<span className='desktop_icon'>0</span>
                    <button>Login</button>
                </div>
            )}
        </div>
    );
};

export default AppHeader;
