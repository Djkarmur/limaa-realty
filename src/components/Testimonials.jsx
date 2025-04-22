import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Jay K.",
      address:'Placentia, CA',
      text: "Working with Dhaval Velani at Limaa, Inc. was an absolute pleasure! Their professionalism,expertise, and dedication truly stood out throughout the entire process. They listened attentively to our needs and went above and beyond to find us the perfect property. Their attention to detail, prompt communication, and market knowledge made us feel confident every step of the way. We couldn't be happier with our experience and highly recommend Dhaval Velani at Limaa, Inc. to anyone searching for a reliable and exceptional real estate agent. Thank you for making our dreams a reality!",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
    {
      name: "Rakesh",
      address:'Fullerton, CA',
      text: "We are grateful that we found Dhaval to assist us with our new home search, he is a complete package, he will assist you not just finding beautiful houses in good neighborhood, he will assist you with mortgage lenders and also with repair/remodeling thru’ his contacts with contractors. He inspects the house, finds the issues and ensures that his client is not overpaying. I would definitely use his service again and will recommend too to others.",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
    {
      name: "DILIP TILALA",
      address:'Orange, CA',
      text: "Dhaval is a great real estate agent. He provides good enough time to see properties and saves time for clients by showing all properties based on client requests in 1 day. Very responsive for questions either via text or call. I would recommend Dhaval as a real estate agent to anyone for their property.Dhaval made our home process smooth and provided fair reviews of each property we toured—amazing person and very knowledgeable about real estate.",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
    {
      name: "Kashyap Gandhi",
      address:'Orange, CA',
      text: "Working with Dhaval Velani at Limaa, Inc. was an absolute pleasure from start to finish. From the very first conversation, Dhaval was attentive, knowledgeable, and incredibly professional. He took the time to understand exactly what I was looking for and guided me through the entire home buying process with patience and care. \n\nWhat truly sets Dhaval apart is his dedication and responsiveness. He was always available to answer questions—no matter how big or small—and provided clear explanations every step of the way. His deep understanding of the market and keen negotiation skills helped ensure I got the best possible deal.\n\nHe made a stressful and complicated process feel smooth and manageable, and I always felt like I was in good hands. I can confidently say that I wouldn’t have had such a great experience without him.\n\nIf you’re looking for someone who genuinely cares about your goals and will go above and beyond for you, Dhaval Velani is the realtor you want by your side. Highly recommend!",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
    {
      name: "Atul Makwana",
      address:'Hemet, CA',
      text: "I found one of the best Agent in my life.",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (

      <Star
        key={i}
        size={20}
        fill={i < rating ? "#F1C40F" : "none"}
        color={i < rating ? "#F1C40F" : "#ccc"}
      />
    ));
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-2">Testimonials</h2>
          <div className="w-24 h-1 bg-[#3498DB] mx-auto"></div>
          <p className="mt-6 text-[#34495E] max-w-3xl mx-auto">
            Don't just take our word for it - hear from the countless families who trusted us to help them find their perfect home and turned their real estate dreams into reality.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 text-[#3498DB] opacity-10 z-0">
            <Quote size={180} strokeWidth={1} />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg border-t-4 border-[#3498DB] overflow-hidden relative z-10">
            <div className="w-full  p-6 md:p-10 relative">
              <div className="text-lg text-[#34495E] mb-6 relative">
                <Quote size={32} className="absolute -left-2 -top-4 text-[#3498DB] opacity-50" strokeWidth={2} />
                <div className="pl-7 text-justify">
                  {testimonials[currentIndex].text.split('\n\n').map((para, idx) => (
                    <p key={idx} className="mb-4">{para}</p>
                  ))}
                  {/* {testimonials[currentIndex].text} */}
                </div>
              </div>

              <div className="flex items-center mt-4">
                <div className="flex mr-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <h3 className="text-xl font-bold text-[#34495E]">
                  {testimonials[currentIndex].name}  <span className='text-sm font-semibold'>{testimonials[currentIndex].address}</span>
                </h3>
              </div>
            </div>

            {/* <div className="w-full lg:w-1/4 bg-[#F8FBFF] p-6 flex justify-center items-center h-full"> */}
              {/* <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#F1C40F] rounded-full flex items-center justify-center shadow-md">
                  <Quote size={20} color="#34495E" />
                </div>
              </div> */}
            {/* </div> */}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#3498DB] text-[#3498DB] hover:bg-[#3498DB] hover:text-white transition-colors duration-300"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>

            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => !isAnimating && setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#3498DB] w-8' : 'bg-[#D1E5F5]'
                  }`}
              />
            ))}

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#3498DB] text-[#3498DB] hover:bg-[#3498DB] hover:text-white transition-colors duration-300"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}