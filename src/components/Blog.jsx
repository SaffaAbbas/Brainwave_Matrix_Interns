import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { blogPosts } from '../export/data';
const colors = ['bg-orange-300', 'bg-blue-300', 'bg-green-300']; // Array of background colors

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${colors[index % colors.length]}`}>
              {/* Use the remainder operator (%) to cycle through the colors array */}
             
              <div style={{ marginRight: '190px' }} className='flex justify-center items-center gap-2 mb-10 mr-20' id='logos'>
  <span className='p-2 rounded-full cursor-pointer hover:bg-red-600 flex-shrink-0'>
    <FaCalendarAlt />
  </span>
  <p className='whitespace-nowrap'>{post.date}</p>
</div>

              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <div className="flex items-center">
             
              <div className="border-t border-orange-700 mx-auto w-full ml-30"></div>
                <a href="#" className="text-blue-600 hover:underline ml-10">
                  Read More <i className="fas fa-angle-right ml-10"></i>
                </a>
              </div>
             
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <p className="text-white-500 font-semibold mb-4">{post.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;