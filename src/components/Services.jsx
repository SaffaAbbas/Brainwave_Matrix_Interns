import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import React, { useRef } from "react";
import { services } from '../export/data';
const Services = () => {
  const scrollRef = useRef(null);

//funtion tohandle scrollin
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="services"className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-white relative">
        <h2 className="text-4xl font-bold text-center text-purple-700">Our Services</h2>
        
        {/* Scroll buttons */}
        <div className="relative mt-8">
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-purple-700 rounded-full text-white hover:bg-purple-800 shadow-lg">
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-purple-700 rounded-full text-white hover:bg-purple-800 shadow-lg">
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-3 mt-4 px-10 custom-scrollbar-hide">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="min-w-[250px] w-64 h-60 bg-purple-700 p-6 rounded-lg shadow-lg flex-shrink-0 relative transition duration-300 ease-in-out hover:bg-purple-900">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center gap-20">
                  <FaArrowRight className="text-white text-2xl cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;