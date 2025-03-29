import React from 'react';

function Tolls() {
  const tools = [
    {
      name: "Figma",
      category: "Design",
      description: "Collaborative interface design tool",
      link: "https://www.figma.com/"
    },
    // ... other tools
  ];

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl font-bold text-center mb-2">
        My <span className="text-green-400">Design & Development</span> Tools
      </h1>
      <p className="text-center text-gray-300 mb-8">
        These are the tools I use daily to create amazing websites
      </p>
      
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        <button className="px-4 py-2 bg-green-500 text-black rounded-full font-medium">
          All
        </button>
        {/* Other filter buttons */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-green-400 transition-all hover:shadow-lg hover:shadow-green-400/20"
          >
            <h3 className="text-xl font-semibold mb-1">{tool.name}</h3>
            <span className="inline-block bg-green-900 text-green-400 text-xs px-2 py-1 rounded mb-3">
              {tool.category}
            </span>
            <p className="text-gray-300 mb-4">{tool.description}</p>
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-medium px-4 py-2 rounded transition"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tolls;