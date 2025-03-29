import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/tools', name: 'Tools' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-900 to-black py-4 px-6 sticky top-0 z-50 border-b-2 border-green-600 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Larger Logo */}
        <Link 
          to="/" 
          className="flex pl-5 items-center group transition-all duration-300"
        >
          <span className="text-3xl md:text-4xl  font-bold text-green-400 group-hover:text-green-300">Bhai</span>
          <span className="text-3xl md:text-4xl font-bold text-white ml-2 relative overflow-hidden">
            Coder
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-500"></span>
          </span>
        </Link>

        {/* Larger Navigation Links */}
        <ul className="flex space-x-4 md:space-x-10">
          {navItems.map((item) => (
            <li 
              key={item.path}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <Link 
                to={item.path} 
                className={`px-4 py-3 text-lg md:text-xl text-white/90 font-semibold transition-all duration-300 flex flex-col items-center
                  ${location.pathname === item.path ? 'text-green-400' : ''}
                  hover:text-green-400
                `}
              >
                {item.name}
                
                {/* Thicker Animated underline */}
                <span className={`
                  mt-2 h-1 bg-green-400 transition-all duration-500 ease-out
                  ${location.pathname === item.path ? 'w-full' : 'w-0'}
                  ${hoveredItem === item.path ? 'w-[80%]' : ''}
                `}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;