import React, { useEffect } from 'react';
import '../styles/Home.css';
import { initParticles } from '../utils/particles'; // We'll create this for animations

function Home() {
  useEffect(() => {
    initParticles();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
  useEffect(() => {
    // Particle animation script
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Resize handler
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
      
      {/* Content */}
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
        
        {/* Animated Code Blocks */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Node.js', 'Tailwind', 'MongoDB'].map((tech, i) => (
            <div 
              key={i} 
              className="bg-black bg-opacity-40 p-4 rounded-lg border border-green-900 hover:border-green-400 transition-all hover:scale-110"
            >
              <div className="text-green-400 text-3xl mb-2">
                {i % 2 === 0 ? '<>' : '{}'}
              </div>
              <h3 className="font-mono">{tech}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;