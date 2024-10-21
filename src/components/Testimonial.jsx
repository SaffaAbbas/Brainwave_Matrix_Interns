
import { FaStar } from 'react-icons/fa'; 
import { testimonials } from '../export/data';
const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
  ));
};

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Client Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-6">{testimonial.feedback}</p>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-40 h-40 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)} 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
