// import React from 'react';
// import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { blogPosts } from '../export/data';
// const colors = ['bg-orange-300', 'bg-blue-300', 'bg-green-300']; 

// const Blog = () => {
//   const scroll = (direction) => {
//     const scrollContainer = document.getElementById('blogScrollContainer');
//     const scrollAmount = direction === 'left' ? -300 : 300; 
//     scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   };

//   return (
//     <section id="blog" className="py-14 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-8">Our Latest Blogs</h2>
//         <div className="flex items-center">
//           <button onClick={() => scroll('left')} className=" text-white bg-gray-500 rounded-full text-blue-600 hover:text-blue-800">
//             <FaChevronLeft size={24} />
//           </button>
//           <div
//             className="overflow-x-auto scrollbar-hidden"
//             id="blogScrollContainer"
//             style={{ scrollbarWidth: 'none' }} 
//           >
//             <div className="flex space-x-8">
//               {blogPosts.map((post, index) => (
//                 <div key={index} className={`p-4 rounded-lg shadow-lg ${colors[index % colors.length]} min-w-[300px]`}>
//                   <div className='flex justify-center items-center gap-2 mb-2'>
//                     <span className='p-2 rounded-full cursor-pointer hover:bg-red-600 flex-shrink-0'>
//                       <FaCalendarAlt />
//                     </span>
//                     <p  style={{marginRight:110}}className='whitespace-nowrap mr-20'>{post.date}</p>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                   <div className="flex items-center mb-2 ">
//                     <div className="border-t border-white-900 flex-grow"></div>
//                     <a href="#" className="text-blue-600 hover:underline ml-4">
//                       Read More <i className="fas fa-angle-right ml-2"></i>
//                     </a>
//                   </div>

//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="mb-2 w-full h-36 object-cover rounded-lg"
//                   />
//                   <p className="text-gray-900 mb-2">{post.description}</p>

//                 </div>
//               ))}
//             </div>
//           </div>
//           <button onClick={() => scroll('right')} className=" item-centre text-white bg-gray-500 rounded-full hover:text-blue-800">
//             <FaChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
import React from 'react';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { blogPosts } from '../export/data';
const colors = ['bg-orange-300', 'bg-blue-300', 'bg-green-300'];

const Blog = () => {
  // Function to handle scrolling behavior
  const scroll = (direction) => {
    const scrollContainer = document.getElementById('blogScrollContainer');
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Latest Blogs</h2>
        {/* Blog Cards Section */}
        <div className="flex overflow-x-auto scrollbar-hidden space-x-8" id="blogScrollContainer" style={{ scrollbarWidth: 'none' }}>
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-lg ${colors[index % colors.length]} min-w-[300px] max-w-[300px] transition-transform transform hover:scale-105`}
            >
              <div className='flex justify-center items-center gap-2 mb-2'>
                <span className='p-2 rounded-full cursor-pointer hover:bg-red-600 flex-shrink-0'>
                  <FaCalendarAlt />
                </span>
                <p className='whitespace-nowrap'>{post.date}</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center mb-2">
                <div className="border-t border-white-900 flex-grow"></div>
                <a href="#" className="text-blue-600 hover:underline ml-4">
                  Read More <i className="fas fa-angle-right ml-2"></i>
                </a>
              </div>

              <img
                src={post.image}
                alt={post.title}
                className="mb-2 w-full h-36 object-cover rounded-lg"
              />
              <p className="text-gray-900 mb-2">{post.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Centered Below) */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => scroll('left')}
            className="bg-gray-500 text-white p-2 rounded-full hover:text-blue-800 transition-all duration-300"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-gray-500 text-white p-2 rounded-full hover:text-blue-800 transition-all duration-300"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

