import React from 'react';
import { Link } from 'react-router-dom';

const RecentEarnings = () => {
  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Earnings</h3>
        <Link to="/tracker" className="text-primary text-sm hover:underline">
          View all
        </Link>
      </div>
      
      <div className="space-y-1 mb-4">
        <div className="bg-gray-50 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <div className="text-gray-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h4 className="text-gray-700 font-medium">No earnings recorded yet</h4>
          <p className="text-gray-500 text-sm mt-1">Start tracking your online income to see it here</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link to="/tracker" className="btn-outline w-full text-center">
          Add Earnings
        </Link>
      </div>
    </div>
  );
};

export default RecentEarnings;