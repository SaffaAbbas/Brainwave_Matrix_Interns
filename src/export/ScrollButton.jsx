import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const ScrollButton = () => {

  const scroll = (direction) => {
    if (direction === "left") {
      // scroll left
      console.log("Scrolling left");
    } else if (direction === "right") {
      // scroll right
      console.log("Scrolling right");
    }
  };

  return (
    // Scroll Buttons (Centered Below)
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={() => scroll("left")}
        className="p-2 bg-gray-500 rounded-full text-white hover:bg-purple-800 shadow-lg"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="p-2 bg-gray-500 rounded-full text-white hover:bg-purple-800 shadow-lg"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ScrollButton; 

