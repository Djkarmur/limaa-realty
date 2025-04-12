import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export default function NapkinAnalysis() {
  const [inputs, setInputs] = useState({
    marketRent: 1200,
    unitMix: 9,
    expenseRatio: 20,
    renovationCosts: 100000,
    marketCapRate: 6
  });

  const [results, setResults] = useState({
    gpr: 0,
    noi: 0,
    stabilizedValue: 0,
    totalCostBasis: 0,
    maxAllowableOffer: 0
  });

  // Calculate results whenever inputs change
  useEffect(() => {
    const gpr = inputs.marketRent * inputs.unitMix * 12;
    const noi = gpr * (1 - inputs.expenseRatio / 100);
    const stabilizedValue = noi / (inputs.marketCapRate / 100);
    const totalCostBasis = stabilizedValue * 0.78;
    const maxAllowableOffer = totalCostBasis - inputs.renovationCosts;

    setResults({
      gpr,
      noi,
      stabilizedValue,
      totalCostBasis,
      maxAllowableOffer
    });
  }, [inputs]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  // Data for charts
  const pieData = [
    { name: 'Expenses', value: results.gpr - results.noi },
    { name: 'NOI', value: results.noi }
  ];

  const barData = [
    { name: 'GPR', value: results.gpr },
    { name: 'NOI', value: results.noi },
    { name: 'Stabilized Value (/100)', value: results.stabilizedValue / 100 },
    { name: 'Max Offer (/100)', value: results.maxAllowableOffer / 100 }
  ];

  const COLORS = ['#ff8042', '#0088fe', '#00C49F', '#FFBB28'];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Napkin Analysis</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Inputs</h2>
          
          <div className="space-y-4 text-[#34495E]">
            <div>
              <label className="block text-sm font-medium text-gray-700">Market Rents per Unit</label>
              <input
                type="number"
                name="marketRent"
                value={inputs.marketRent}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 text-[#34495E] shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Unit Mix</label>
              <input
                type="number"
                name="unitMix"
                value={inputs.unitMix}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 text-[#34495E] shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Expenses Ratio (%)</label>
              <input
                type="number"
                name="expenseRatio"
                value={inputs.expenseRatio}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 text-[#34495E] shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Renovations Needed</label>
              <input
                type="number"
                name="renovationCosts"
                value={inputs.renovationCosts}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Market Cap Rate (%)</label>
              <input
                type="number"
                name="marketCapRate"
                value={inputs.marketCapRate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Results</h2>
          
          <div className="space-y-4 text-[#34495E]">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Gross Potential Rent (GPR):</span>
              <span className="font-bold">${results.gpr.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Net Operating Income (NOI):</span>
              <span className="font-bold">${results.noi.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Stabilized Value:</span>
              <span className="font-bold">${results.stabilizedValue.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Total Cost Basis:</span>
              <span className="font-bold">${results.totalCostBasis.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Maximum Allowable Offer:</span>
              <span className="font-bold text-green-600">${results.maxAllowableOffer.toLocaleString()}</span>
            </div>
            
            <div className="pt-2 text-xs text-gray-500">
              <div><span className="font-medium">GPR Formula:</span> Unit Mix × Market Rent × 12</div>
              <div><span className="font-medium">NOI Formula:</span> GPR - Expenses</div>
              <div><span className="font-medium">Stabilized Value:</span> NOI ÷ Market Cap Rate</div>
              <div><span className="font-medium">Total Cost Basis:</span> Stabilized Value × 78%</div>
              <div><span className="font-medium">Max Offer:</span> Total Cost Basis - Renovation Costs</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4 text-center text-gray-700">Income Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-4 text-center text-gray-700">Financial Metrics</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2 text-blue-800">Investment Analysis Summary</h3>
        <p className="text-gray-700">
          Based on {inputs.unitMix} units with an average rent of ${inputs.marketRent}/month, this property could 
          generate a Gross Potential Rent of ${results.gpr.toLocaleString()} annually. After accounting for 
          {inputs.expenseRatio}% expenses, the Net Operating Income would be ${results.noi.toLocaleString()}.
        </p>
        <p className="text-gray-700 mt-2">
          With a market cap rate of {inputs.marketCapRate}%, the stabilized value is ${results.stabilizedValue.toLocaleString()}.
          Considering renovation costs of ${inputs.renovationCosts.toLocaleString()}, the maximum allowable offer 
          would be ${results.maxAllowableOffer.toLocaleString()}.
        </p>
      </div>
    </div>
  );
}