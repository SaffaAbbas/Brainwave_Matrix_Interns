// import React from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

// const ScrollButton = () => {

//   const scroll = (direction) => {
//     if (direction === "left") {
//       // scroll left
//       console.log("Scrolling left");
//     } else if (direction === "right") {
//       // scroll right
//       console.log("Scrolling right");
//     }
//   };

//   return (
//     // Scroll Buttons (Centered Below)
//     <div className="flex justify-center space-x-4 mt-6">
//       <button
//         onClick={() => scroll("left")}
//         className="p-2 bg-gray-500 rounded-full text-white hover:bg-purple-800 shadow-lg"
//       >
//         <FaChevronLeft />
//       </button>

//       <button
//         onClick={() => scroll("right")}
//         className="p-2 bg-gray-500 rounded-full text-white hover:bg-purple-800 shadow-lg"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default ScrollButton; 

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import Services from '../components/Services';

const ScrollButton = () => {
  // Create a ref for the container
  const containerRef = useRef(null);

  // Function to scroll the container
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200; // Customize this value to control scroll distance
      if (direction === "left") {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === "right") {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Container with content to be scrolled */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide" // Flexbox with horizontal scroll
        style={{ scrollBehavior: 'smooth' }} // Smooth scrolling for better UX
      >
        
        {/* Add more content if needed */}
        <Services/>
      </div>

      {/* Scroll Buttons (Centered Below) */}
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
    </div>
  );
};

export default ScrollButton;
