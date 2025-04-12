import React from "react";
import {
  Calculator,
  Search,
  Newspaper,
  BookOpen,
  Smartphone,
  HelpCircle,
  ThumbsUp,
  FileText,
} from "lucide-react";

const MortgageResources = () => {
  const resources = [
    { icon: <Calculator className="w-6 h-6" />, title: "Mortgage Calculator" },
    { icon: <Search className="w-6 h-6" />, title: "Step-By-Step Guides" },
    { icon: <FileText className="w-6 h-6" />, title: "Loan Programs" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Download Mobile App" },
    { icon: <ThumbsUp className="w-6 h-6" />, title: "Quick Application" },
    { icon: <Newspaper className="w-6 h-6" />, title: "Mortgage News" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Mortgage Basics" },
    { icon: <HelpCircle className="w-6 h-6" />, title: "Mortgage FAQ" },
  ];

  const steps = [
    {
      number: "1",
      title: "Answer a few questions",
      description:
        "Tell us what you're looking for so we can match you with the perfect mortgage",
    },
    {
      number: "2",
      title: "Find your lender",
      description:
        "We'll search for the top rates from our network of lenders in your area",
    },
    {
      number: "3",
      title: "Lock in your rate",
      description:
        "Your lender will contact you shortly so you get more info or lock in your rate",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 ">
      <div className="text-center mb-12">
        <h2 className="text-gray-600 text-lg mb-2">MORTGAGE RESOURCES</h2>
        <h1 className="text-gray-700 text-3xl font-semibold">
          Tools to help you along the way
        </h1>
      </div>

      <div className="flex flex-col  items-center md:flex-row wrap gap-4 mb-16">
        <div className="mt-10 md:mt-0 md:ml-10 relative w-sm max-w-lg">
          {/* Circular Border */}
          <div className="absolute -inset-2 rounded-full border-4 border-gray-200"></div>
          {/* Image */}
          <img
            src="https://d2vfmc14ehtaht.cloudfront.net/images/circles/home-keys.png?format=webp" // Replace with your image URL
            alt="Mortgage"
            className="rounded-full object-cover relative z-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <div className="text-gray-500">{resource.icon}</div>
              <span className="text-gray-600">{resource.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-gray-700 text-3xl font-semibold mb-8">
          Begin Your Home Loan Process Today!
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 px-6 relative">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-6 bg-white text-gray-600 font-semibold">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[175px] w-full border-t-2 border-gray-300 border-dashed" />
              )}
              <h3 className="text-xl text-gray-700 font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MortgageResources;
