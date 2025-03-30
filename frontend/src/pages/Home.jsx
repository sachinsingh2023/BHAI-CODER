import React, { useEffect } from 'react';
import '../styles/Home.css';
import { initParticles } from '../utils/particles';

function Home() {
  useEffect(() => {
    initParticles();
    
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden text-white min-h-screen">
      {/* Animated Background Canvas */}
      <canvas 
        id="particle-canvas" 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900 via-black to-black"
      ></canvas>
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-green-400">Bhai</span>Coder
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          We code it <span className="text-green-400">the Bhai way</span>
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 animate-pulse">
          Get Started
        </button>
        
        {/* Dual Container Section */}
        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Container */}
            <div className="bg-black bg-opacity-40 p-8 rounded-xl border-2 border-green-900 hover:border-green-400 transition-all">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Our Approach</h2>
              <p className="text-gray-300">
                We build solutions that matter with cutting-edge technology and innovative thinking.
                Our process ensures quality and efficiency in every project.
              </p>
            </div>
            
            {/* Second Container */}
            <div className="bg-black bg-opacity-40 p-8 rounded-xl border-2 border-green-900 hover:border-green-400 transition-all">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Why Choose Us</h2>
              <p className="text-gray-300">
                With years of experience and a passion for excellence, we deliver results that exceed expectations.
                Client satisfaction is at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;