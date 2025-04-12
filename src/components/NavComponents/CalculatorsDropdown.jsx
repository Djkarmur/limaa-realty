import { useState, useRef, useEffect } from 'react';

import { Calculator } from 'lucide-react';
import PrincipalCalculator from './PrincipalCalculator';
import LoanCalculator from './LoanCalculator';
import MortgageCalculator from './MortgageCalculator';
import NapkinAnalysis from './NapkinAnalysis';

const CalculatorsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    setIsDropdownOpen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''; // Ensure scroll is restored on unmount
    };
  }, []);

  const renderModal = () => {
    switch (activeModal) {
      case 'mortgage':
        return <MortgageCalculator onClose={closeModal} />;
      case 'loan':
        return <LoanCalculator onClose={closeModal} />;
      case 'principal':
        return <PrincipalCalculator onClose={closeModal} />;
      case 'napkin':
        return <NapkinAnalysis onClose={closeModal} />; 
     
      default:
        return null;
    }
  };

  return (
    <li className="relative" ref={dropdownRef}>
      <button
        className="hover:text-[#5998C9] transition-colors duration-300 text-xl flex items-center"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Calculator className='w-6 h-6 mr-1'/>
        Calculators
        <svg 
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => openModal('mortgage')}
          >
            Mortgage Calculator
          </button>
          <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => openModal('loan')}
          >
            Loan Calculator
          </button>
          <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => openModal('principal')}
          >
            Principal Calculator
          </button> 
          <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => openModal('napkin')}
          >
            Napkin Analysis
          </button>
          {/* <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
            onClick={() => openModal('loanType')}
          >
            Loan Type Selector
          </button>
          <button 
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100 font-semibold"
            onClick={() => openModal('all')}
          >
            View All Calculators
          </button> */}
        </div>
      )}

      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {activeModal === 'mortgage' && 'Mortgage Calculator'}
                {activeModal === 'loan' && 'Loan Calculator'}
                {activeModal === 'principal' && 'Principal Calculator'}
                {activeModal === 'loanType' && 'Loan Type Selector'}
                {activeModal === 'all' && 'All Calculators'}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              {renderModal()}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default CalculatorsDropdown;