import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoanTypeSelector = () => {
  const [selectedType, setSelectedType] = useState(null);

  const loanTypes = [
    {
      id: 'purchase',
      title: 'Purchase',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
          <path
            fill="currentColor"
            d="M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
          />
        </svg>
      )
    },
    {
      id: 'refinance',
      title: 'Refinance',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
          />
        </svg>
      )
    },
    {
      id: 'equity',
      title: 'Home Equity',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
          />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-60 bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Decorative top pattern */}
        <div className="h-8 mb-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full opacity-50" />

        {/* Main content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
            Select a Loan Type
          </h1>

          {/* Loan type options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {loanTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`relative group ${
                  selectedType === type.id ? 'scale-105' : ''
                }`}
              >
                <div className="absolute inset-0 bg-white rounded-full transform transition-transform group-hover:scale-105" />
                <div
                  className={`relative flex flex-col items-center justify-center p-8 rounded-full border-2 transition-all ${
                    selectedType === type.id
                      ? 'border-blue-500 text-blue-500 shadow-lg'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-2">{type.icon}</div>
                  
                  {/* Title */}
                  <span className="font-medium">{type.title}</span>
                  
                  {/* Arrow */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center space-x-4">
          <Link to='/'>
          <button className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
              back
            </button>
          </Link>
            
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                selectedType
                  ? 'bg-gray-700 text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!selectedType}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeSelector;