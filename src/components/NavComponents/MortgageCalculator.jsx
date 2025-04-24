import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const MortgageCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(10500);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];

  const calculateMonthlyPayment = () => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const taxesAndHOA = 350;
    const hazardInsurance = 160.42;
    const mortgageInsurance = 297.06;

    return {
      principal: monthlyPayment,
      taxesAndHOA,
      hazardInsurance,
      mortgageInsurance,
      total: monthlyPayment + taxesAndHOA + hazardInsurance + mortgageInsurance
    };
  };

  const payments = calculateMonthlyPayment();

  const pieData = [
    { name: 'Principal & Interest', value: payments.principal },
    { name: 'Taxes & HOA', value: payments.taxesAndHOA },
    { name: 'Hazard Insurance', value: payments.hazardInsurance },
    { name: 'Mortgage Insurance', value: payments.mortgageInsurance },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg lg:shadow-lg p-4  mt-4">
      <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-center text-white">
          Mortgage Calculator
          </h1>
        </div>
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Mortgage Calculator</h2> */}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Property Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Price: ${propertyPrice.toLocaleString()}
            </label>
            <input
              type="range"
              min="50000"
              max="10000000"
              step="1000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Down Payment Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Down Payment: ${downPayment.toLocaleString()} ({((downPayment/propertyPrice)*100).toFixed(1)}%)
            </label>
            <input
              type="range"
              min="0"
              max={propertyPrice * 0.5}
              step="1000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Interest Rate Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Loan Term Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term: {loanTerm} years
            </label>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Payment Distribution</h3>
          <div className="w-full h-64">
            <PieChart width={400} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Monthly Payments Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Principal & Interest:</span>
            <span className="font-medium text-gray-800">${payments.principal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Taxes & HOA:</span>
            <span className="font-medium text-gray-800">${payments.taxesAndHOA}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Hazard Insurance:</span>
            <span className="font-medium text-gray-800">${payments.hazardInsurance}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-600">Mortgage Insurance:</span>
            <span className="font-medium text-gray-800">${payments.mortgageInsurance}</span>
          </div>
          <div className="flex justify-between items-center pt-2 font-bold text-lg">
            <span className="text-gray-800">Total Monthly Payment:</span>
            <span className="text-gray-800">${payments.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;