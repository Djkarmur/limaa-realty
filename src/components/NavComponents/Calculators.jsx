import React from "react";
import {
  Calculator,
  Home,
  DollarSign,
  BarChart3,
  FileText,
  Percent,
  PiggyBank,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Calculators = () => {
  const calculators = [
    { icon: <Calculator size={32} />, title: "Mortgage Calculator" },
    { icon: <Home size={32} />, title: "Refinance Calculator" },
    { icon: <BarChart3 size={32} />, title: "Principal Calculator" },
    { icon: <DollarSign size={32} />, title: "Extra Payment Calculator" },
    { icon: <PiggyBank size={32} />, title: "How much home can I afford?" },
    { icon: <FileText size={32} />, title: "Tax Benefits of Buying" },
    { icon: <Percent size={32} />, title: "What's my APR?" },
    { icon: <Home size={32} />, title: "Interest-Only Calculator" },
    { icon: <HelpCircle size={32} />, title: "Should I pay Points?" },
    { icon: <DollarSign size={32} />, title: "How much income to qualify?" },
    { icon: <PiggyBank size={32} />, title: "Buydown Calculator" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-center text-gray-700 mb-12">
        Mortgage Calculators
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {calculators.map((calc, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            {index == 0 ? (
              <Link to="/mortgage-calculator">
                <div className="text-gray-400 mb-3">{calc.icon}</div>
                <h3 className="text-gray-500 text-sm">{calc.title}</h3>
              </Link>
            ) : (
              index == 1 ? (
                <Link to="/loan-calculator">
                <div className="text-gray-400 mb-3">{calc.icon}</div>
                <h3 className="text-gray-500 text-sm">{calc.title}</h3>
              </Link>
              ) : (
                index == 2 ? (
                  <Link to="/principal-calculator">
                  <div className="text-gray-400 mb-3">{calc.icon}</div>
                  <h3 className="text-gray-500 text-sm">{calc.title}</h3>
                </Link>
                ) : (
                  <Link to="">
                  <div className="text-gray-400 mb-3">{calc.icon}</div>
                  <h3 className="text-gray-500 text-sm">{calc.title}</h3>
                </Link>
                )
              )
              
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 border-t pt-8">
        <h2 className="text-xl text-gray-700 mb-4">Legal Notice</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          The calculators and tools provided herein are intended solely for
          educational and planning purposes. These resources should not be
          construed as financial or investment advice. While we strive for
          accuracy, the results generated are estimates based on the information
          you provide and may not reflect your specific financial situation. The
          calculations are for illustrative purposes only and may vary from
          actual outcomes. We strongly recommend consulting with qualified
          financial professionals, mortgage advisors, or tax specialists for
          guidance tailored to your individual circumstances before making any
          financial decisions.
        </p>
      </div>
    </div>
  );
};

export default Calculators;
