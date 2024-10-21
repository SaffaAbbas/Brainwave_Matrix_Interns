
import React from "react";
import skillup from "../images/skillup.png"
const Header = () => {


  return (
    <header className="absolute top-0 left-0 w-full p-4">
      <div className="flex justify-between items-center">
        <img src={skillup} className="w-36 h-36  rounded-full" alt="Skillhub Logo" />
        <nav className="flex gap-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          <a href="#team" className="text-white hover:text-gray-300">Portfolio</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#blog" className="text-white hover:text-gray-300">Blog</a>
        </nav>
        <button className="ml-8 px-4 py-2 bg-purple-500 text-white rounded-md">Schedule Call</button>
      </div>
    </header>

  );
};

export default Header;
