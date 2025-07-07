import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';



export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h2> Protfolio</h2>
                </div>
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                </div>
                <nav className={menuOpen ? "nav nav-open" : "nav"}>
                    <ul className='navList'>
                        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                        <li><NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
                        <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
