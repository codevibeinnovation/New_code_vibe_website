import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = () => setIsMobileMenuOpen(false);
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    return () => {
      mobileLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Internship', path: '/internship' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold flex items-center">
          <img className="h-12 w-32 rounded-full m-0 p-0" src={logo} alt="Logo" />
        </NavLink>
        


          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <li key={path}>
              <NavLink
              to={path}
              className={({ isActive }) =>
                `text-xl transition duration-300 ease-in-out hover:text-[#1E3A8A] ${
                  isActive
                    ? 'font-bold underline text-transparent bg-clip-text bg-[#1E3A8A] '
                    : 'font-medium text-blue-900'
                }`
              }
            >
            {name}
            </NavLink>
            
           
                  
               
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-blue-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden ${isMobileMenuOpen ? 'animate__animated animate__fadeInDown' : 'hidden'}`}
        >
          <ul className="pt-4 pb-3 space-y-3">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block py-3 px-4 text-lg rounded-md transition   duration-300 hover:text-[#1E3A8A] ${
                      isActive ? 'font-bold underline text-transparent bg-clip-text bg-[#1E3A8A] ' : 'text-blue-900'
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
