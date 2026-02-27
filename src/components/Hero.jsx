import React from "react";

const Hero = () => {
  return (
    <div
      className="
        bg-gradient-to-r 
        from-[#1e40af] 
        via-[#2563eb] 
        to-[#3b82f6]
        rounded-3xl 
        px-16 
        py-20 
        text-white 
        shadow-lg
      "
    >
      <div className="max-w-4xl">

        {/* Main Heading */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Connecting, Protecting,
          <br />
          Empowering Your Campus
        </h1>

        {/* Subtext */}
        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
          A smart digital ecosystem designed to make campuses safer,
          collaborative, and insight-driven.
        </p>

        {/* Buttons */}
        <div className="flex space-x-5">
          <button
            className="
              bg-white 
              text-blue-600 
              px-6 
              py-3 
              rounded-xl 
              font-medium 
              hover:bg-blue-100 
              transition-all 
              duration-200
            "
          >
            Get Started
          </button>

          <button
            className="
              border 
              border-white 
              px-6 
              py-3 
              rounded-xl 
              font-medium 
              hover:bg-white 
              hover:text-blue-600 
              transition-all 
              duration-200
            "
          >
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;