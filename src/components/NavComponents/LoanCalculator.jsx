import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const LoanCalculator = () => {
 
  const [term, setTerm] = useState('30');
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  

  const COLORS = ['#36B6FF', '#FFBB28', '#00C49F', '#FF8484'];

  const calculatePayments = () => {
    const monthlyRate = interestRate / 100 / 12;
    
 
    const numberOfPayments = parseInt(term) * 12;
    
  
    const principalAndInterest = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const taxesAndHOA = 350;
    const hazardInsurance = 160.42;
    
    const mortgageInsurance = 0;


    return {
      principalAndInterest: principalAndInterest,
      taxesAndHOA: 350,
      hazardInsurance: 160.42,
      mortgageInsurance: 0,
      total: principalAndInterest + 350 + 160.42
    };
  };

  const payments = calculatePayments();

  const pieData = [
    { name: 'Principal & Interest', value: payments.principalAndInterest },
    { name: 'Taxes & HOA', value: payments.taxesAndHOA },
    { name: 'Hazard Insurance', value: payments.hazardInsurance },
    { name: 'Mortgage Insurance', value: payments.mortgageInsurance }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8 shadow-lg mt-4 bg-white rounded-lg">
      
     
      <div>
        <h2 className="text-2xl text-gray-600 mb-6">Loan Details</h2>
        
        <div className="space-y-6">
          {/* <div>
            <label className="block text-sm text-gray-600 mb-2">Loan Type</label>
            <select 
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option>Conventional</option>
              <option>FHA</option>
              <option>VA</option>
            </select>
          </div> */}

          <div>
            <label className="block text-md text-gray-600 mb-2 font-medium">Term</label>
            <select 
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full p-2 border rounded-md bg-white text-gray-600 font-medium"
            >
              <option>30 Years</option>
              <option>20 Years</option>
              <option>15 Years</option>
              <option>10 Years</option>
              <option>5 Years</option>
            </select>
          </div>

          <div>
            <label className="block text-md text-gray-600 mb-2 font-medium">Loan Amount</label>
            <div className="relative">
              <input
                type="range"
                min="10000"
                max="10000000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-gray-600 font-medium"
              />
              <div className="mt-2 bg-gray-50 p-2 rounded text-right text-gray-600 font-medium">
                ${loanAmount.toLocaleString()}.00
              </div>
            </div>
          </div>

          <div>
            <label className="block text-md text-gray-600 mb-2 font-medium">Interest Rate</label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="15"
                step="0.125"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer text-gray-600 font-medium"
              />
              <div className="mt-2 bg-gray-50 p-2 rounded text-right text-gray-600 font-medium">
                {interestRate.toFixed(2)}%
              </div>
            </div>
          </div>

          {/* <button className="flex items-center text-gray-500 mt-4 hover:text-gray-700">
            <span className="text-2xl mr-2">+</span>
            Advanced
          </button> */}
        </div>
      </div>

      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-gray-600">Monthly Payments Breakdown</h2>
          {/* <div className="flex space-x-4">
            <button 
              className={`px-3 py-1 ${view === 'GRAPH' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setView('GRAPH')}
            >
              GRAPH
            </button>
            <button 
              className={`px-3 py-1 ${view === 'OVERVIEW' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setView('OVERVIEW')}
            >
              OVERVIEW
            </button>
          </div> */}
        </div>

        <div className="relative">
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx="47%"
              cy="57%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-gray-600">Your Payment</div>
            <div className="text-3xl font-bold text-gray-800">
              ${payments.total.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">${payments.principalAndInterest.toFixed(2)}</div>
            <div className="text-sm text-gray-500 font-medium">Principal & Interest</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">${payments.taxesAndHOA}</div>
            <div className="text-sm text-gray-500 font-medium">Taxes & HOA</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">${payments.hazardInsurance}</div>
            <div className="text-sm text-gray-500 font-medium">Hazard Insurance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-600">${payments.mortgageInsurance}</div>
            <div className="text-sm text-gray-500 font-medium">Mortgage Insurance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;