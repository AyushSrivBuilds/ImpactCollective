import React, { useState } from 'react';
import { DollarSign, Heart } from 'lucide-react';

const DonateSection: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const presetAmounts = [10, 25, 50, 100];
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setAmount('');
    } else {
      setAmount(parseFloat(value));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle the donation processing
    alert(`Thank you for your donation of ₹${amount}!`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Support This Cause</h3>
      <p className="text-gray-600 mb-6">
        Your contribution helps us make a real difference. Choose an amount to donate or enter your own.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Select Donation Amount</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`py-2 px-4 rounded-md transition duration-200 ${
                  amount === preset
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Other amount"
              className="pl-10 w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              min="1"
              step="0.01"
            />
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="donor-name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="donor-name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="John Doe"
              disabled={isAnonymous}
            />
          </div>
          
          <div>
            <label htmlFor="donor-email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="donor-email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={(e) => {
                setIsAnonymous(e.target.checked);
                if (e.target.checked) {
                  setDonorName('');
                }
              }}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="anonymous" className="ml-2 block text-gray-700">
              Make my donation anonymous
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!amount || amount <= 0}
          className={`w-full flex items-center justify-center py-3 px-4 rounded-md transition duration-200 ${
            amount && amount > 0
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Heart className="w-5 h-5 mr-2" />
          {amount && amount > 0 ? `Donate ₹${amount}` : 'Select an amount'}
        </button>
      </form>
    </div>
  );
};

export default DonateSection;