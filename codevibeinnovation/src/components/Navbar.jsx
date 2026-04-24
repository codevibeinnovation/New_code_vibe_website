import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleLinkClick = () => setIsMobileMenuOpen(false);
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    return () => {
      mobileLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about-us' },
    // { name: 'Services', path: '/services' },
    
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact-us' },
    
  ];

  const specialItems = [
     //{ name: 'Internship', path: '/internship', style: 'bg-gradient-to-r from-orange-400 to-red-500 text-white' },
    { name: 'Internship', path: '/internship', style: 'bg-gradient-to-r from-orange-400 to-red-500 text-white' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur shadow-md border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <img className="h-12 w-32 rounded-full m-0 p-0" src={logo} alt="Logo" />
          </NavLink>

          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map(({ name, path }) => (
            <li key={path} className="relative group">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative inline-block px-2 py-1 font-semibold tracking-wide transition duration-300 ease-in-out
                  ${
                    isActive
                      ? 'text-blue-800 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-red-500 after:rounded-full after:transition-all after:duration-500'
                      : 'text-blue-900 hover:text-blue-800 hover:scale-105 group-hover:shadow-sm group-hover:shadow-blue-300/40 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-indigo-400 after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full'
                  } 
                  text-sm md:text-base lg:text-lg`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
          {/* Special Items - Internships & Training */}
          {specialItems.map(({ name, path, style }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={`px-5 py-2 rounded-full font-bold ${style} hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm md:text-base`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-blue-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden ${isMobileMenuOpen ? 'animate-slideDown block' : 'hidden'}`}
        >
          <ul className="pt-4 pb-3 space-y-3 px-4">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block py-3 px-4 text-lg rounded-md transition duration-300
                    ${isActive
                      ? 'font-bold text-blue-800 bg-gradient-to-r from-blue-200 to-indigo-200 underline'
                      : 'text-blue-900 hover:bg-blue-50 hover:text-blue-700'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            {/* Special Items Mobile - Internship & Training */}
            {specialItems.map(({ name, path, style }) => (
              <li key={path} className="border-t border-gray-300 pt-3 mt-3">
                <NavLink
                  to={path}
                  className={`block py-3 px-4 text-lg rounded-full font-bold ${style} text-center hover:shadow-lg transition-all duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
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
