import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PrincipalCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [paymentsMade, setPaymentsMade] = useState(12);
  const [loanLength, setLoanLength] = useState(30);
  const [principalBalance, setPrincipalBalance] = useState(0);
  const [principalPaid, setPrincipalPaid] = useState(0);
  
  const calculateLoanDetails = () => {
    const monthlyRate = (interestRate / 100) / 12;
    const totalPayments = loanLength * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    let remainingBalance = loanAmount;
    let totalPrincipalPaid = 0;
    
    for (let i = 0; i < paymentsMade; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
      totalPrincipalPaid += principalPayment;
    }
    
    setPrincipalBalance(Math.max(0, remainingBalance));
    setPrincipalPaid(Math.min(loanAmount, totalPrincipalPaid));
  };

  useEffect(() => {
    calculateLoanDetails();
  }, [loanAmount, interestRate, paymentsMade, loanLength]);

  const chartData = [
    { name: 'Principal Balance', value: principalBalance },
    { name: 'Principal Paid', value: principalPaid }
  ];

  const COLORS = ['#38bdf8', '#fbbf24'];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600">
          <h1 className="text-xl md:text-2xl font-bold text-center text-[#34495E]">
            How much will my principal be after {paymentsMade} months?
          </h1>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
           
            <div className="space-y-6">
             
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

             
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Interest Rate</label>
                <div className="relative">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    className="w-full pl-4 pr-8 py-2 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>

              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Payments Made (Months)</label>
                <input
                  type="number"
                  value={paymentsMade}
                  onChange={(e) => setPaymentsMade(Number(e.target.value))}
                  min="0"
                  max={loanLength * 12}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Loan Length</label>
                <select
                  value={loanLength}
                  onChange={(e) => setLoanLength(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                >
                  {[5, 10, 15, 20, 25, 30].map((year) => (
                    <option key={year} value={year}>
                      {year} Years
                    </option>
                  ))}
                </select>
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-center space-y-6">
              
              <div className="relative">
                <PieChart width={280} height={280}>
                  <Pie
                    data={chartData}
                    cx={140}
                    cy={140}
                    innerRadius={100}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-sm font-medium text-gray-600">Principal Balance</div>
                  <div className="text-2xl font-bold text-gray-800">${principalBalance.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">
                    {((principalBalance / loanAmount) * 100).toFixed(2)}%
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold text-lg text-blue-600">${principalBalance.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Principal Balance</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="font-bold text-lg text-amber-600">${principalPaid.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Principal Paid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalCalculator;