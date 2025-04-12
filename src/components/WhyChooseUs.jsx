import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  // Custom color variables - using your provided hex codes
  const colors = {
    primary: "#3498DB",    // Blue
    secondary: "#F1C40F",  // Yellow/Gold
    dark: "#34495E"        // Dark Blue/Slate
  };

  const features = [
    {
      title: "Expertise",
      description: "Our team of seasoned real estate professionals brings a wealth of knowledge and experience. From market trends to legal intricacies, we ensure you are well-informed and confident in your decisions."
    },
    {
      title: "Personalized Service",
      description: "We understand that each client is unique, and so are their real estate needs. Our tailored approach ensures you receive a customized experience that aligns perfectly with your goals and preferences."
    },
    {
      title: "Integrity and Transparency",
      description: "Trust is the foundation of our business. We conduct ourselves with the utmost integrity, ensuring transparency in all transactions. Your peace of mind is our priority."
    },
    {
      title: "Innovative Solutions",
      description: "In a rapidly evolving real estate landscape, we stay ahead of the curve with innovative solutions and cutting-edge technology. This allows us to provide you with the best possible service in an ever-changing market."
    }
  ];

  return (
    <section className="py-10 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#34495E] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ 
                borderTop: `4px solid ${index % 2 === 0 ? colors.primary : colors.secondary}`,
              }}
            >
              <div className="flex items-start mb-4">
                <CheckCircle 
                  className="w-6 h-6 mt-1 flex-shrink-0" 
                  style={{ color: index % 2 === 0 ? colors.primary : colors.secondary }}
                />
                <h3 
                  className="text-xl font-semibold ml-3" 
                  style={{ color: colors.dark }}
                >
                  {feature.title}
                </h3>
              </div>
              <p className="ml-9 text-gray-600 text-lg text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;