import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./AppHeader.css";
import logo from "../../assests/logo.png";
import { useSelector } from 'react-redux';

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
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [islogged, setLogged] = useState(false)



    const nav_links = [
        { route: "Home", path: "/" },
        { route: "Categories", path: "/categories" },
        { route: "About Us", path: "/about-us" },
        { route: "Contact Us", path: "/contact" }
    ];

    useEffect(() => {
        if (!token) {
            setLogged(true)
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 200) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const naviagteHandler = () => {
        navigate("/cart-page")
    };
    const loginHandler = () => {
        navigate("/login")
    };

    const logoutHandler = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    return (
        <div className={`App-Header ${isSticky ? 'sticky-header' : ''}`} ref={headerRef}>
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
                            <NavLink to={item.path} key={item.route} className={({ isActive }) => `mobile-menu-link ${isActive ? 'text-[brown] font-bold' : null}`} onClick={toggleMenu}>
                                {item.route}
                            </NavLink>
                        ))}

                        <div className='cart_btn'>
                            {cartSvg}<span className='icon' onClick={naviagteHandler}>{totalQuantity}</span>
                            <button onClick={loginHandler}>Login</button>
                        </div>

                        <div>
                            <img src={logo} alt='logo' className='mob-log' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-wrap gap-6 cursor-pointer font-medium relative top-3 right-6'>
                    {nav_links.map((item) => (
                        <NavLink to={item.path} className={({ isActive }) => isActive ? 'text-[brown] font-bold' : null} key={item.route} href={item.path} >{item.route}</NavLink>
                    ))}
                    {cartSvg}<span className='desktop_icon' onClick={naviagteHandler}>{totalQuantity}</span>

                    {islogged ? <button onClick={loginHandler}>Login</button> : <button onClick={logoutHandler}>Logout</button>}
                </div>
            )}
        </div>
    );
};

export default AppHeader;
