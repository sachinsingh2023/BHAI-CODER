import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <nav className={`bg-gradient-to-r from-green-900 to-black py-3 sticky top-0 z-50 border-b border-green-600/50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group transition-all duration-300">
              <span className="text-3xl md:text-4xl font-bold text-green-400 group-hover:text-green-300 transition-colors duration-300">Bhai</span>
              <span className="text-3xl md:text-4xl font-bold text-white ml-2 relative overflow-hidden">
                Coder
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500"></span>
              </span>
            </Link>
          </div>

          {/* Centered Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1 mx-4">
            <ul className="flex space-x-1 lg:space-x-3 xl:space-x-5">
              {navItems.map((item) => (
                <li 
                  key={item.path}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-1"
                >
                  <Link 
                    to={item.path} 
                    className={`py-2 px-3 text-white/90 font-medium transition-all duration-300 flex flex-col items-center rounded-lg
                      ${location.pathname === item.path ? 'text-green-400 bg-black/20' : ''}
                      hover:text-green-400 hover:bg-black/10
                    `}
                  >
                    {item.name}
                    <span className={`
                      mt-1 h-0.5 bg-green-400 transition-all duration-500 ease-out
                      ${location.pathname === item.path ? 'w-3/4' : 'w-0'}
                      ${hoveredItem === item.path ? 'w-1/2' : ''}
                    `}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/login" 
              className="px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:text-green-400 hover:bg-black/10"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-green-500/40 active:scale-95"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-black/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 pt-2 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <Link 
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-white/90 font-medium rounded-lg transition-colors duration-300
                    ${location.pathname === item.path ? 'bg-green-900/50 text-green-400' : 'hover:bg-gray-800/50'}
                  `}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute left-0 top-1/2 h-3/5 w-1 bg-green-400 rounded-r-lg transform -translate-y-1/2"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex space-x-3 px-2">
            <Link 
              to="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 text-white font-medium rounded-lg border border-green-600 hover:bg-green-900/30 transition-all active:scale-95"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-all shadow-md active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;