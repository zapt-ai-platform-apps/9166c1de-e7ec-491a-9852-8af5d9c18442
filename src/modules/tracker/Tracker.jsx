import React, { useState } from 'react';
import EarningsForm from './components/EarningsForm';
import EarningsTable from './components/EarningsTable';
import EarningsChart from './components/EarningsChart';
import { FaPlus } from 'react-icons/fa';

const Tracker = () => {
  const [earnings, setEarnings] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddEarning = (newEarning) => {
    setEarnings([...earnings, { ...newEarning, id: Date.now() }]);
    setIsFormOpen(false);
  };

  const handleDeleteEarning = (id) => {
    setEarnings(earnings.filter(earning => earning.id !== id));
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Earnings Tracker</h1>
        <p className="text-gray-600 mt-1">
          Track and manage your online income
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Earnings Overview
              </h2>
              <button 
                onClick={toggleForm}
                className="btn-primary flex items-center cursor-pointer"
              >
                <FaPlus className="mr-2" />
                Add Earnings
              </button>
            </div>
            
            <EarningsChart earnings={earnings} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card h-full">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Summary
            </h2>
            
            {earnings.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">No earnings recorded yet</p>
                <p className="text-gray-500 text-sm mt-1">Add your first entry to see your stats</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Total Earnings</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${earnings.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2)}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Earnings This Month</div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${earnings
                      .filter(item => {
                        const date = new Date(item.date);
                        const now = new Date();
                        return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                      })
                      .reduce((total, item) => total + parseFloat(item.amount), 0)
                      .toFixed(2)}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Most Profitable Method</div>
                  {(() => {
                    const methodTotals = {};
                    earnings.forEach(item => {
                      methodTotals[item.method] = (methodTotals[item.method] || 0) + parseFloat(item.amount);
                    });
                    
                    let topMethod = '';
                    let topAmount = 0;
                    
                    Object.entries(methodTotals).forEach(([method, amount]) => {
                      if (amount > topAmount) {
                        topMethod = method;
                        topAmount = amount;
                      }
                    });
                    
                    return (
                      <div className="text-lg font-semibold text-gray-900">
                        {topMethod || 'N/A'}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Add New Earnings
          </h2>
          <EarningsForm onSubmit={handleAddEarning} onCancel={() => setIsFormOpen(false)} />
        </div>
      )}

      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Earnings History
        </h2>
        <EarningsTable earnings={earnings} onDelete={handleDeleteEarning} />
      </div>
    </div>
  );
};

export default Tracker;