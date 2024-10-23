import React from 'react';
import { reviews } from '../export/data';
import ScrollButton from '../export/ScrollButton';

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

      {/* Review List */}
      <div id="reviewList" className="flex overflow-x-auto scrollbar-hide space-x-8 mb-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-400 hover:bg-purple-800 shadow-md rounded-lg p-6 text-center w-64 flex-shrink-0">
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
      <ScrollButton/>
    </div>
  );
};

export default ClientReview;
