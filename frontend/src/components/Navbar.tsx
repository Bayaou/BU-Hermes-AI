// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../index.css";  

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0a0a0f]/60 backdrop-blur-[20px] border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Left - Scrolls to Hero */}
          <div className="flex-shrink-0">
            <HashLink 
              to="/#hero"
              smooth
              className="text-2xl font-bold text-white/90 hover:text-pink-300 transition-all duration-300"
              onClick={closeMenu}
            >
              ✦ Hermes
            </HashLink>
          </div>

          {/* Navigation Links - Center - Scroll to sections */}
          <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <ul className="flex space-x-1">
              <li>
                <HashLink 
                  to="/#hero"
                  smooth
                  className="relative px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 
                             after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-[2px] 
                             after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 
                             after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[60%]"
                  onClick={closeMenu}
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink 
                  to="/#about"
                  smooth
                  className="relative px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 
                             after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-[2px] 
                             after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 
                             after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[60%]"
                  onClick={closeMenu}
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink 
                  to="/#features"
                  smooth
                  className="relative px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 
                             after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-[2px] 
                             after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 
                             after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[60%]"
                  onClick={closeMenu}
                >
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink 
                  to="/#cta"
                  smooth
                  className="relative px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 
                             after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:w-0 after:h-[2px] 
                             after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 
                             after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-[60%]"
                  onClick={closeMenu}
                >
                  Get Started
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Right side - Log In & Get Started (Register) */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/login"
              className="px-5 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 
                         bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Log In
            </Link>
            <Link 
              to="/register"
              className="px-7 py-2.5 rounded-full text-white font-bold text-sm 
                         bg-gradient-to-r from-pink-500 to-purple-500 
                         hover:from-pink-400 hover:to-purple-400
                         hover:shadow-[0_0_40px_rgba(249,168,212,0.3)] 
                         hover:scale-105 active:scale-95
                         transition-all duration-300
                         border border-white/20
                         flex items-center gap-2"
              onClick={closeMenu}
            >
              <span>✦</span> Get Started
            </Link>
          </div>

          {/* Hamburger menu (mobile) */}
          <button 
            className="md:hidden text-white/70 hover:text-white transition-all duration-300 p-2 rounded-lg 
                       bg-white/5 hover:bg-white/10 border border-white/10"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#0a0a0f]/80 backdrop-blur-[20px] border-b border-white/10`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <HashLink to="/#hero" smooth className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={closeMenu}>Home</HashLink>
          <HashLink to="/#about" smooth className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={closeMenu}>About</HashLink>
          <HashLink to="/#features" smooth className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={closeMenu}>Features</HashLink>
          <HashLink to="/#cta" smooth className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={closeMenu}>Get Started</HashLink>
          <div className="border-t border-white/10 my-2"></div>
          <Link to="/login" className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-center" onClick={closeMenu}>Log In</Link>
          <Link to="/register" className="block px-4 py-3 rounded-xl text-white font-bold text-center transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 border border-white/20 flex items-center justify-center gap-2" onClick={closeMenu}>
            <span>✦</span> Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;