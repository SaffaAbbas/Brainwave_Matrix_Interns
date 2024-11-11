// // import { FaArrowRight } from 'react-icons/fa';
// // import React, { useRef } from "react";
// // import { services } from '../export/data'; 
// // import ScrollButton from '../export/ScrollButton';

// // const Services = () => {
// //   const scrollRef = useRef(null);

// //   return (
// //     <section id="services" className="py-12 bg-gray-100">
// //       <div className="container mx-auto px-4 text-white">
// //         <h2 className="text-4xl font-bold text-center text-black">Our Services</h2>
        
// //         {/* Services List */}
// //         <div 
// //           ref={scrollRef}
// //           className="flex overflow-x-auto space-x-3 mt-4 px-10 custom-scrollbar-hide">
// //           {services && services.map((service, index) => (
// //             <div 
// //               key={index} 
// //               className="min-w-[250px] w-64 h-60 bg-gray-500 p-6 rounded-lg shadow-lg flex-shrink-0 relative transition duration-300 ease-in-out hover:bg-purple-900">
// //               <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
// //               <p>{service.description}</p>
              
// //               <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center gap-20">
// //                 <FaArrowRight className="text-white text-2xl cursor-pointer" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       <ScrollButton />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;
// import { FaArrowRight } from 'react-icons/fa';
// import React, { useRef } from "react";
// import { services } from '../export/data'; 
// import ScrollButton from '../export/ScrollButton';

// const Services = () => {
//   const scrollRef = useRef(null);

//   return (
//     <section id="services" className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4 text-white">
//         <h2 className="text-4xl font-bold text-center text-black">Our Services</h2>
        
//         {/* Services List */}
//         <div 
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-3 mt-4 px-10 custom-scrollbar-hide">
//           {services && services.map((service, index) => (
//             <div 
//               key={index} 
//               className="min-w-[250px] w-64 h-60 bg-gray-500 p-6 rounded-lg shadow-lg flex-shrink-0 relative transition duration-300 ease-in-out hover:bg-purple-900">
//               <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
//               <p>{service.description}</p>
              
//               <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center gap-20">
//                 <FaArrowRight className="text-white text-2xl cursor-pointer" />
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Pass scrollRef to ScrollButton */}
//         <ScrollButton scrollRef={scrollRef} />
//       </div>
//     </section>
//   );
// };

// export default Services;
import { FaArrowRight } from 'react-icons/fa';
import React, { useRef } from "react";
import { services } from '../export/data'; 
import ScrollButton from '../export/ScrollButton';

const Services = () => {
  const scrollRef = useRef(null); // Create ref here

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center text-black">Our Services</h2>
        
        {/* Services List */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-3 mt-4 px-10 custom-scrollbar-hide">
          {services && services.map((service, index) => (
            <div 
              key={index} 
              className="min-w-[250px] w-64 h-60 bg-gray-500 p-6 rounded-lg shadow-lg flex-shrink-0 relative transition duration-300 ease-in-out hover:bg-purple-900">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
              
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center gap-20">
                <FaArrowRight className="text-white text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Pass scrollRef to ScrollButton */}
        <ScrollButton scrollRef={scrollRef} />
      </div>
    </section>
  );
};

export default Services;
