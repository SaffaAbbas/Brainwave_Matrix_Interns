import React, { useRef } from 'react';
import { teamMembers } from '../export/data';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'; 
import ScrollButton from '../export/ScrollButton';

const Team = () => {
  const scrollRef = useRef(null); 

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>

        {/* Team Members List */}
        <div 
          ref={scrollRef}
          className="flex space-x-3 mt-4 px-10 scrollbar-hide scroll-container">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg shadow-lg text-center ${member.color} min-w-[250px] w-64 h-72 flex-shrink-0 transition duration-300 ease-in-out hover:${member.color === 'bg-blue-200' ? 'bg-blue-300' : 'bg-purple-300'}`}>
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-800">{member.role}</p>
              
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center gap-20">
                <FaArrowRight className="text-white text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        <ScrollButton/>
      </div>
    </section>
  );
};

export default Team;
