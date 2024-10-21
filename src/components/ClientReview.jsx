import React from 'react';
import { reviews } from '../export/data';

const ClientReview = () => {
  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-yellow-500 inline-block"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09L5.3 12.148.422 7.91 7.061 7 10 1.636 12.939 7l6.639.91L14.7 12.148l1.178 5.942L10 15z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Client's Review</h2>
      <div className="flex justify-center items-center space-x-8">
        {/* Left Navigation Arrow */}
        <button
          onClick={() => document.getElementById('reviewList').scrollBy({ left: -300, behavior: 'smooth' })}
          className=" bg-gray-500 rounded-full text-white hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Review List */}
        <div id="reviewList" className="flex overflow-x-auto scrollbar-hide space-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-400  hover:bg-purple-800 shadow-md rounded-lg p-6 text-center w-64 flex-shrink-0">
              <img
                src={review.image}
                alt={review.name}
                className="w-28 h-28 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{review.name}</h3>
              <p className="text-white mb-4">{review.title}</p>
              <div>{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={() => document.getElementById('reviewList').scrollBy({ left: 300, behavior: 'smooth' })}
          className="text-white bg-gray-500 rounded-full hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClientReview;
