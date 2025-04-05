import React, { useState } from 'react';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const EarningMethodCard = ({ method }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper function to determine the badge color based on difficulty level
  const getDifficultyBadgeClass = () => {
    switch (method.difficultyLevel) {
      case 'Beginner':
        return 'badge-success';
      case 'Intermediate':
        return 'badge-warning';
      case 'Advanced':
        return 'badge-danger';
      default:
        return 'badge-success';
    }
  };

  return (
    <div className="card h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: method.color }}
        >
          {method.icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{method.name}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className={`badge ${getDifficultyBadgeClass()}`}>
              {method.difficultyLevel}
            </span>
            <span className="badge bg-blue-100 text-blue-800">
              {method.earningPotential}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-4 flex-grow">
        {isExpanded ? method.description : `${method.description.substring(0, 120)}...`}
      </p>

      {method.keyPoints && isExpanded && (
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">Key Points:</h4>
          <ul className="space-y-1">
            {method.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-success mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-dark text-sm font-medium cursor-pointer"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        
        <a
          href={method.learnMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-primary text-sm"
        >
          <FaInfoCircle className="mr-1" />
          Learn More
        </a>
      </div>
    </div>
  );
};

export default EarningMethodCard;