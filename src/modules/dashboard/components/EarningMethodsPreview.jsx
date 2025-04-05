import React from 'react';
import { Link } from 'react-router-dom';
import { earningMethodsData } from '@/modules/earningMethods/data/earningMethodsData';

const EarningMethodsPreview = () => {
  // Get just a few methods for the preview
  const previewMethods = earningMethodsData.slice(0, 3);

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Popular Earning Methods</h3>
        <Link to="/earning-methods" className="text-primary text-sm hover:underline">
          View all
        </Link>
      </div>
      
      <div className="space-y-4">
        {previewMethods.map((method) => (
          <div key={method.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
            <div 
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: method.color }}
            >
              {method.icon}
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">{method.name}</h4>
              <p className="text-sm text-gray-600 line-clamp-1">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link to="/earning-methods" className="text-primary hover:underline text-sm font-medium">
          Explore all {earningMethodsData.length} earning methods →
        </Link>
      </div>
    </div>
  );
};

export default EarningMethodsPreview;